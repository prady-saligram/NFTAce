import React from "react";

const AccountDetails = ({ accountAddress, accountBalance }) => {
  return (
    <div>
      <div className="jumbotron">
        <h1 className="display-4">NFTAce Marketplace</h1>
        <p className="lead">
          This is the NFTAce marketplace where you can mint ERC721 implemented{" "}
          <i>NFT tokens</i> directly sourced from local artists and manage them.
        </p>
        <hr className="my-4" />
        <p className="lead">Account address :</p>
        <h4>{accountAddress}</h4>
        <p className="lead">Account balance :</p>
        <h4>{accountBalance} Ξ</h4>
        
      </div>
    </div>
  );
};

export default AccountDetails;
