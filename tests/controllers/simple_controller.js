import { controller, targets, values, classes, connect } from "index"

export default controller(function() {
  targets(() => ["connected", "result"]);
  values(() => {
    return { result: String }
  })
  classes(() => ["loading"])

  return function() {
    this.resultTarget.classList.add(...this.loadingClasses)
    this.resultTarget.textContent = this.resultValue
  }
})
