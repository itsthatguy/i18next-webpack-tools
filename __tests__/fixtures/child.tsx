import * as React from 'react';
import { translate } from 'react-i18next';

interface Props {
  t?: any;
}

class MyComponent extends React.Component<Props, any> {
  render() {
    const { t } = this.props;

    const text = t('Text with a <div>Div</div>');
    return (
      <div>
        <h2>Child</h2>
        <div>{text}</div>
        <div>{t("Hello from {{one}} thing's file", { one: 'one' })}</div>
        <div>{t("{{count}} dogs", { count: 3 })}</div>
      </div>
    );
  }
}

export default translate('common')(MyComponent);
