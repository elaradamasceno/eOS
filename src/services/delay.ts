export async function fetchDelay() {
  return await new Promise((resolve) => setTimeout(resolve, 2000));
}
