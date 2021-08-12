const { isArrayGenerator } = require('../utils');

module.exports = {
  meta: {
    docs: {
      description: 'disallow use dynamic import syntax',
      category: 'Possible Errors',
      recommended: false,
      url: 'https://github.com/peakchen90/eslint-plugin-proposal/blob/master/docs/rules/no-dynamic-import.md'
    },
    schema: [],
    messages: {
      unnecessary: 'Cannot use dynamic import syntax.'
    }
  },

  create(context) {
    /**
     * report error
     * @param node
     * @return {*|void|Promise<void>}
     */
    function report(node) {
      context.report({
        messageId: 'unnecessary',
        node
      });
    }

    return {
      ImportExpression(node) {
        report(node);
      },
      MemberExpression(node) {
        if (node.object.name === 'require' && node.property.name === 'ensure') {
          report(node);
        }
      },
      CallExpression(node) {
        if (node.callee.name === 'require') {
          if (isArrayGenerator(node.arguments[0])) {
            report(node.callee);
          }
        }
      }
    };
  }
};
