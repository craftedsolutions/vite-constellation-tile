declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    container: any;
  }
}

export const getContainer = async () => {
  // Safely access the global container object

  if (process.env.NODE_ENV === 'development' && !window.container) {
    await import('./mock/mock_container.js');
  }

  return window.container ?? null;
};
