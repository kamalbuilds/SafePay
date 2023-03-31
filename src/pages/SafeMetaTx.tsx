import { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { BigNumber, ethers } from 'ethers';
import AccountAbstraction, {
  MetaTransactionData,
  MetaTransactionOptions,
  OperationType,
} from '@safe-global/account-abstraction-kit-poc';
import { GelatoRelayAdapter } from '@safe-global/relay-kit';

type Props = {
  safeSignerPrivateKey: string;
  rpcUrl: string;
  relayApiKey: string;
};

type TxConfig = {
  to: string;
  data: string;
  value: string;
  gasLimit?: string;
};

const mockOnRampConfig = {
  ADDRESS: '0x4D39a545144D8e2F19E8009aB5F123FA1043cc98',
  PRIVATE_KEY: '32ecaa3b2feb4051470c98b6d2f2da8861ae83b11ccc7123aee1c9efc4ef1933',
};

const SafeMetaTx: React.FC<Props> = ({
  safeSignerPrivateKey,
  rpcUrl,
  relayApiKey,
}) => {
  const [to, setTo] = useState('');
  const [data, setData] = useState('');
  const [value, setValue] = useState('');
  const [gasLimit, setGasLimit] = useState('');

  const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
  const signer = new ethers.Wallet(safeSignerPrivateKey, provider);
  const relayAdapter = new GelatoRelayAdapter(relayApiKey);
  const safeAccountAbstraction = new AccountAbstraction(signer);
  const [taskId, setTaskId] = useState<string | null>(null);

  const handleExecute = async () => {
    try {
      // Calculate Safe address
      const predictedSafeAddress = await safeAccountAbstraction.getSafeAddress();
      console.log({ predictedSafeAddress });
  
      const isSafeDeployed = await safeAccountAbstraction.isSafeDeployed();
      console.log({ isSafeDeployed });
  
      // Parse tx config
      const txConfig: TxConfig = {
        to,
        data,
        value,
        gasLimit,
      };
      if (!txConfig.to || !txConfig.data || !txConfig.value) {
        throw new Error('Missing required tx config fields');
      }
      txConfig.gasLimit = txConfig.gasLimit ?? '0';
  
      // Fake on-ramp to fund the Safe
      const safeBalance = await provider.getBalance(predictedSafeAddress);
      console.log({
        safeBalance: ethers.utils.formatEther(safeBalance.toString()),
      });
      if (safeBalance.lt(txConfig.value)) {
        const fakeOnRampSigner = new ethers.Wallet(
          mockOnRampConfig.PRIVATE_KEY,
          provider
        );
        const onRampResponse = await fakeOnRampSigner.sendTransaction({
          to: predictedSafeAddress,
          value: txConfig.value,
        });
        console.log(
          `Funding the Safe with ${ethers.utils.formatEther(
            txConfig.value.toString()
          )} ETH`
        );
        await onRampResponse.wait();
  
        const safeBalanceAfter = await provider.getBalance(
          predictedSafeAddress
        );
        console.log({
          safeBalance: ethers.utils.formatEther(safeBalanceAfter.toString()),
        });
      }
  
      // Relay the transaction
      const safeTransaction: MetaTransactionData = {
        to: txConfig.to,
        data: txConfig.data,
        value: BigNumber.from(txConfig.value),
        operation: OperationType.Call,
        safeTxGas: BigNumber.from(txConfig.gasLimit),
      };
      const metaTxOptions: MetaTransactionOptions = {
        signers: [safeSignerPrivateKey],
        abiEncoder: safeAccountAbstraction.getABI(),
      };
      const taskId = await relayAdapter.submitTransaction(
        safeTransaction,
        metaTxOptions
      );
      console.log(`Submitted meta transaction with taskId: ${taskId}`);
      setTaskId(taskId);
    } catch (error) {
      console.error(error);
    }
  };
  
    
    return (
      <div>
          <TextField
          label="To"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          />
          <TextField
          label="Data"
          value={data}
          onChange={(e) => setData(e.target.value)}
          />
          <TextField
          label="Value (in wei)"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          />
          <TextField
          label="Gas Limit"
          value={gasLimit}
          onChange={(e) => setGasLimit(e.target.value)}
          />
          <Button variant="contained" color="primary" onClick={handleExecute}>
            Execute Transaction
          </Button>
          {taskId && <p>Task ID: {taskId}</p>}
      </div>
    );
    };
    
    export default SafeMetaTx;
