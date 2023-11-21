import { useSearchParams } from "next/navigation";

export function useSearchParamsData<T>(): T | null {
  const params = useSearchParams();
  try {
    const data = params.get("data");
    if (data) return JSON.parse(data);
    return null;
  } catch (error) {
    console.error("Parse params failed!");
    return null;
  }
}
