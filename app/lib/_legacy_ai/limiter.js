const requestMap = new Map();

const WINDOW_SIZE = 60 * 1000;

const MAX_REQUESTS = 20;

export function checkRateLimit(identifier = "global") {
  const now = Date.now();

  if (!requestMap.has(identifier)) {
    requestMap.set(identifier, []);
  }

  const timestamps = requestMap.get(identifier);

  const filtered = timestamps.filter((time) => now - time < WINDOW_SIZE);

  if (filtered.length >= MAX_REQUESTS) {
    return {
      success: false,
      retryAfter: WINDOW_SIZE - (now - filtered[0]),
    };
  }

  filtered.push(now);

  requestMap.set(identifier, filtered);

  return {
    success: true,
  };
}
