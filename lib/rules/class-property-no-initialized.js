module.exports = {
  meta: {
    docs: {
      description: 'disallow uninitialized class property',
      category: 'ECMAScript 6',
      recommended: false,
      url: 'https://github.com/peakchen90/eslint-plugin-proposal/blob/master/docs/rules/class-property-no-initialized.md'
    },
    schema: [],
    messages: {
      unexpected: 'It is necessary be initialized.'
    }
  },

  create(context) {
    /**
     * report error
     * @param node
     */
    function report(node) {
      context.report({
        messageId: 'unexpected',
        node
      });
    }

    return {
      ClassProperty(node) {
        if (node.value === null) {
          report(node);
        }
      }
    };
  }
};
