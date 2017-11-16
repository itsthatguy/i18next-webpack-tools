import React from 'react';
import { translate } from 'react-i18next';

class MyComponent {
  render() {
    const { t } = this.props;

    const text = 'Hello';
    const text2 = t('Hello butt');
    return (
      <div>
        {t(text)}
        {text2}
        {t("Hello from {one} thing's")}
      </div>
    );
  }
}

export default translate('common')(MyComponent);
