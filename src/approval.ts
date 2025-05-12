import { erc20Abi } from 'viem';
import { defaultTestUserAccount } from '../test/anvil/test-accounts';
import { mainnetTestPublicClient } from '../test/anvil/test-client';
import { ghoAddress } from './tokens';
import { PERMIT2_ADDRESS } from './permit2';

const MAX_UINT256 =
  115792089237316195423570985008687907853269984665640564039457584007913129639935n;

export async function approvePermit2ForUnlimitedGho() {
  const approvalTxHash = await mainnetTestPublicClient.writeContract({
    account: defaultTestUserAccount,
    abi: erc20Abi,
    address: ghoAddress,
    functionName: 'approve',
    args: [PERMIT2_ADDRESS, MAX_UINT256],
  });

  const receipt = await mainnetTestPublicClient.waitForTransactionReceipt({
    hash: approvalTxHash,
  });

  return receipt;
}
