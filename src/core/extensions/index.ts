Array.prototype.isEqual = function (arr: any[]) {
  if (this.length !== arr.length) return false
  for (let i = 0; i < this.length; i++) {
    if (this[i] !== arr[i]) return false
  }
  return true
}

Array.prototype.isEmpty = function () {
  return this.length === 0
}
