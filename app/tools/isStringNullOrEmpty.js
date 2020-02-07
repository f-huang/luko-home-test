export function isStringNullOrEmpty(str) {
  return str === null || str.toString().trim() === "";
}