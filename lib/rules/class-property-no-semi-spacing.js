module.exports = {
  meta: {
    docs: {
      description: 'enforce consistent spacing before semicolons',
      category: 'Stylistic Issues',
      recommended: false,
      url: 'https://github.com/peakchen90/eslint-plugin-proposal-class/blob/master/docs/rules/class-property-no-semi-spacing.md'
    },
    fixable: 'code',
    schema: []
  },

  create(context) {
    const sourceCode = context.getSourceCode();

    /**
     * get all semis after the block statement
     * @param node
     * @return {array}
     */
    function getSemiTokens(node) {
      const tokens = [];
      const nextToken = sourceCode.getLastToken(node);
      if (nextToken && nextToken.value === ';') {
        tokens.push(nextToken);
      }
      return tokens;
    }

    /**
     * report error
     * @param node
     * @param semiTokens
     */
    function report(node, semiTokens) {
      const message = 'Unexpected whitespace before semicolon.';

      const start = node.value.loc.end;
      const end = semiTokens[0].loc.start;
      const loc = {
        start,
        end
      };

      context.report({
        message,
        loc,
        fix(fixer) {
          const range = [
            node.value.range[1],
            semiTokens[0].range[0]
          ];
          return fixer.removeRange(range);
        }
      });
    }

    /**
    * check semi spacing
    * @param node
    * @param semiTokens
    * @return {boolean}
    */
    function checkSemiSpacing(node, semiTokens) {
      const valueEnd = node.value.range[1];
      const semi = semiTokens[0];
      if (semi && semi.range[0] !== valueEnd) {
        return false;
      }
      return true;
    }


    return {
      ClassProperty(node) {
        const semiTokens = getSemiTokens(node);
        const valid = checkSemiSpacing(node, semiTokens);
        if (!valid) {
          report(node, semiTokens);
        }
      }
    };
  }
};
