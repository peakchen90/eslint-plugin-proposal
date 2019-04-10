module.exports = {
  meta: {
    docs: {
      description: 'require spacing around infix operator \'=\' in the class property',
      category: 'Stylistic Issues',
      recommended: false,
      url: 'https://github.com/peakchen90/eslint-plugin-proposal-class/blob/master/docs/rules/class-property-space-infix.md'
    },
    fixable: 'whitespace',
    schema: [{
      type: 'string',
      enum: ['always', 'never']
    }]
  },

  create(context) {
    const sourceCode = context.getSourceCode();
    const options = context.options;

    // space size
    const spaceSize = (options[0] === undefined || options[0] === 'always') ? 1 : 0;

    /**
     * get space around operator `=`
     * @param left
     * @param right
     * @param operator
     * @return {Array}
     */
    function getSpace(left, right, operator) {
      const beforeSpace = operator.range[0] - left.range[1];
      const afterSpace = right.range[0] - operator.range[1];
      return [
        beforeSpace,
        afterSpace
      ]
    }

    /**
     * report error
     * @param node
     * @param range
     */
    function report(node, range) {
      context.report({
        message: 'Operator \'=\' must be spaced',
        node,
        fix(fixer) {
          const spaces = Array(spaceSize + 1).join(' ');
          const text = `${spaces}=${spaces}`;
          return fixer.replaceTextRange(range, text);
        }
      });
    }

    return {
      ClassProperty(node) {
        const operator = sourceCode.getTokensBetween(node.key, node.value)[0];
        const space = getSpace(node.key, node.value, operator);
        if (space[0] !== spaceSize || space[1] !== spaceSize) {
          const range = [
            node.key.range[1],
            node.value.range[0]
          ]
          report(operator, range);
        }
      }
    }
  }
}
