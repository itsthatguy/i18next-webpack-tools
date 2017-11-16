import React from 'react';
import { translate } from 'react-i18next';
import OneThing from './one-thing';

class MyComponent {
  render() {
    const { t } = this.props;

    return (
      <div>
        {t('Hello friend dude')}
        {t('Hello')}
        <OneThing />
      </div>
    );
  }
}

export default translate('common')(MyComponent);
