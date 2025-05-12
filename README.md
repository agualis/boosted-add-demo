## Install dependencies
```
pnpm install
```

## Option 1: Run test against manual anvil fork 

### Run manual anvil fork in your terminal

#### ❌ Current block (after pectra)

```bash
anvil --fork-url 'https://eth.merkle.io' --port 8545
```

```bash
pnpm run test
```

```bash
pnpm run test:cast # To see specific error trace 
```

#### ✅ Explicit block before pectra (22426500 belongs to May 6th)

```bash
anvil --fork-url 'https://eth.merkle.io' --port 8545 --fork-block-number 22426500
```

```bash
pnpm run test
```

## Option 2: Run test against automatic anvil fork (using @viem/anvil)

```bash
pnpm run test:autoFork # will fail due to pectra upgrade
```

```bash
pnpm run test:autoFork:beforePectra # will pass cause it uses a fork block number before pectra upgrade
```




