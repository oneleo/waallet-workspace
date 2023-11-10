import type { PlasmoCSConfig } from "plasmo"

import * as Messaging from "@plasmohq/messaging"

import { WaalletProvider } from "~packages/provider/waallet"

// [Error] client-hub-main-world.88bbd511.js:72 WebSocket connection to 'ws://localhost:51543/' failed
// import * as Browser from "webextension-polyfill"

export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"],
  world: "MAIN",
  run_at: "document_start"
}

console.log(
  "You may find that having is not so pleasing a thing as wanting. This is not logical, but it is often true."
)

const callback = async (messageEvent: MessageEvent<string>) => {
  if (messageEvent.data === "post:window") {
    console.log(
      `[contents][listener][post:window] Message: ${JSON.stringify(
        messageEvent,
        null,
        2
      )}`
    )

    // [Error] Uncaught (in promise) TypeError: Cannot read properties of undefined (reading 'sendMessage') at callback
    // const res = await chrome.runtime.sendMessage(
    //   { name: "window" as keyof Messaging.MessagesMetadata, body: {} },
    //   (response) => {
    //     console.log("Response from background script:", response)
    //   }
    // )

    // [Error] Uncaught (in promise) Error: Extension runtime is not available
    // const res = await Messaging.sendToBackground({
    //   name: "window" as keyof Messaging.MessagesMetadata,
    //   body: { in: `Please open the window.` }
    // })

    const res = await Messaging.sendToBackgroundViaRelay({
      name: "window" as keyof Messaging.MessagesMetadata,
      body: { in: `Please open the window.` }
    })
    console.log(
      `[contents][sendToBackgroundViaRelay] Response: ${JSON.stringify(
        res,
        null,
        2
      )}`
    )
  }
}

window.addEventListener("message", callback)
;(window as any).waallet = new WaalletProvider()
