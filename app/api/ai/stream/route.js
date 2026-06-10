export async function GET() {
  return Response.json({
    success: true,
    message: "AI streaming endpoint active",
  });
}
