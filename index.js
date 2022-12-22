import { Metaplex } from "@metaplex-foundation/js";
import { Connection, clusterApiUrl } from "@solana/web3.js";

// provides our connection to the Solana devnet network
const connection = new Connection(clusterApiUrl("devnet"));
// uses the devnet connection to interact with the Metaplex programs
const metaplex = new Metaplex(connection);