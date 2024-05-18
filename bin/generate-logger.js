#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const expectedArgs = 2; // Replace with your expected number of arguments
// const boilerplatePath = path.join(process.cwd(), 'logger.boiler.js'); // Path to boilerplate file
const boilerplatePath = require.resolve('../logger.boiler.js'); // Path to boilerplate file
const targetPath = path.join(process.cwd(), 'utils', 'logger.hercli.js'); // Target path for logger.js
const REQUIRED_LATEST_PACKAGES = [
  {
    name: 'morgan',
    version: 'latest',
  },
  {
    name: 'winston',
    version: 'latest',
  },
  {
    name: 'winston-daily-rotate-file',
    version: 'latest',
  },
];

if (process.argv.length > expectedArgs) {
  console.warn(`Warning: Received unexpected arguments.`);
}

function createDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
  }
}

function copyBoilerplate(boilerplatePath, targetPath) {
  try {
    fs.copyFileSync(boilerplatePath, targetPath);
    console.log(`Copied boilerplate to ${targetPath}`);
  } catch (error) {
    console.error('Error copying boilerplate: ', error);
    process.exit(1);
  }
}

async function promptUserForInstall() {
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    readline.question(
      `This requires installing some packages: ${REQUIRED_LATEST_PACKAGES.map(
        (dep) => `${dep.name}@${dep.version}`
      ).join(', ')}
       Do you want to install them right now or install manually later? (y/n): `,
      (answer) => {
        readline.close();
        resolve(answer.toLowerCase() === 'y'); // Convert to lowercase and check if 'y'
      }
    );
  });
}

function informNpmInit() {
  const packageJson = path.join(process.cwd(), 'package.json');
  if (!fs.existsSync(packageJson)) {
    console.log('Creating package.json...');
    execSync('npm init -y', { stdio: 'inherit' });
  } else {
    console.log('Skipping npm init.');
  }
}

function exeInstall() {
  informNpmInit();
  const installCommand = `npm install ${REQUIRED_LATEST_PACKAGES.map(
    (dep) => `${dep.name}@${dep.version}`
  ).join(' ')}`;
  console.log(`Running command: ${installCommand}`);
  const installProcess = execSync(installCommand, {
    stdio: 'inherit',
  });
  if (!installProcess) {
    console.error('Failed to create child process for npm install.');
  }
}

async function main() {
  try {
    createDir(path.dirname(targetPath));
    copyBoilerplate(boilerplatePath, targetPath);
    console.log('Executing dependencies...');

    // whether user wants to install dependencies or not
    const installDependencies = await promptUserForInstall();

    if (installDependencies) {
      console.log('Installing dependencies...');
      exeInstall();
      console.log('Installation completed.');
    } else {
      console.log(
        'Skipping dependency installation. You can install them manually later.'
      );
    }
    console.log('All done. You can now run your application.');
  } catch (error) {
    console.error('Failed to execute dependencies: ', error);
    process.exit(1);
  }
}
main();
