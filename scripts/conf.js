const path = require('path');

const PROJECT_PATH = path.resolve(__dirname, '../');
const PROJECT_NAME = path.parse(PROJECT_PATH).name;

const SERVER_HOST = process.env.SERVER_HOST || '0.0.0.0';
const SERVER_PORT = process.env.SERVER_PORT || 2333;

const openAnalyzer = false;
const ANALAZER_HOST = 'localhost';
const ANALAZER_PORT = 1147;

const imageInlineSizeLimit = 4 * 1024;
const bundleSizeLimit = 1024 * 1024;

module.exports = {
  PROJECT_PATH,
  PROJECT_NAME,
  SERVER_HOST,
  SERVER_PORT,
  openAnalyzer,
  ANALAZER_HOST,
  ANALAZER_PORT,
  imageInlineSizeLimit,
  bundleSizeLimit,
};
