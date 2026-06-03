import "@testing-library/jest-dom";

class IntersectionObserver {
  constructor() {}
  observe() {}
  unobserve() {}
  disconnect() {}
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
globalThis.IntersectionObserver = IntersectionObserver as any;
