const MultiSigWalletContract = artifacts.require('MultiSigWallet');

const ethers = require('ethers');
const { BN, expectEvent, shouldFail } = require('openzeppelin-test-helpers');

contract("MultiSigWallet", function (accounts) {

  before(async function() {
    // Log time to keep track when debugging
    console.log(Date())
  });

  // new contract before each test to get a clean state
  before(async function() {
    this.contract = await MultiSigWalletContract.new([accounts[0], accounts[1], accounts[2]], 2,{ from: accounts[0] });
  });

  describe('Owner Properties', function() {

    it("Should have owner addresses be same addresses when created wallet", async function() {
      const owners = [accounts[0], accounts[1], accounts[2]];

      console.log("initial owners:", owners.toString());

      assert.equal(
        (await this.contract.owners(0)),
        accounts[0],
        "Initial owners are not expected addresses."
      );
    });

    it("Should replace owner", async function() {
      const newOwner = accounts[4];
      const oldOwner = accounts[0];
      const newOwnersList = [accounts[4], accounts[1], accounts[2]];

      await this.contract.replaceOwner(oldOwner, newOwner, { from: accounts[0] });

      console.log("new owners:", newOwnersList.toString());

      assert.equal(
        (await this.contract.owners()),
        newOwnersList,
        "New owners list are not expected addresses."
      );
    });

  });


});
