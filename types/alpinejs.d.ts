declare module 'alpinejs' {

  const Alpine: {
    data: <T>(name: string, fn: () => T) => void;
    store<T>(name: string, obj: T);
    store<T>(name: string): T;
    start();
  };

  export default Alpine;
}
