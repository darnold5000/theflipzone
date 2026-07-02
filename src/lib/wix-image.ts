/** Build a high-quality Wix CDN image URL from a media ID. */
export function wixImage(
  mediaId: string,
  width = 1200,
  height = 800,
  mode: "fit" | "fill" = "fit"
): string {
  const id = mediaId.includes("/media/")
    ? mediaId.split("/media/")[1].split("/")[0]
    : mediaId;
  return `https://static.wixstatic.com/media/${id}/v1/${mode}/w_${width},h_${height},q_90/${id}`;
}
