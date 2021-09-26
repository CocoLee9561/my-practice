function Vue(options) {
  console.log(options)
  this._init(options)
}

Vue.prototype._init = function(options) {}


export default Vue