module.exports = {
  prompt: [
    {
      type: 'input',
      name: 'exportName',
      message: 'What\'s the library name when export?',
      default: 'TestLib',
    },
    {
      type: 'input',
      name: 'introduction',
      message: 'Enter some simple introduction!',
      default: 'An awesome libary',
    }
  ],
  completeMessage: 'To get started:\n\n cd <%=destPath%>\n  npm install\n  npm start\n\nDocumentation can be found at https://vuejs-templates.github.io/webpack',
  filter: {
  },
  ignore: [
  ]
};