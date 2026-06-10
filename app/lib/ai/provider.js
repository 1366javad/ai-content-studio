const MOCK_MODE = true;

export async function generateWithGemini({ system, prompt }) {
  if (MOCK_MODE) {
    return `
# Social Media Campaign - Summer Sale

## Target Audience

Busy professionals interested in seasonal discounts.

## Instagram Post

Beat the heat with our Summer Sale.

## LinkedIn Post

Our biggest seasonal promotion is now live.

## Call To Action

Shop today and save up to 50%.
`;
  }

  const model = process.env.GEMINI_MODEL || "google/gemini-3.5-flash";
  // const model = "google/gemini-2.5-flash";

  const payload = {
    model,
    max_tokens: 1200,
    temperature: 0.7,
    messages: [
      {
        role: "system",
        content: system,
      },
      {
        role: "user",
        content: prompt,
      },
    ],
  };

  const response = await fetch(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      method: "POST",

      headers: {
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
      },

      body: JSON.stringify(payload),
    },
  );

  const data = await response.json();

  if (data.error) {
    throw new Error(JSON.stringify(data.error));
  }

  return data?.choices?.[0]?.message?.content || "";
}
