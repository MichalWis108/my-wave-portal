const main = async () => {
  const [owner, randomPerson, randomPersonTwo] = await hre.ethers.getSigners();
  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
  const waveContract = await waveContractFactory.deploy();
  await waveContract.deployed();

  console.log("Contract deployed to:", waveContract.address);
  console.log("Contract deployed by:", owner.address);

  await waveContract.getTotalWaves();

  const firstWaveTxn = await waveContract.wave();
  await firstWaveTxn.wait();

  await waveContract.getTotalWaves();

  const secondWaveTxn = await waveContract.connect(randomPerson).wave();
  await secondWaveTxn.wait();
  
  await waveContract.getTotalWaves();

  const thirdWaveTxn = await waveContract.connect(randomPerson).wave();
  await thirdWaveTxn.wait();

  await waveContract.getTotalWaves();

  const fourthWaveTxn = await waveContract.connect(randomPersonTwo).wave();
  await fourthWaveTxn.wait();

  await waveContract.getTotalWaves();

  const addressOneWaves = await waveContract.myTotalWaves();
  const addressTwoWaves = await waveContract.connect(randomPerson).myTotalWaves();


};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();