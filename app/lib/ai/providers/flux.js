const apiKey = process.env.GEMINI_API_KEY;
export async function runFlux({ prompt, model = "gemini-3.1-flash-image" }) {
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: prompt,
              },
            ],
          },
        ],
      }),
    },
  );

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error);
  }

  const data = await response.json();

  const imageData =
    data?.candidates?.[0]?.content?.parts?.find((p) => p.inlineData)?.inlineData
      ?.data || null;

  return {
    success: true,
    provider: "gemini-image",
    imageData,
  };
}
