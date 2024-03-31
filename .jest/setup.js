import { format } from "util"
import "mutationobserver-shim"

const isErrorInStimulusController = (args) => {
  return args[3] && args[3].controller;
}

// Throw error on console.error calls as Jest won't fail the test otherwise
// See https://github.com/facebook/jest/issues/6121#issuecomment-529591574
const error = global.console.error
global.console.error = function() {
  let outputs = Array.from(arguments)
  if(isErrorInStimulusController(arguments)) {
    outputs = outputs.slice(0, -1)
  }
  error(...outputs)
  throw new Error(format(...outputs))
};


