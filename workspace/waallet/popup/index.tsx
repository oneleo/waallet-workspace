import { useState } from "react"
import * as React from "react"

import * as Messaging from "@plasmohq/messaging"

import "~style.css"

function IndexPopup() {
  const [data, setData] = useState("")

  const buttonConnectWaalet = React.useCallback(async () => {
    const res = await Messaging.sendToBackground({
      name: "window" as keyof Messaging.MessagesMetadata,
      body: { in: `Please open the window.` }
    })
    console.log(
      `[popup][sendToBackground] Response: ${JSON.stringify(res, null, 2)}`
    )
  }, [])

  return (
    <div className="flex flex-col p-16">
      <h2>
        Welcome to your
        <a href="https://www.plasmo.com" target="_blank">
          {" "}
          Plasmo
        </a>{" "}
        Extension!
      </h2>
      <input onChange={(e) => setData(e.target.value)} value={data} />
      <a href="https://docs.plasmo.com" target="_blank">
        View Docs {process.env.PLASMO_PUBLIC_SITE_URL}
      </a>
      <div className="connect">
        <button onClick={buttonConnectWaalet}>Connect Waallet</button>
      </div>
    </div>
  )
}

export default IndexPopup
