import { Chain } from 'viem';
import { mainnet } from 'viem/chains';

export const pool = Number(process.env.VITEST_POOL_ID ?? 1);

export function getTestRpcSetup() {
  const port = 8645;
  const rpcUrl = `http://127.0.0.1:${port}/${pool}`;
  return { port, rpcUrl };
}

export const mainnetTest = {
  ...mainnet,
} as const satisfies Chain;
