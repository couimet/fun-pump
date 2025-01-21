import { useEffect, useState } from "react"
import { ethers } from "ethers"

function Trade({ toggleTrade, token, provider, factory }) {

  return (
    <div className="trade">
      <h2>trade</h2>

      <div className="token__details">
        <p className="name">{token.name}</p>
        <p>creator: {token.creator.slice(0, 6) + '...' + token.creator.slice(38, 42)}</p>
        <img src={token.image} alt="token image" width={256} height={256} />
        <p>marketcap: {ethers.formatUnits(token.raised, 18)} eth</p>
      </div>

      <button onClick={toggleTrade} className="btn--fancy">[ cancel ]</button>
    </div >
  );
}

export default Trade;