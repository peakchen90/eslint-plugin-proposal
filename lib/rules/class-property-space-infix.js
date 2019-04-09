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
      type: 'number',
      minimum: 0,
      maximum: 10
    }]
  },

  create: function (context) {
    const sourceCode = context.getSourceCode();
    const options = context.options;

    // space size
    let spaceSize = options[0];
    if (spaceSize === undefined) {
      spaceSize = 1;
    } else {
      spaceSize = Number(options[0]);
    }

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
     * @param message
     * @param node
     */
    function report(node) {
      context.report({
        message: 'Operator \'=\' must be spaced',
        node,
        fix(fixer) {
          const spaces = ' '.repeat(spaceSize);
          fixer.replaceText(node, spaces + '=' + spaces);
        }
      });
    }

    return {
      ClassProperty(node) {
        const operator = sourceCode.getTokensBetween(node.key, node.value)[0];
        const space = getSpace(node.key, node.value, operator);
        if (space[0] !== spaceSize || space[1] !== spaceSize) {
          report(operator);
        }
      }
    }
  }
}
