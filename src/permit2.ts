import { Address, Hex } from 'viem';

export const PERMIT2_ADDRESS =
  '0x000000000022D473030F116dDEE9F6B43aC78BA3' as const;

export interface PermitDetails {
  token: Address;
  amount: bigint;
  expiration: number;
  nonce: number;
}

export interface Permit2Batch {
  details: PermitDetails[];
  spender: Address;
  sigDeadline: bigint;
}

export type Permit2 = {
  batch: Permit2Batch;
  signature: Hex;
};

export const types = {
  PermitDetails: [
    {
      name: 'token',
      type: 'address',
    },
    {
      name: 'amount',
      type: 'uint160',
    },
    {
      name: 'expiration',
      type: 'uint48',
    },
    {
      name: 'nonce',
      type: 'uint48',
    },
  ],
  PermitBatch: [
    {
      name: 'details',
      type: 'PermitDetails[]',
    },
    {
      name: 'spender',
      type: 'address',
    },
    {
      name: 'sigDeadline',
      type: 'uint256',
    },
  ],
};
