import React from 'react';
import OneThing from './one-thing';

export default class MyComponent {
  render() {
    return (
      <div>
        {t('Hello friend dude')}
        {t('Hello')}
        <OneThing />
      </div>
    );
  }
}
