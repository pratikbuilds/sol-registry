"use client";
import { useState } from "react";
import { useWallets } from "@wallet-standard/react";
import { useWallet } from "./WalletContext";

import { Button } from "@/registry/new-york/ui/button";
import { WalletListModal } from "./WalletListModal";
import { WalletInfo } from "./WalletInfo";

export function ConnectWalletBtn() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const wallets = useWallets();
  const { isConnected } = useWallet();
  console.log("isConnected", isConnected);
  const solanaWallets = wallets.filter((wallet) =>
    wallet.chains.some((chain) => chain.startsWith("solana:"))
  );

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
