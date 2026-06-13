export function createStream() {
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    start(controller) {
      stream.controller = controller;
    },
  });

  function send(event) {
    stream.controller.enqueue(
      encoder.encode(`data: ${JSON.stringify(event)}\n\n`),
    );
  }

  function close() {
    stream.controller.close();
  }

  return {
    stream,
    send,
    close,
  };
}
