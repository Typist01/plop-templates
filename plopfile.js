export default function (plop) {
    // controller generator
    plop.setGenerator('component', {
        description: 'React Component',
        prompts: [{
            type: 'input',
            name: 'componentName',
            message: 'Component name please'
        }],
        actions: (data) => {
            // TODO change casing here
            // data.componentName = plop.getHelper("properCase/pascalCase")(data.componentName)
            // console.log(plop.getHelperList())
            return(


         [{
            type: 'add',
            path: 'src/Components/{{componentName}}/{{componentName}}.tsx',
            templateFile: 'plop-templates/component.hbs'
        },
    {
        type: 'add',
        path: 'src/Components/{{componentName}}/index.ts',
        templateFile: 'plop-templates/index.hbs',
    },
    {
        type: 'add',
        path: 'src/Components/{{componentName}}/stories/index.stories.tsx',
        templateFile: 'plop-templates/stories.hbs',
    }
])
}
    });
};