export const useLocalStorage = () => {
  const readLS = (key: string) => {
    try {
      return JSON.parse(localStorage.getItem(key) || "[]");
    } catch (error) {
      return localStorage.getItem(key);
    }
  };

  const writeLS = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  return { readLS, writeLS };
};
