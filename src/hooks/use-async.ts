import { useReducer } from "react";
import toast from "react-hot-toast";
// import * as Sentry from "@sentry/nextjs";
type State<T> = {
  loading: boolean;
  error: any;
  value: T | null;
};

type Action<T> =
  | { type: "start" }
  | { type: "finish"; value: T }
  | { type: "error"; error: any };

const extractErrorDetails = (errorString: string) => {
  const regex = /Request failed with status code (\d+): (.*)/;
  const match = errorString.match(regex);

  if (match && match.length >= 3) {
    return {
      code: parseInt(match[1], 10),
      message: match[2],
    };
  }

  // Trả về một lỗi mặc định nếu không khớp
  return {
    code: 0,
    message: "Unknown error",
  };
};

const initialState: State<any> = { loading: false, error: null, value: null };

const stateReducer = <T>(_: State<T>, action: Action<T>): State<T> => {
  switch (action.type) {
    case "start":
      return { loading: true, error: null, value: null };
    case "finish":
      return { loading: false, error: null, value: action.value };
    case "error":
      return { loading: false, error: action.error, value: null };
    default:
      return _;
  }
};

const useAsync = <U extends any[], T>(
  fn: (...args: U) => Promise<T>,
  errorMessage?: string,
  onError?: () => void
) => {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  const run = async (...args: U) => {
    try {
      dispatch({ type: "start" });
      // await new Promise((resolve) => setTimeout(resolve, 3000));
      const value = await fn(...args);
      dispatch({ type: "finish", value });
      return value;
    } catch (error: any) {
      if (errorMessage || error?.response?.data?.message)
        toast.error(
          errorMessage || error?.response?.data?.message || "Unknow errors"
        );
      if (onError) onError();
      //   Sentry.captureException(error);
      dispatch({ type: "error", error });
    }
  };

  return { ...state, run };
};

export default useAsync;
