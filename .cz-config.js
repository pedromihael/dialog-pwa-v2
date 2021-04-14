module.exports = {
    name: 'cz-customizable',
    types: [
        { value: 'build', name: 'build: build a project' },
        { value: 'ci', name: 'ci: update ci pipeline' },
        {
            value: 'chore',
            name:
                'chore: Changes to the build process or auxiliary tools and libraries such as documentation generation'
        },
        {
            value: 'client',
            name: 'client: create a new client or modify an existing'
        },
        { value: 'docs', name: 'docs: Documentation only changes' },

        { value: 'feat', name: 'feat: A new feature' },
        { value: 'fix', name: 'fix: A bug fix' },
        {
            value: 'perf',
            name: 'perf: A code change that improves performance'
        },
        {
            value: 'refactor',
            name:
                'refactor: A code change that neither fixes a bug nor adds a feature'
        },
        { value: 'revert', name: 'revert: Revert to a commit' },
        {
            value: 'style',
            name:
                'style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)'
        },

        { value: 'test', name: 'test: Adding tests' },

        { value: 'wip', name: 'WIP: Work in progress' }
    ],
    messages: {
        type: "Select the type of change that you're committing:",
        scope: '\nDenote the SCOPE of this change (optional):',
        customScope: 'Denote the SCOPE of this change:',
        subject: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
        body:
            'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
        breaking: 'List any BREAKING CHANGES (optional):\n',
        footer:
            'List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\n',
        confirmCommit: 'Are you sure you want to proceed with the commit above?'
    },

    allowCustomScopes: true,
    allowBreakingChanges: ['feat', 'fix', 'perf'],
    subjectLimit: 150
}
