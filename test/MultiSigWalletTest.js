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

      assert.equal(
        (await this.contract.owners()),
        owners,
        "Initial owners are not expected addresses."
      );
    });

    it("Should replace owner", async function() {
      // const owner = accounts[0];
      // const writer = accounts[1];
      //
      // console.log("Owner: " + accounts[0]);
      // console.log("Writer: " + accounts[1]);
      //
      // await this.callee.setWriter(this.caller.address, { from: accounts[0] });
      //
      // console.log(`Address of writer: ${await this.callee.writer()}`);
      //
      // assert.equal(
      //   (await this.callee.writer()),
      //   this.caller.address,
      //   "Writer is not expected address"
      // );
    });

  });


});
