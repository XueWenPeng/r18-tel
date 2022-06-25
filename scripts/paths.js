const fs = require('fs');
const path = require('path');

const appDirectory = fs.realpathSync(process.cwd());

const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

const moduleFileExtensions = ['ts', 'tsx', 'js', 'jsx'];

const resolveModule = (resolveFn, filePath) => {
  const extension = moduleFileExtensions.find((ex) => fs.existsSync(resolveFn(`${filePath}.${ex}`)));
  if (extension) return resolveFn(`${filePath}.${extension}`);
  return resolveFn(`${filePath}.ts`);
};

module.exports = {
  appIndex: resolveModule(resolveApp, 'src/index'),
  appHtml: resolveApp('public/index.html'),
  appFav: resolveApp('public/favicon.ico'),
  appPackageJson: resolveApp('package.json'),
  appTsConfig: resolveApp('tsconfig.json'),
  appNodeModules: resolveApp('node_modules'),
  appBuild: resolveApp('build'),
  appPublic: resolveApp('public'),
  appSrc: resolveApp('src'),
  appSrcApi: resolveApp('src/api'),
  appSrcAssets: resolveApp('src/assets'),
  appSrcComponents: resolveApp('src/components'),
  appSrcPages: resolveApp('src/pages'),
  appSrcRoutes: resolveApp('src/routes'),
  appSrcUtils: resolveApp('src/utils'),
};
