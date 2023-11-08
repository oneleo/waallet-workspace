import type { PlasmoCSConfig } from "plasmo"
import testPageUrl from "url:~windows/test.html"

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
    console.log(`contents listen: connect to ${testPageUrl}`)
    window.open(testPageUrl, "_blank", "width=400, height=500")
  }
}

window.addEventListener("message", callback)
;(window as any).waallet = new WaalletProvider()
