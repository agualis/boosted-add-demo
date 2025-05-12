import { buildCallDataParams } from './add';

import { AddLiquidityBoostedV3, Permit2 } from '@balancer/sdk';
import { parseUnits } from 'viem';
import { defaultTestUserAccount } from '../test/anvil/test-accounts';
import { mainnetTestPublicClient } from '../test/anvil/test-client';
import { setGhoBalance } from './balance';
import { signPermit2Add as signPermit2BoostedAdd } from './sign';
import { approvePermit2ForUnlimitedGho } from './approval';

test('add GHO to balancer boosted pool ', async () => {
  const newBalance = parseUnits('1000', 18);

  await mainnetTestPublicClient.impersonateAccount({
    address: defaultTestUserAccount,
  });

  await setGhoBalance(defaultTestUserAccount, newBalance);

  const approvalReceipt = await approvePermit2ForUnlimitedGho();

  expect(approvalReceipt.status).toBe('success');

  const permit2 = await signPermit2BoostedAdd();

  const estimation = await simulateBoostedAddWithPermit2Signature(permit2);

  expect(estimation).toBeGreaterThan(0n);
});

async function simulateBoostedAddWithPermit2Signature(permit2: Permit2) {
  const addLiquidity = new AddLiquidityBoostedV3();
  const callData = addLiquidity.buildCallWithPermit2(
    buildCallDataParams,
    permit2
  );

  return await mainnetTestPublicClient.estimateGas({
    account: defaultTestUserAccount,
    data: callData.callData,
    to: callData.to,
    value: callData.value,
  });
}
