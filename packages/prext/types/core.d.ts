import { SardRequest, SardResponse } from 'sard.js';
import { Config, PrextRequest, PrextResponse } from '.';

/*

Javascript API

*/

export type FileType = 'html' | 'module';

export type FileData = {
  file: string;
  m: any;
  type: FileType;
  modulePath: string;
};

export function getPages(config: Config): Promise<FileData[]>;

export function filenameToRoute(map: FileData[]): FileData[];

export function Handler(
  req: SardRequest,
  res: SardResponse,
  config: Config
): Promise<void>;

export function handles(
  req: SardRequest,
  res: SardResponse,
  routes: FileData[],
  config: Config
): void;

/**
 * load typescript file
 * @param target
 */
export function typescriptLoader(target: string): Promise<{ filename: string; m: any }>;

export interface Page {
  before?(req: PrextRequest, res: PrextResponse): void | Promise<void>;
  after?(req: PrextRequest, res: PrextResponse): void | Promise<void>;
  path?: string;
}
