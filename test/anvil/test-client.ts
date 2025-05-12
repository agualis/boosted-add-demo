import { createTestClient, http, publicActions, walletActions } from 'viem';
import { getTestRpcSetup, mainnetTest } from './mainnet-test';

export type TestPublicClient = ReturnType<typeof createViemTestClient>;

export function createViemTestClient(rpcUrl = getTestRpcSetup().rpcUrl) {
  return createTestClient({
    chain: mainnetTest,
    mode: 'anvil',
    transport: http(rpcUrl),
  })
    .extend(publicActions)
    .extend(walletActions);
}

export const mainnetTestPublicClient: TestPublicClient = createViemTestClient();
