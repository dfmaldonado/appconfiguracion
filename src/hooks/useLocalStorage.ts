import { useEffect, useRef, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  const initial = useRef(initialValue);

  const [value, setValue] = useState<T>(() => {
    try {
      const raw = window.localStorage.getItem(key);
      return raw ? (JSON.parse(raw) as T) : initial.current;
    } catch {
      return initial.current;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      console.warn("No se pudo escribir en LocalStorage");
    }
  }, [key, value]);

  return [value, setValue] as const;
}
    