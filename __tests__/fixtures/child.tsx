import * as React from 'react';
import { Trans, translate } from 'react-i18next';

interface Props {
  t?: any;
}

class MyComponent extends React.Component<Props, any> {
  render() {
    const dog = 'bulldog';

    return (
      <div>
        a
        This is before
        <Trans>
          Text with a <a href="#">one</a>
          yep {{dog}} dude
          <a>three</a>
          A second text with a
          <a href="#">
            five
            <img src='bar.png' />
            <h1>two</h1>
            <h3>three<span>one</span></h3>
          </a>
          <a>six</a>
          <a><span>zero</span>seven</a>
        </Trans>
        This is after
        This is an <img src='foo.png' /> after after
      </div>
    );
  }
}

export default translate('common')(MyComponent);
