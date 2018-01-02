import * as React from 'react';
import { Trans, translate } from 'react-i18next';
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
        <Trans>Hello</Trans>
        <Trans name='Annalise'>Hello {{name}}</Trans>
        <Child />
      </div>
    );
  }
}

export default translate('common')(MyComponent);
