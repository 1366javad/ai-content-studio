// export async function runGeminiImage({
//   prompt,
//   model = "gemini-2.5-flash-image",
//   temperature = 0.8,
// }) {
//   const apiKey = process.env.GEMINI_API_KEY;

//   if (!apiKey) throw new Error("Missing GEMINI_API_KEY");
//   if (!prompt) throw new Error("Prompt is required for image generation");

//   console.log("Using Image Model:", model);
//   const response = await fetch(
//     `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         contents: [
//           {
//             parts: [
//               {
//                 text: prompt,
//               },
//             ],
//           },
//         ],
//         generationConfig: {
//           temperature,
//           responseModalities: ["TEXT", "IMAGE"],
//         },
//       }),
//     },
//   );

//   if (!response.ok) {
//     const error = await response.text();
//     throw new Error(error);
//   }

//   const data = await response.json();

//   const imageData =
//     data?.candidates?.[0]?.content?.parts?.find((p) => p.inlineData)?.inlineData
//       ?.data || null;

//   return {
//     success: true,
//     provider: "gemini-image",
//     imageData,
//   };
// }

export async function runGeminiImage({
  prompt,
  model = "gemini-2.5-flash-image",
  temperature = 0.85,
}) {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) throw new Error("Missing GEMINI_API_KEY");

  if (!prompt || typeof prompt !== "string" || prompt.trim().length < 5) {
    throw new Error(
      "The image prompt is required and must be at least 5 characters long.",
    );
  }

  console.log("Generating image with model:", model);
  console.log("Prompt length:", prompt.length);

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [
          {
            role: "user",
            parts: [{ text: prompt }],
          },
        ],
        generationConfig: {
          temperature,
          responseModalities: ["TEXT", "IMAGE"],
        },
      }),
    },
  );

  if (!response.ok) {
    let errorMsg = await response.text();
    try {
      const err = JSON.parse(errorMsg);
      errorMsg = err?.error?.message || errorMsg;
    } catch {}

    if (response.status === 429) {
      throw new Error(
        `❌Gemini quota is full. Please wait a moment.\n${errorMsg}`,
      );
    }
    throw new Error(`Gemini Image Error: ${errorMsg}`);
  }

  const data = await response.json();

  const imagePart = data?.candidates?.[0]?.content?.parts?.find(
    (part) => part.inlineData,
  );

  if (!imagePart?.inlineData?.data) {
    throw new Error(
      "Image not generated. Please write the prompt more precisely or differently.",
    );
  }

  return {
    success: true,
    provider: "gemini-image",
    model,
    imageData: imagePart.inlineData.data,
    mimeType: imagePart.inlineData.mimeType || "image/png",
    text:
      data?.candidates?.[0]?.content?.parts?.find((p) => p.text)?.text || "",
    raw: data,
  };
}
