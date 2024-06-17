export function setParams({
  params,
  value,
}: {
  params: string;
  value: string;
}) {
  const queryParams = new URLSearchParams(window.location.search);
  queryParams.set(params, value);
  const newRelativePathQuery =
    window.location.pathname + "?" + queryParams.toString();

  window.history.pushState(null, "", newRelativePathQuery);
}
