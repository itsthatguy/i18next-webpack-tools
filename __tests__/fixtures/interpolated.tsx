import * as React from 'react';
import { Trans, translate } from 'react-i18next';

class Interpolated extends React.Component<any, any> {
  render() {
    const { t } = this.props;
    const dog = t('bulldog');

    return (
      <Trans>
        <div>
          I own a {{dog}}.
        </div>
      </Trans>
    );
  }
}

export default translate('common')(Interpolated);
