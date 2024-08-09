function parseQueryParam(searchParam) {
  const searchParamsArray = Object.entries(searchParam).filter(
    ([_, value]) => value !== null && value !== undefined,
  );

  const serializedArray = searchParamsArray.map(([key, value]) => {
    return `${key}=${value}`;
  });

  return serializedArray.join("&");
}

console.log(
  parseQueryParam({
    search: "name",
    take: 10,
  }),
);

// :)
(function (searchParam) {
  const params = new URLSearchParams(searchParam).toString();
  console.log(params);
})({
  search: "name",
  take: 10,
});
