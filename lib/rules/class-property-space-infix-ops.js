module.exports = {
  meta: {
    docs: {
      description: 'require or disallow spacing between operator \'=\'',
      category: 'Stylistic Issues',
      recommended: false,
      url: 'https://github.com/peakchen90/eslint-plugin-proposal-class/blob/master/docs/rules/class-property-space-infix-ops.md'
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
     * @return {array}
     */
    function getSpace(left, right, operator) {
      const beforeSpace = operator.range[0] - left.range[1];
      const afterSpace = right.range[0] - operator.range[1];
      return [
        beforeSpace,
        afterSpace
      ];
    }

    /**
     * report error
     * @param node
     * @param operator
     */
    function report(node, operator) {
      let message = 'Operator \'=\' must be spaced.';
      let loc = operator.loc;
      if (spaceSize === 0) {
        message = 'Operator \'=\' should not be spaced.';
        const start = node.key.loc.end;
        const end = node.value.loc.start;
        loc = {
          start: { line: start.line, column: start.column + 1 },
          end: { line: end.line, column: end.column - 1 }
        };
      }

      context.report({
        message,
        loc,
        fix(fixer) {
          const range = [
            node.key.range[1],
            node.value.range[0]
          ];
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
          report(node, operator);
        }
      }
    };
  }
};
