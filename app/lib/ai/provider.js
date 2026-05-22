export async function generateContent(prompt) {
  const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gryphe/mythomax-l2-13b", // یکی از مدل‌های رایگان
      messages: [{ role: "user", content: prompt }],
    }),
  });

  const data = await res.json();
  return data.choices?.[0]?.message?.content || "";
}
