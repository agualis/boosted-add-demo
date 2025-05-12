import { Hex } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';

const defaultAnvilTestPrivateKey =
  '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80';

// anvil account address: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
export const defaultTestUserAccount = privateKeyToAccount(
  defaultAnvilTestPrivateKey as Hex
).address;
