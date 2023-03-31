import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import { CodeBlock, atomOneDark } from "react-code-blocks";
import styled from "@emotion/styled";
import { Theme } from "@mui/material";

import SafeInfo from "src/components/safe-info/SafeInfo";
import ConnectedWalletLabel from "src/components/connected-wallet-label/ConnectedWalletLabel";
import { useAccountAbstraction } from "src/store/accountAbstractionContext";
import { SafeAuthKit, SafeAuthProviderType } from '@safe-global/auth-kit'



const AuthKitDemo = () => {
  const { loginWeb3Auth, isAuthenticated, safeSelected, chainId } =
    useAccountAbstraction();

  return (
    <>
      <Typography variant="h2" component="h1">
        The Auth Kit
      </Typography>

      <Typography marginTop="16px">
        Get authenticated easily using an email address,
        social media account, or traditional crypto wallets like Metamask.
      </Typography>

      <Divider style={{ margin: "32px 0 28px 0" }} />

      {/* Auth Demo */}
      <Typography
        variant="h4"
        component="h2"
        fontWeight="700"
        marginBottom="16px"
      >
        Try It
      </Typography>

      {isAuthenticated ? (
        <Box display="flex" gap={3}>
          {/* safe Account */}
          <ConnectedContainer>
            <Typography fontWeight="700">Safe Account</Typography>

            <Typography fontSize="14px" marginTop="8px" marginBottom="32px">
              Your Safe account (Smart Contract) holds and protects your assets.
            </Typography>

            {/* Safe Info */}
            {safeSelected && (
              <SafeInfo safeAddress={safeSelected} chainId={chainId} />
            )}
          </ConnectedContainer>

          {/* owner ID */}
          <ConnectedContainer>
            <Typography fontWeight="700">Owner ID</Typography>

            <Typography fontSize="14px" marginTop="8px" marginBottom="32px">
              Your Owner account signs transactions to unlock your assets.
            </Typography>

            {/* Owner details */}
            <ConnectedWalletLabel />
          </ConnectedContainer>
        </Box>
      ) : (
        <ConnectContainer
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={2}
        >
          <Typography variant="h4" component="h3" fontWeight="700">
            Create a safe using the Auth Kit
          </Typography>

          <Button variant="contained" onClick={loginWeb3Auth}>
            Connect
          </Button>
        </ConnectContainer>
      )}

    </>
  );
};

export default AuthKitDemo;


const ConnectContainer = styled(Box)<{
  theme?: Theme;
}>(
  ({ theme }) => `
  
  border-radius: 10px;
  border: 1px solid ${theme.palette.border.light};
  padding: 50px;
`
);


const ConnectedContainer = styled(Box)<{
  theme?: Theme;
}>(
  ({ theme }) => `
  
  border-radius: 10px;
  border: 1px solid ${theme.palette.border.light};
  padding: 40px 32px;
`
);
