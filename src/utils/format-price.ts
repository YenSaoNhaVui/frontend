export function formatPrice(price: number, isVndBoolean = true): string {
  return `${price}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (isVndBoolean ? " vnđ" : "");
}
