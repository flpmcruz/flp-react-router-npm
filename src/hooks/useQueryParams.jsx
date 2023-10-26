export function useQueryParams() {
  const search = window.location.search;
  const params = new URLSearchParams(search);
  return Object.fromEntries(params.entries());
}
