import { lazy, type ComponentType } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const lazyWithRetry = <T extends ComponentType<any>>(
  factory: () => Promise<{ default: T }>,
  timeout = 10000 // 10 seconds timeout
) => {
  return lazy(() => {
    return new Promise<{ default: T }>((resolve, reject) => {
      // Set up a timeout to reject if load hangs too long
      const timer = setTimeout(() => {
        reject(new Error("Component loading timed out"));
      }, timeout);

      factory()
        .then((val) => {
          clearTimeout(timer);
          resolve(val);
        })
        .catch((error) => {
          clearTimeout(timer);
          console.error("Component import failed, retrying once...", error);
          // Retry once
          factory()
            .then(resolve)
            .catch(reject);
        });
    });
  });
};
