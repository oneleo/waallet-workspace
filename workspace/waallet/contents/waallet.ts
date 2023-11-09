import type { PlasmoCSConfig } from "plasmo"

import * as Messaging from "@plasmohq/messaging"
import * as Relay from "@plasmohq/messaging/relay"

import { WaalletProvider } from "~packages/provider/waallet"

export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"],
  world: "MAIN",
  run_at: "document_start"
}

console.log(
  "You may find that having is not so pleasing a thing as wanting. This is not logical, but it is often true."
)

const callback = async (e: MessageEvent<string>) => {
  if (e.data === "post: connect") {
    console.log(`contents listen: sendToBackground`)
    const resp = await Messaging.sendToBackground({
      name: "window" as keyof Messaging.MessagesMetadata,
      body: {}
    })
  }
}

window.addEventListener("message", callback)
;(window as any).waallet = new WaalletProvider()
