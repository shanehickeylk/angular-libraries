export function encode64(str) {
  return encodeURI(btoa(str).replace(/=+/, ''));
}

export function decode64(str) {
  return decodeURI(atob(str));
}

export function encode64JSON(obj) {
  return encode64(JSON.stringify(obj));
}

export function decode64JSON(str) {
  return JSON.parse(decode64(str));
}
