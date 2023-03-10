import { build } from 'esbuild';
import { join, parse, relative } from 'path';
import { nodeExternalsPlugin } from 'esbuild-node-externals';
import randomFilename from '../../lib/random-filename';
import { CACHE_DIRECTORY } from '../constants';
import { Config } from '../config';
import { error } from '../logger';

export function typescriptLoader(
  target: string,
  config: Config = {}
): Promise<{ filename: string; m: any }> {
  const dist = join(CACHE_DIRECTORY, parse(randomFilename(target)).base);

  return new Promise((resolve) => {
    build({
      entryPoints: [target],
      // node_modules/.prext/~
      outfile: dist,

      bundle: true,
      minify: true,

      platform: 'node',
      format: __ESM__ ? 'esm' : 'cjs',
      plugins: [nodeExternalsPlugin() as any],
      banner: { js: `/*${target} => ${dist}*/` },
      ...(config.esbuild || {}),
    })
      .then(() => {
        // console.log(relative(__dirname, dist));
        resolve({ filename: dist, m: require(relative(__dirname, dist)) });
      })
      .catch((e) => {
        error(e);
      });
  });
}
