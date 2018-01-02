import * as React from 'react';
import { Trans, translate } from 'react-i18next';

interface Props {
  t?: any;
}

class MyComponent extends React.Component<Props, any> {
  render() {
    return (
      <div>
        a
        This is before
        <Trans>
          Text with a <a href="#">Link text</a>
          Text with a <a href="#"><img src='bar.png' /></a>
        </Trans>
        This is after
        This is an <img src='foo.png' /> after after
      </div>
    );
  }
}

export default translate('common')(MyComponent);
