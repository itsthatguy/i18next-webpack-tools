import * as React from 'react';
import { translate } from 'react-i18next';
import Child from './child';

interface Props {
  t?: any;
}

class MyComponent extends React.Component<Props, any> {
  render() {
    const { t } = this.props;

    return (
      <div>
        <h1>Parent</h1>
        <div>{t("Hello")}</div>
        <div>{t('Hello {{name}}', { name: 'Annalise' })}</div>
        <Child />
      </div>
    );
  }
}

export default translate('common')(MyComponent);
