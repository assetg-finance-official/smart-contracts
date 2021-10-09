const AsgToken = artifacts.require("AsgToken");

module.exports = async function (deployer, network, accounts) {
  await deployer.deploy(AsgToken);
};