import { createTestClient, http, publicActions, walletActions } from 'viem';
import { getTestRpcSetup, mainnetTest } from './mainnet-test';

export function createViemTestClient() {
  return createTestClient({
    chain: mainnetTest,
    mode: 'anvil',
    transport: http(getTestRpcSetup().rpcUrl),
  })
    .extend(publicActions)
    .extend(walletActions);
}

export const mainnetTestPublicClient = createViemTestClient();
