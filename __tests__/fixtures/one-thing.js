import React from 'react';

const foo = t('dang');
export default class MyComponent {
  render() {
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
