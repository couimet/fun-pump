# fun.pump - Step-by-Step

This repository is forked from [dappuniversity/fun-pump](https://github.com/dappuniversity/fun-pump). Full credit for the original work goes to [Gregory McCubbin](https://www.linkedin.com/in/gregory-mccubbin-48735b37/), the creator of [Dapp University](https://www.youtube.com/@DappUniversity) and [Dapp University's Instagram](https://www.instagram.com/dappuniversity/).

I created the `step_by_step_progress` branch to serve as a _follow-along_ branch for tracking my progress through the tutorial available on [this YouTube video](https://youtu.be/z7Vz8ZKylc4).

Each commit in this branch corresponds to a specific point in the tutorial, and the commit messages include timestamps to match the YouTube video; [see the commits for the details](https://github.com/couimet/fun-pump/commits/step_by_step_progress/).

> **Note:** The rest of this `README` is identical to the original, except for the addition of a small note below about using `nvm` before running `npm install`.

## Technology Stack & Tools

- Solidity (Writing Smart Contracts & Tests)
- Javascript (Next.js & Testing)
- [Hardhat](https://hardhat.org/) (Development Framework)
- [Ethers.js](https://docs.ethers.io/v5/) (Blockchain Interaction)
- [Next.js](https://nextjs.org/) (Frontend Framework)

## Requirements For Initial Setup
- Install [NodeJS](https://nodejs.org/en/). We recommend using an LTS (long-term-support) version, and preferably installing NodeJS via [NVM](https://github.com/nvm-sh/nvm#intro).

## Setting Up
### 1. Clone/Download the Repository

### 2. Install Dependencies:

> 💡 pro-tip: in order to run the same version of `Node.js` as used in https://youtu.be/z7Vz8ZKylc4, please run "`nvm use || nvm install`" before running "`npm install`".

`$ npm install`

### 3. Run tests
`$ npx hardhat test`

### 4. Start Hardhat node
`$ npx hardhat node`

### 5. Run deployment script
In a separate terminal execute:

`$ npx hardhat ignition deploy ignition/modules/Factory.js --network localhost`

If you have previously deployed you may want to append `--reset` at the end:

`$ npx hardhat ignition deploy ignition/modules/Factory.js --network localhost --reset`

### 6. Start frontend
`$ npm run dev`