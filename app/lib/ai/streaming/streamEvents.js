export function streamEvent({ send, type, step, message, output }) {
  send({
    type,
    step,
    message,
    output,
    timestamp: new Date().toISOString(),
  });
}
