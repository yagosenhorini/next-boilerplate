module.exports = (plop) => {
  // create your generators here
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/Component.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/styled.ts',
        templateFile: 'templates/styled.ts.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/stories.tsx',
        templateFile: 'templates/stories.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/test.tsx',
        templateFile: 'templates/test.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/types.tsx',
        templateFile: 'templates/types.ts.hbs',
      },
    ],
  });
};
