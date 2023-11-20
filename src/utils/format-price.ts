export function formatPrice(price: number): string {
  return `${price}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " vnđ";
}
