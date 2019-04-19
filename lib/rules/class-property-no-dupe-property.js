module.exports = {
  meta: {
    docs: {
      description: 'disallow duplicate class property',
      category: 'ECMAScript 6',
      recommended: false,
      url: 'https://github.com/peakchen90/eslint-plugin-proposal/blob/master/docs/rules/class-property-no-dupe-property.md'
    },
    schema: [],
    messages: {
      unexpected: "Duplicate name '{{name}}'."
    }
  },

  create(context) {
    let stack = [];

    /**
     * add state to stateMap
     * @param node
     */
    function addState(node) {
      const stateMap = stack[stack.length - 1];
      const name = node.key.name;
      const type = node.type;
      const target = node.static
        ? stateMap.static
        : stateMap.nonStatic;

      target.push({ name, type, node });
    }

    /**
     * report error
     * @param state
     */
    function report(state) {
      context.report({
        messageId: 'unexpected',
        data: {
          name: state.name
        },
        node: state.node.key
      });
    }

    /**
     * check if duplicate,and report error
     * @param list
     */
    function checkDuplicate(list) {
      let target = list;
      for (let i = list.length - 1; i >= 0; i--) {
        const state = list[i];
        if (state.type === 'ClassProperty') {
          const isDuplicate = target.find(item => {
            return item !== state && item.name === state.name;
          });
          if (isDuplicate) {
            target = target.filter(item => item !== state);
            report(state);
          }
        }
      }
    }

    return {
      // Initializes the stack of state of member declarations.
      Program() {
        stack = [];
      },

      ClassBody() {
        const stateMap = Object.create(null);
        stateMap.static = [];
        stateMap.nonStatic = [];
        stack.push(stateMap);
      },

      // when exit traversing the class body, check if duplicate
      'ClassBody:exit': function () {
        const stateMap = stack.pop();

        // disallow duplicate static methods or static property
        checkDuplicate(stateMap.static);

        // disallow duplicate non-static methods or non-static property
        checkDuplicate(stateMap.nonStatic);
      },

      ClassProperty(node) {
        addState(node);
      },

      MethodDefinition(node) {
        addState(node);
      }
    };
  }
};
