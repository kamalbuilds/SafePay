import React, { useState, useEffect } from "react";
import { GaslessOnboarding, LoginConfig, GaslessWalletConfig } from "../components/Gaslessonboard";
import { SafeEventEmitterProvider } from "@web3auth/base";

interface GaslessOnboardingProps {
  loginConfig: LoginConfig;
  gaslessWalletConfig: GaslessWalletConfig;
}

export default function GaslessOnboardingComponent({ loginConfig, gaslessWalletConfig }: GaslessOnboardingProps) {
  const [provider, setProvider] = useState<SafeEventEmitterProvider | null>(null);
  const gaslessOnboarding = new GaslessOnboarding(loginConfig, gaslessWalletConfig);

  useEffect(() => {
    async function init() {
      try {
        await gaslessOnboarding.init();
        setProvider(gaslessOnboarding.getProvider());
      } catch (err) {
        console.error(err);
      }
    }

    init();
  }, []);

  return (
    <div>
      {provider ? (
        <p>Provider: {provider.constructor.name}</p>
      ) : (
        <p>Initializing GaslessOnboarding...</p>
      )}
    </div>
  );
}
