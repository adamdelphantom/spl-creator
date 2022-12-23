import { Connection, clusterApiUrl, Keypair, LAMPORTS_PER_SOL } from "@solana/web3.js";

// provides our connection to the Solana devnet network
const connection = new Connection(clusterApiUrl("devnet"));

const authorityWallet = Keypair.generate();
console.log(`Wallet: ${authorityWallet.publicKey}`);

const authorityAirdropSignature = await connection.requestAirdrop(
    authorityWallet.publicKey,
    LAMPORTS_PER_SOL
)

await connection.confirmTransaction(authorityAirdropSignature, {
    commitment: "confirmed",
})

let authorityBalance = await connection.getBalance(authorityWallet.publicKey);

console.log(`Authority Wallet Balance: ${authorityBalance}`);