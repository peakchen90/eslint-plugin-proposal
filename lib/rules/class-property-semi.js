module.exports = {
  meta: {
    docs: {
      description: 'require or disallow semicolons instead of ASI',
      category: 'Stylistic Issues',
      recommended: false,
      url: 'https://github.com/peakchen90/eslint-plugin-proposal/blob/master/docs/rules/class-property-semi.md'
    },
    fixable: 'code',
    schema: [{
      type: 'string',
      enum: ['always', 'never']
    }],
    messages: {
      missing: 'Missing semicolon.',
      extra: 'Extra semicolon.',
    }
  },

  create(context) {
    const sourceCode = context.getSourceCode();
    const options = context.options;

    // has semi
    const hasSemi = !!((options[0] === undefined || options[0] === 'always'));

    /**
     * get one semis after the block statement
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
      const messageId = hasSemi ? 'missing' : 'extra';

      let loc;
      if (semiTokens && semiTokens.length > 0) {
        loc = semiTokens[0].loc;
      } else {
        const lastToken = sourceCode.getLastToken(node);
        const start = lastToken.loc.start;
        const end = lastToken.loc.end;
        loc = {
          start: { line: start.line, column: start.column + 1 },
          end: { line: end.line, column: end.column + 1 }
        };
      }

      context.report({
        messageId,
        loc,
        fix(fixer) {
          if (hasSemi) {
            return fixer.insertTextAfter(node, ';');
          }
          if (semiTokens[0]) {
            return fixer.remove(semiTokens[0]);
          }
        }
      });
    }

    /**
     * check semi
     * @param semiTokens
     * @return {boolean}
     */
    function checkSemi(semiTokens) {
      if (hasSemi && semiTokens[0] === undefined) {
        return false;
      }
      if (!hasSemi && semiTokens[0] !== undefined) {
        return false;
      }
      return true;
    }


    return {
      ClassProperty(node) {
        const semiTokens = getSemiTokens(node);
        const valid = checkSemi(semiTokens);
        if (!valid) {
          report(node, semiTokens);
        }
      }
    };
  }
};
