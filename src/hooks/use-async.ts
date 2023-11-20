import { useEffect, useReducer } from "react";

type State<T> = {
  loading: boolean;
  error: any;
  data: T | null;
};

type Action<T> =
  | { type: "start" }
  | { type: "finish"; value: T }
  | { type: "error"; error: any };

const initialState: State<any> = { loading: false, error: null, data: null };

const stateReducer = <T>(_: State<T>, action: Action<T>): State<T> => {
  switch (action.type) {
    case "start":
      return { loading: true, error: null, data: null };
    case "finish":
      return { loading: false, error: null, data: action.value };
    case "error":
      return { loading: false, error: action.error, data: null };
  }
};

const useAsync = <T>(fn: () => Promise<T>) => {
  const [state, dispatch] = useReducer(stateReducer<T>, initialState);

  useEffect(() => {
    const asyncFunc = async () => {
      try {
        dispatch({ type: "start" });
        const value = await fn();
        dispatch({ type: "finish", value });
      } catch (error: any) {
        dispatch({ type: "error", error });
      }
    };
    asyncFunc();
  }, []);

  const refetch = async () => {
    dispatch({ type: "start" });
    const value = await fn();
    dispatch({ type: "finish", value });
  };

  return { ...state, refetch };
};

export default useAsync;
