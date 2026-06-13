export async function runFlux({ prompt, width = 1024, height = 1024 }) {
  return {
    provider: "flux",
    success: true,

    imageUrl: null,

    prompt,

    metadata: {
      width,
      height,
      status: "pending_provider",
    },
  };
}
