import React, { useState, useEffect } from "react";

export const useClient = (): {
  isClient: boolean;
} => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    if (typeof window != "undefined") setIsClient(true);
  }, []);

  return {
    isClient,
  };
};
