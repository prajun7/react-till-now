export default {
    set: <T = any>(key: string, value: T) => {
      const keys = JSON.parse(sessionStorage.getItem(key) as string);
      sessionStorage.setItem(key, JSON.stringify({
        ...keys,
        ...value,
      }));
    },
    get: <T = any>(key: string) => {
      const item = sessionStorage.getItem(key);
      if (item) {
        return JSON.parse(item) as T;
      }
  
      return null;
    },
    remove: (key: string) => {
      sessionStorage.removeItem(key);
    },
  };
  