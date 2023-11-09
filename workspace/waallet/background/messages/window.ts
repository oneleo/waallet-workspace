import windowUrl from "url:~background/messages/window.html"
import * as Browser from "webextension-polyfill"

import * as Messaging from "@plasmohq/messaging"

export type RequestBody = {}

export type ResponseBody = {}

const handler: Messaging.PlasmoMessaging.MessageHandler<
  RequestBody,
  ResponseBody
> = async (req, res) => {
  console.log(`[messaging][window] Request: ${JSON.stringify(req)}`)

  console.log(`[messaging][window] Import url: ${windowUrl}`)
  await Browser.windows.create({
    url: windowUrl,
    focused: true,
    type: "popup",
    width: 385,
    height: 720
  })

  res.send({})
}

export default handler
