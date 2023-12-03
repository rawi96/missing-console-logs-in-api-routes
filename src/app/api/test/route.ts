export async function GET() {
  console.log(
    "I can see this log ONLY in development mode, not in production mode"
  );
  console.error(
    "I can see this error ONLY in development mode, not in production mode"
  );

  return Response.json({ message: "Hello Next JS" });
}
