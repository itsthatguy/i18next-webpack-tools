import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { I18n, I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import Parent from './parent';

const rootEl = document.getElementById('root');

export default ReactDOM.render(
  <I18nextProvider i18n={ i18n }>
    <Parent />
  </I18nextProvider>,
  rootEl
);
