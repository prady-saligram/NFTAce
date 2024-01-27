import React from "react";

const ContractNotDeployed = () => {
  return (
    <div className="jumbotron">
      <h3>NFT Contract Not Deployed To This Network.</h3>
      <hr className="my-4" />
      <p className="lead">
        Connect Metamask to Localhost 8545 running a custom RPC.
      </p>
    </div>
  );
};

export default ContractNotDeployed;
