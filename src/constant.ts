import { MaticWeb3Client } from "./inherited";
import { Logger } from "./utils";

export let Web3Client: typeof MaticWeb3Client;

export const setWeb3Client = (web3Client) => {
    Web3Client = web3Client;
}

export const EXTRA_GAS_FOR_PROXY_CALL = 1000000
export const LOGGER = new Logger();
