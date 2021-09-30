const launchesMap = new Map();

const launch = {
  launchID: 100,
  mission: 'the martian',
  rocket: 'Falcon 9',
  destination: 'Mars',
  customers: ['54mLab', 'Nasa'],
  upcoming: true,
  success: true,
};

launchesMap.set(launch.launchID, launch);

module.exports = {
  launchesMap,
};
