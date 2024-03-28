// Usage:
// utf8_to_b64("✓ à la mode"); // "4pyTIMOgIGxhIG1vZGU="
// b64_to_utf8("4pyTIMOgIGxhIG1vZGU="); // "✓ à la mode"

export function utf8_to_b64(str: string) {
  return window.btoa(unescape(encodeURIComponent(str)))
}
export function b64_to_utf8(str: string) {
  try {
    return decodeURIComponent(escape(window.atob(str)))
  } catch (e) {
    return str
  }
}

export function groupByKey(array: any[], key: string) {
  return array.reduce((hash, obj) => {
    if (obj[key] === undefined) return hash
    return Object.assign(hash, {
      [obj[key]]: (hash[obj[key]] || []).concat(obj)
    })
  }, {})
}

