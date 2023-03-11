export default function parseStyleVariable(variable: string) {
  return parseInt(variable.replace('px', ''), 10);
}
