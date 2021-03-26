export interface BootloaderArgs {
  event: string;
  path: string;
  entryPoint: string;
  name: string;
  config?: string;
  base64?: boolean;
}
