const path = require('path');
const chalk = require('chalk');
const semver = require('semver');
const fs = require('fs-extra');

const { CI_VERSION } = require('../ci-index');

const webpackPaths = require('../configs/webpack.paths');

const APP_PKG_PATH = path.join(webpackPaths.appPackagePath);
const MAIN_PKG_PATH = path.join(webpackPaths.rootPath, 'package.json');

if (!fs.existsSync(MAIN_PKG_PATH) || !fs.existsSync(APP_PKG_PATH)) {
  console.log(
    chalk.redBright(`App package.json or project package.json not exists.`)
  );
  process.exit(2);
}

let mainPkgJson = require(MAIN_PKG_PATH);
let appPkgJson = require(APP_PKG_PATH);

const currentVersion = semver.clean(
  appPkgJson.version || mainPkgJson.version || '0.0.1'
);

const commander = require('commander');
var program = new commander.Command();

program.name('uv');
program.version(CI_VERSION);
program.addOption(
  new commander.Option(
    '-n, --next-version <version>',
    'Update package version & app package Version'
  ).default('auto', 'Auto increase')
);

program.addOption(
  new commander.Option('-app, --only-app ', 'Only Update app package Version')
);
program.parse();
if (!Object.keys(program.opts()).length) {
  program.help();
  process.exit(0);
}

main()
  .then((resp) => {
    console.log(resp);
  })
  .catch((err) => {});

async function main() {
  let { nextVersion, onlyApp } = program.opts();

  let next;
  let currVers = currentVersion.split(/\./);

  if (nextVersion === 'auto') {
    next = [...currVers.slice(0, currVers.length - 1)]
      .concat(currVers.slice(-1).map((v) => (parseInt(v) + 1).toString()))
      .join('.');
  } else if (!semver.clean(nextVersion)) {
    console.log(
      chalk.redBright(
        `❌ :your enter version illegal. arg version [${nextVersion}]`
      ) + chalk.cyanBright(`\n you shuld enter like [x.x.x].`)
    );
    process.exit(2);
  } else if (semver.lt(semver.clean(nextVersion), currentVersion)) {
    console.log(
      chalk.redBright(
        `❌ :your enter version less current version[${currentVersion}]`
      )
    );
    process.exit(2);
  } else {
    next = semver.clean(nextVersion);
  }

  appPkgJson.version = next;
  fs.writeJSONSync(path.resolve(APP_PKG_PATH), appPkgJson, {
    encoding: 'utf8',
    spaces: 2,
  });
  if (!onlyApp) {
    mainPkgJson.version = next;
    fs.writeJSONSync(path.resolve(MAIN_PKG_PATH), mainPkgJson, {
      encoding: 'utf8',
      spaces: 2,
    });
  }

  return chalk.greenBright(
    `✨✨✨✨\n` +
      `version upgrade: [${currentVersion}] => [${next}]\n` +
      `✨✨✨✨\n`
  );
}
