import { erc20Abi } from 'viem';
import { defaultTestUserAccount } from '../test/anvil/test-accounts';
import { TestPublicClient } from '../test/anvil/test-client';
import { ghoAddress } from './tokens';
import { PERMIT2_ADDRESS } from './permit2';
import { mainnet } from 'viem/chains';

const MAX_UINT256 =
  115792089237316195423570985008687907853269984665640564039457584007913129639935n;

export async function approvePermit2ForUnlimitedGho(client: TestPublicClient) {
  const approvalTxHash = await client.writeContract({
    account: defaultTestUserAccount,
    abi: erc20Abi,
    address: ghoAddress,
    functionName: 'approve',
    args: [PERMIT2_ADDRESS, MAX_UINT256],
    chain: mainnet,
  });

  const receipt = await client.waitForTransactionReceipt({
    hash: approvalTxHash,
  });

  return receipt;
}
