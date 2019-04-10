module.exports = {
  meta: {
    docs: {
      description: 'require or disallow semicolons instead of ASI',
      category: 'Stylistic Issues',
      recommended: false,
      url: 'https://github.com/peakchen90/eslint-plugin-proposal-class/blob/master/docs/rules/class-property-semi.md'
    },
    fixable: "code",
    schema: [{
      type: 'string',
      enum: ['always', 'never']
    }]
  },

  create(context) {
    const sourceCode = context.getSourceCode();
    const options = context.options;

    // has semi
    const hasSemi = (options[0] === undefined || options[0] === 'always') ? true : false;

    /**
     * get all semis after the block statement
     * @param node
     * @return {Array}
     */
    function getSemiTokens(node) {
      let tokens = [];
      let nextToken = sourceCode.getLastToken(node);
      if (nextToken && nextToken.value === ';') {
        tokens.push(nextToken);
      }
      return tokens;
    }

    /**
     * report error
     */
    function report(node, semiTokens) {
      let message = 'Missing semicolon.'
      if (!hasSemi) {
        message = 'Extra semicolon.'
      }

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
        }
      }

      context.report({
        message,
        loc,
        fix(fixer) {
          if (hasSemi) {
            return fixer.insertTextAfter(node, ';');
          } else if (semiTokens[0]) {
            return fixer.remove(semiTokens[0]);
          }
        }
      });
    }

    /**
    *
    * @param semiTokens
    */
    function checkSemi(semiTokens) {
      if (hasSemi && semiTokens[0] === undefined) {
        return false;
      } else if (!hasSemi && semiTokens[0] !== undefined) {
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
    }
  }
}
