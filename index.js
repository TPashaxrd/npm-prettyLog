import { colors } from "./utils/colors.js";

function timestamp() {
  return `${colors.dim}[${new Date().toLocaleTimeString()}]${colors.reset}`;
}

function colorForType(type) {
  switch (type) {
    case "success":
      return colors.green;
    case "warn":
      return colors.yellow;
    case "error":
      return colors.red;
    default:
      return colors.cyan;
  }
}

export function log(type, message) {
  const color = colorForType(type);

  console.log(
    `${timestamp()} ${color}[${type.toUpperCase()}]${colors.reset} ${message}`
  );
}

export const prettyLog = {
  info: (msg) => log("info", msg),
  success: (msg) => log("success", msg),
  warn: (msg) => log("warn", msg),
  error: (msg) => log("error", msg),
};
