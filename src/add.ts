import {
  AddLiquidityBoostedBuildCallInput,
  AddLiquidityKind,
  Slippage,
  Token,
  TokenAmount,
} from '@balancer/sdk';
import { ghoAddress } from './tokens';

const tokenOut: Token = {
  chainId: 1,
  address: '0x85b2b559bc2d21104c4defdd6efca8a20343361d',
  decimals: 18,
  wrapped: '0x85b2b559bc2d21104c4defdd6efca8a20343361d',
} as unknown as Token;

const ghoToken: Token = {
  chainId: 1,
  address: ghoAddress,
  decimals: 18,
  wrapped: ghoAddress,
} as unknown as Token;

const ghoTokenAmount: TokenAmount = TokenAmount.fromRawAmount(
  ghoToken,
  '100000000000000000000'
);

const btpOut: TokenAmount = TokenAmount.fromRawAmount(
  tokenOut,
  '98890957386683679866'
);

export const buildCallDataParams: AddLiquidityBoostedBuildCallInput = {
  poolId: '0x85b2b559bc2d21104c4defdd6efca8a20343361d',
  poolType: 'STABLE',
  addLiquidityKind: AddLiquidityKind.Unbalanced,
  wrapUnderlying: [false, true, false],
  bptOut: btpOut,

  amountsIn: [
    {
      token: {
        chainId: 1,
        address: '0x7bc3485026ac48b6cf9baf0a377477fff5703af8',
        decimals: 6,
        wrapped: '0x7bc3485026ac48b6cf9baf0a377477fff5703af8',
      },
      scalar: '1000000000000',
      decimalScale: '1000000',
      amount: '0',
      scale18: '0',
    },
    ghoTokenAmount,
    {
      token: {
        chainId: 1,
        address: '0xd4fa2d31b7968e448877f69a96de69f5de8cd23e',
        decimals: 6,
        wrapped: '0xd4fa2d31b7968e448877f69a96de69f5de8cd23e',
      },
      scalar: '1000000000000',
      decimalScale: '1000000',
      amount: '0',
      scale18: '0',
    },
  ],
  chainId: 1,
  protocolVersion: 3,
  userData: '0x',
  to: '0xb21A277466e7dB6934556a1Ce12eb3F032815c8A',
  slippage: Slippage.fromPercentage('0.5'),
  wethIsEth: false,
} as unknown as AddLiquidityBoostedBuildCallInput;
