import * as CopyPlugin from 'copy-webpack-plugin';

const transform = (buffer) => {
  const content = JSON.parse(buffer.toString());
  const newContent = content.reduce((result, translation) => {
    const { definition, term } = translation;
    const { one, other, many, few } = definition;
    if (typeof definition !== 'object') {
      let def = (typeof definition === 'string') && definition;
      def = def || other || many || few || term;

      return Object.assign(result,
        { [term]: def }
      );
    }

    if (definition && one) {
      const plural = other || many || few || term;
      return Object.assign(result,
        { [term]: one || term },
        other && { [`${term}_plural`]: plural },
      );
    }
  }, {});

  return Buffer.from(JSON.stringify(newContent, null, 2));
};

const defaultPatterns = [{
  context: 'lib/locales/',
  from: '**/*.json',
  to: 'locales/',
  force: true,
  transform,
}];

function i18nJsonTransform (patterns = defaultPatterns, options = {}) {
  const copyPlugin = new CopyPlugin(patterns, options);
  this.apply = copyPlugin.apply;
}

export default i18nJsonTransform;
