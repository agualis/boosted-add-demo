import {
  Address,
  encodeAbiParameters,
  keccak256,
  pad,
  parseAbiParameters,
  toHex,
} from 'viem';
import { TestPublicClient } from '../test/anvil/test-client';
import { ghoAddress } from './tokens';

export async function setGhoBalance(
  client: TestPublicClient,
  account: Address,
  newBalance: bigint
) {
  const encodedData = encodeAbiParameters(parseAbiParameters('address, uint'), [
    account,
    3n, // GHO uses slot 3
  ]);
  await client.setStorageAt({
    address: ghoAddress,
    index: keccak256(encodedData),
    value: pad(toHex(newBalance)),
  });
}
