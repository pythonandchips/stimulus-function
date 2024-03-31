import { Application } from "@hotwired/stimulus"

import simpleController from "./controllers/simple_controller"

describe("when submiting a form", () => {
  let application, button, result, connected

  beforeEach(() => {
    document.body.innerHTML = `
      <div
        data-controller="simple"
        data-simple-result-value="clicked"
        data-simple-loading-class="spin hidden"
      >
        <button id="button" data-action="click->simple#_">Click</button>
        <div id="connected" data-simple-target="connected"></div>
        <div id="result" data-simple-target="result"></div>
      </div>
    `

    application = Application.start()
    application.register("simple", simpleController)

    button = document.getElementById("button")
    result = document.getElementById("result")
    connected = document.getElementById("connected")
  })

  afterEach(() => {
    application.stop()
  })

  it("generates a controller for stimulus", async () => {
    button.dispatchEvent(new CustomEvent("click"))

    expect(result.textContent).toEqual("clicked")
    expect(result.getAttribute("class")).toEqual("spin hidden")
  })
})
