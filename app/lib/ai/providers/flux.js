const HF_TOKEN = process.env.HUGGINGFACE_API_KEY;

if (!HF_TOKEN) {
  throw new Error("HUGGINGFACE_API_KEY is missing in .env.local");
}

export async function runFlux({
  prompt,
  model = "black-forest-labs/FLUX.1-schnell", // سریع و باکیفیت خوب
}) {
  console.log("HF_TOKEN exists:", !!process.env.HUGGINGFACE_API_KEY);
  if (!prompt || prompt.trim().length < 15) {
    throw new Error(
      "The prompt should be at least 15 characters long and be well-descriptive.",
    );
  }

  console.log("Generating with Flux model:", model);

  const response = await fetch(
    `https://api-inference.huggingface.co/models/${model}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${HF_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inputs: prompt,
        parameters: {
          num_inference_steps: 28, // تعادل خوب سرعت و کیفیت
          guidance_scale: 3.5,
          height: 1024,
          width: 1024,
          // max_sequence_length: 512,
        },
      }),
    },
  );

  if (!response.ok) {
    const errorText = await response.text();
    console.error("HF Error:", errorText);

    if (response.status === 429) {
      throw new Error(
        "Hugging Face stock is out. Please wait a moment and try again.",
      );
    }
    if (response.status === 503) {
      throw new Error("The Flux model is loading. Please wait a few seconds.");
    }
    throw new Error(
      `Error generating image: ${response.status} - ${errorText}`,
    );
  }

  const blob = await response.blob();
  const arrayBuffer = await blob.arrayBuffer();
  const base64 = Buffer.from(arrayBuffer).toString("base64");

  return {
    success: true,
    provider: "flux",
    imageData: base64,
    mimeType: "image/jpeg",
  };
}
