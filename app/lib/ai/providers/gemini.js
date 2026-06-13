export async function runGemini({
  systemPrompt,
  userPrompt,
  temperature = 0.7,
}) {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error("Missing GEMINI_API_KEY");
  }

  const model = process.env.GEMINI_MODEL || "gemini-2.5-flash";

  console.log("MODEL:", model);

  console.log(
    `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,
  );

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
            role: "user",
            parts: [
              {
                text: `
SYSTEM:
${systemPrompt}

USER:
${userPrompt}
                `,
              },
            ],
          },
        ],
        generationConfig: {
          temperature,
        },
      }),
    },
  );

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error);
  }

  const data = await response.json();

  return {
    provider: "gemini",
    text: data?.candidates?.[0]?.content?.parts?.[0]?.text || "",
    raw: data,
  };
}
