export async function runVideo({ script, title }) {
  return {
    provider: "video",
    success: true,

    videoUrl: null,

    script,
    title,

    metadata: {
      status: "pending_provider",
    },
  };
}
