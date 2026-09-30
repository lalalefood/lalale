import { ImageResponse } from "next/og";

type Context = { params: Promise<{ size: string }> };

export async function GET(request: Request, context: Context) {
  const { size: requestedSize } = await context.params;
  const size =
    requestedSize === "192" ? 192 : requestedSize === "512" ? 512 : null;

  if (!size) return new Response("Unsupported icon size", { status: 404 });

  const logoUrl = new URL(
    "/assets/images/logos/pwa_logo.png",
    request.url,
  ).toString();
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex" }}>
      {/* ImageResponse renders the existing brand asset into the exact PWA dimensions. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={logoUrl} width={size} height={size} alt="" />
    </div>,
    {
      width: size,
      height: size,
      headers: { "Cache-Control": "public, max-age=31536000, immutable" },
    },
  );
}
