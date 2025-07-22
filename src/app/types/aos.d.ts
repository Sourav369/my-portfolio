declare module "aos" {
  const AOS: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    init: (options?: any) => void;
  };
  export default AOS;
}
