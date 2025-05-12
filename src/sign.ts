import { defaultTestUserAccount } from '../test/anvil/test-accounts';
import { mainnetTestPublicClient } from '../test/anvil/test-client';
import { Permit2, PERMIT2_ADDRESS, Permit2Batch, types } from './permit2';

export async function signPermit2Add(): Promise<Permit2> {
  const domain = {
    name: 'Permit2',
    chainId: 1,
    verifyingContract: PERMIT2_ADDRESS,
  };

  const details = [
    {
      token: '0x40d16fc0246ad3160ccc09b8d0d3a2cd28ae6c2f' as const,
      amount: 730750818665451459101842416358141509827966271487n,
      expiration: 1747135327,
      nonce: 0,
    },
  ];

  const batch: Permit2Batch = {
    details,
    spender: '0xb21A277466e7dB6934556a1Ce12eb3F032815c8A', // BALANCER COMPOSITE ROUTER
    sigDeadline:
      115792089237316195423570985008687907853269984665640564039457584007913129639935n, // MAX_UINT256
  };

  const signature = await mainnetTestPublicClient.signTypedData({
    account: defaultTestUserAccount,
    message: {
      details,
      spender: batch.spender,
      sigDeadline: batch.sigDeadline,
    },
    domain,
    primaryType: 'PermitBatch',
    types,
  });

  return {
    batch,
    signature,
  };
}
