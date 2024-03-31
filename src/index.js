import { Controller } from "@hotwired/stimulus"

let currentEnv = {};
let instanceEnv = {};

const controller = function(controllerFunction) {
  currentEnv = {};
  instanceEnv = {
    _: controllerFunction()
  }

  const controller = class extends Controller {}
  Object.assign(controller, currentEnv)
  Object.assign(
    controller.prototype,
    instanceEnv
  )

  return controller
}

const targets = function(func) {
  currentEnv.targets = func()
}

const values = function(func) {
  currentEnv.values = func()
}

const classes = function(func) {
  currentEnv.classes = func()
}

const connect = function(func) {
  instanceEnv.connect = func
}

export { controller, targets, values, classes, connect }
