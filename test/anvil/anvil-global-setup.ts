import { startProxy } from '@viem/anvil';
import { mainnetTest } from './mainnet-test';
import { mainnet } from 'viem/chains';

async function sleep(time: number) {
  return new Promise(resolve => {
    setTimeout(resolve, time);
  });
}

// const beforePectraBlockNumber = 22426500n; // block number from 6 May 2025 (1 day before pectra launch)

export async function setup() {
  const mainnetForkBlockNumber: bigint | undefined = process.env
    .FORK_BLOCK_NUMBER
    ? BigInt(process.env.FORK_BLOCK_NUMBER)
    : undefined; // Will use current block number (after pectra launch)

  const sourceForkUrl = mainnet.rpcUrls.default.http[0]; // eth.merkle.io

  console.log('Starting proxy ', {
    port: mainnetTest.port,
    forkUrl: mainnet.rpcUrls.default,
    forkBlockNumber: mainnetForkBlockNumber,
  });

  const shutdown = await startProxy({
    port: mainnetTest.port,
    host: '::',
    options: {
      chainId: mainnetTest.id,
      forkUrl: sourceForkUrl,
      forkBlockNumber: mainnetForkBlockNumber,
      noMining: false,
    },
  });

  // Wait for the proxy to start
  await sleep(2000);

  return () => {
    shutdown();
  };
}
