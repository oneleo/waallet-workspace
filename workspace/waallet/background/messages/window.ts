import windowUrl from "url:~background/messages/window.html"
import * as Browser from "webextension-polyfill"

import * as Messaging from "@plasmohq/messaging"

export type RequestBody = {
  in: string
}

export type ResponseBody = {
  out: string
}

const handler: Messaging.PlasmoMessaging.MessageHandler<
  RequestBody,
  ResponseBody
> = async (req, res) => {
  console.log(`[background][messaging][window] Request: ${JSON.stringify(req)}`)

  await Browser.windows.create({
    url: windowUrl,
    focused: true,
    type: "popup",
    width: 385,
    height: 720
  })

  res.send({
    out: `Opened: ${windowUrl}`
  })
}

export default handler
