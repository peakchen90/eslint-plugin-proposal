module.exports = {
  meta: {
    docs: {
      description: 'disallow duplicate class property',
      category: 'ECMAScript 6',
      recommended: false,
      url: 'https://github.com/peakchen90/eslint-plugin-proposal-class/blob/master/docs/rules/no-dupe-class-property.md'
    },
    schema: [],
    messages: {
      unexpected: "Duplicate name '{{name}}'."
    }
  },

  create(context) {
    // const sourceCode = context.getSourceCode();
    let stack = [];

    function addState(node) {
      const stateMap = stack[stack.length - 1];
      const name = node.key.name;
      let target;

      if (node.type === 'ClassProperty' && node.static) {
        target = stateMap.staticProperties;
      } else if (node.type === 'ClassProperty' && !node.static) {
        target = stateMap.properties;
      } else if (node.type === 'MethodDefinition' && node.static) {
        target = stateMap.staticMethods;
      } else if (node.type === 'MethodDefinition' && !node.static) {
        target = stateMap.methods;
      }

      if (target) {
        target.push({ name, node });
      }
    }

    function report(state) {
      context.report({
        messageId: 'unexpected',
        data: {
          name: state.name
        },
        node: state.node.key
      });
    }

    return {
      // Initializes the stack of state of member declarations.
      Program() {
        stack = [];
      },

      ClassBody() {
        const stateMap = Object.create(null);
        stateMap.properties = [];
        stateMap.methods = [];
        stateMap.staticProperties = [];
        stateMap.staticMethods = [];
        stack.push(stateMap);
      },

      'ClassBody:exit': function () {
        const stateMap = stack.pop();

        // disallow duplicate static methods or static property
        let target = stateMap.staticProperties.concat(stateMap.staticMethods);
        for (let i = stateMap.staticProperties.length - 1; i >= 0; i--) {
          const state = stateMap.staticProperties[i];
          const isDuplicate = !!target.find(item => {
            return item !== state && item.name === state.name;
          });
          if (isDuplicate) {
            report(state);
            target = target.filter(item => item !== state);
          }
        }

        // disallow duplicate non-static methods or non-static property
        target = stateMap.properties.concat(stateMap.methods);
        for (let i = stateMap.properties.length - 1; i >= 0; i--) {
          const state = stateMap.properties[i];
          const isDuplicate = target.find(item => {
            return item !== state && item.name === state.name;
          });
          if (isDuplicate) {
            report(state);
            target = target.filter(item => item !== state);
          }
        }
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
