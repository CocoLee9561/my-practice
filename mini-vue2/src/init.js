import { initState } from "./state"

export function initMixin(Vue) {
  Vue.prototype._init = function(options) {
    this.$options = options

    initState(this)
  }
}