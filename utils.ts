export function imagePreload(urls: string[]) {
  urls.forEach((url) => {
    const img = new Image();
    img.src = `${process.env.NEXT_PUBLIC_CDN_URL}${url}`;
  });
}
