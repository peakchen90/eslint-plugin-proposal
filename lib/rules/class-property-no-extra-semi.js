module.exports = {
  meta: {
    docs: {
      description: 'disallow unnecessary semicolons',
      category: 'Possible Errors',
      recommended: true,
      url: 'https://github.com/peakchen90/eslint-plugin-proposal-class/blob/master/docs/rules/class-property-no-extra-semi.md'
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
      let tokens = [];
      let nextToken = sourceCode.getLastToken(node);
      while (nextToken && nextToken.value === ';') {
        tokens.push(nextToken);
        nextToken = sourceCode.getTokenAfter(nextToken);
      }
      return tokens;
    }

    /**
     * report error
     * @param semiTokens
     */
    function report(semiTokens) {
      const message = 'Unnecessary semicolon.';

      const start = semiTokens[0].loc.start;
      const end = semiTokens[semiTokens.length - 1].loc.end;
      let loc = {
        start,
        end
      };

      context.report({
        message,
        loc,
        fix(fixer) {
          const range = [
            semiTokens[1].range[0],
            semiTokens[semiTokens.length - 1].range[1]
          ];
          return fixer.removeRange(range);
        }
      });
    }

    /**
    * check extra semi
    * @param semiTokens
    * @return {boolean}
    */
    function checkExtraSemi(semiTokens) {
      return semiTokens.length <= 1;
    }


    return {
      ClassProperty(node) {
        const semiTokens = getSemiTokens(node);
        const valid = checkExtraSemi(semiTokens);
        if (!valid) {
          report(semiTokens);
        }
      }
    }
  }
}
