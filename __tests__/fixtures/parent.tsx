import * as React from 'react';
import { Trans, translate } from 'react-i18next';
import Child from './child';

interface Props {
  t?: any;
}

class MyComponent extends React.Component<Props, any> {
  render() {
    const { t } = this.props;
    const name = 'Annalise';
    const day = 'Tuesday';
    const boys = t('{{count}} boys', { count: 3 });
    const girls = t('{{count}} girls', { count: 1 });

    return (
      <div>
        <h1>Parent</h1>
        <Trans>{{boys}} and {{girls}}</Trans>
        <Trans>Hello</Trans>
        <Trans>Hello {{name}} it's {{day}}</Trans>
        <Child />
      </div>
    );
  }
}

export default translate('common')(MyComponent);
