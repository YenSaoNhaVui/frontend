import React, { useState, useEffect } from "react";

export const useClient = (
  callbackFn?: Function
): {
  isClient: boolean;
} => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    if (typeof window != "undefined") {
      setIsClient(true);
      callbackFn?.();
    }
  }, []);

  return {
    isClient,
  };
};
