export function getAsinFromUrl(url: string): string | null {
  try {
    // Extract ASIN from Amazon URL
    const asinMatch = url.match(/\/([A-Z0-9]{10})(?:[/?]|$)/);
    return asinMatch ? asinMatch[1] : null;
  } catch {
    return null;
  }
}