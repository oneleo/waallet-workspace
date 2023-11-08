import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import * as React from "react";
import * as Ethers from "ethers";

const log = (name: string, value: any) => {
  let jsonString: string;
  try {
    jsonString = JSON.stringify(value, null, 2);
  } catch (e) {
    console.log(`${name}: ${value.toString()}`);
    return;
  }
  console.log(`${name}: ${jsonString}`);
};

function App() {
  const [count, setCount] = React.useState(0);
  const [waalletExists, setWaalletExists] = React.useState(false);

  let option: Ethers.JsonRpcApiProviderOptions = {
    batchMaxCount: 1,
  };

  const provider = new Ethers.BrowserProvider(
    (window as any).waallet,
    undefined
  );

  React.useEffect(() => {
    const init = async () => {
      //   const provider = new Ethers.WebSocketProvider((window as any).waallet);

      provider.on("debug", (...args: any[]) => {
        log("Args of provider", args);
      });

      const signer = await provider.getSigner();
      log("Signer of provider", signer);
    };

    if ((window as any).waallet) {
      setWaalletExists(true);
      init();
    }
  }, []);

  const buttonConnectWaalet = React.useCallback(async () => {
    await (window as any).waallet.connect();
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div className="connect">
        <button onClick={buttonConnectWaalet} disabled={!waalletExists}>
          Connect Waallet
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
