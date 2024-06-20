const MAX_HISTORY = 5;

export const updateSearchHistory = (query: string) => {
  let history =
    JSON.parse(localStorage.getItem("searchHistory") as string) || [];
  if (history.includes(query)) {
    history = history.filter((item: string) => item !== query);
  }
  history.unshift(query);
  if (history.length > MAX_HISTORY) {
    history.pop();
  }
  localStorage.setItem("searchHistory", JSON.stringify(history));
};

export const deleteSearchHistoryItem = (query: string) => {
  let history =
    JSON.parse(localStorage.getItem("searchHistory") as string) || [];
  history = history.filter((item: string) => item !== query);
  localStorage.setItem("searchHistory", JSON.stringify(history));
};

export const getSearchHistory = () => {
  return JSON.parse(localStorage.getItem("searchHistory") as string) || [];
};
