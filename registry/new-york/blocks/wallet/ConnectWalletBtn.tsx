"use client";
import { useState } from "react";
import { useWallets } from "@wallet-standard/react";
import { useWallet } from "./WalletContext";

import { Button } from "../../ui/button";
import { WalletListModal } from "./WalletListModal";
import { WalletInfo } from "./WalletInfo";

export function ConnectWalletBtn() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const wallets = useWallets();
  const { isConnected } = useWallet();

  const solanaWallets = wallets.filter((wallet) =>
    wallet.chains.some((chain) => chain.startsWith("solana:"))
  );

  if (isConnected) {
    return null; // Don't show connect button when already connected
  }

  return (
    <>
      {isConnected ? (
        <WalletInfo />
      ) : (
        <Button onClick={() => setIsModalOpen(true)}>Connect Wallet</Button>
      )}
      <WalletListModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        wallets={solanaWallets}
      />
    </>
  );
}
