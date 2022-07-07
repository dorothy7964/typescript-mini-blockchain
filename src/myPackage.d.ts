interface Config {
  url: string;
}
declare module "myPackage" {
  /**
   * init 설명
   */
  function init(config: Config): boolean;
  /**
   * exit 설명
   */
  function exit(code: number): number;
}
