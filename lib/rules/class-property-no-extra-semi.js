module.exports = {
  meta: {
    docs: {
      description: 'disallow unnecessary semicolons',
      category: 'Possible Errors',
      recommended: false,
      url: 'https://github.com/peakchen90/eslint-plugin-proposal-class/blob/master/docs/rules/class-property-no-extra-semi.md'
    },
    fixable: 'code',
    schema: [],
    messages: {
      unnecessary: 'Unnecessary semicolon.'
    },
    deprecated: true
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
      let nextToken = sourceCode.getLastToken(node);
      while (nextToken && nextToken.value === ';') {
        tokens.push(nextToken);
        nextToken = sourceCode.getTokenAfter(nextToken);
      }
      return tokens;
    }

    /**
     * report error
     * @param node
     * @return {*|void|Promise<void>}
     */
    function report(node) {
      context.report({
        messageId: 'unnecessary',
        node,
        fix(fixer) {
          return fixer.remove(node);
        }
      });
    }

    return {
      ClassProperty(node) {
        const semiTokens = getSemiTokens(node);
        if (semiTokens.length > 1) {
          semiTokens.forEach((token, index) => {
            if (index >= 1) {
              report(token);
            }
          });
        }
      }
    };
  }
};
