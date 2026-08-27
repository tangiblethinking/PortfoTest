export function toEmbedUrl(url: string): string {
  if (!url || typeof url !== "string") return url;
  if (url.includes("embed.figma.com") || url.includes("figma.com/embed")) {
    return url;
  }
  if (!url.includes("figma.com")) return url;
  try {
    const parsed = new URL(url);
    const match = parsed.pathname.match(
      /^\/(design|board|proto|file|slides|deck)\/([a-zA-Z0-9]+)/,
    );
    if (match) {
      const type = match[1] === "file" ? "design" : match[1];
      const fileKey = match[2];
      const params = new URLSearchParams();
      params.set("embed-host", "share");
      const nodeId = parsed.searchParams.get("node-id");
      const start = parsed.searchParams.get("starting-point-node-id");
      const pageId = parsed.searchParams.get("page-id");
      if (nodeId) params.set("node-id", nodeId);
      if (start) params.set("starting-point-node-id", start);
      if (pageId) params.set("page-id", pageId);
      return `https://embed.figma.com/${type}/${fileKey}?${params.toString()}`;
    }
    return `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(url)}`;
  } catch {
    return url;
  }
}

export function isImageUrl(url: string): boolean {
  return /\.(png|jpe?g|webp|gif|svg)(\?|$)/i.test(url);
}
