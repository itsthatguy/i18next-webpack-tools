import { ensureDirSync, outputFileSync, readdirSync, realpathSync, writeJsonSync } from 'fs-extra';
import { OPTIONS } from '../i18n-json-webpack-loader';
import { union } from 'lodash';
import { join } from 'path';

export const loadTranslationFile = (language) => {
  const filePath = join(OPTIONS.translationsDir, language, 'common.json');
  try {
    if (require.resolve(filePath)) delete require.cache[filePath];
    return require(filePath);
  } catch (err) {
    outputFileSync(filePath, '');
    return false;
  }
};

export const languages = () => {
  ensureDirSync(OPTIONS.translationsDir);
  const dirs = readdirSync(OPTIONS.translationsDir);
  return union(dirs, OPTIONS.defaultLanguages);
};
