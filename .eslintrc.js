module.exports = {
    env: {
        node: true,
        es2020: true,
        jest: true
    },
    extends: [
        'eslint:recommended'
    ],
    parserOptions: {
        ecmaVersion: 2020,
    },
    rules: {
        // You can add specific rules here
    },
    overrides: [
        {
            files: ['**/*.test.js'],
            env: {
                jest: true
            },
            globals: {
                describe: 'readonly',
                test: 'readonly',
                expect: 'readonly'
            }
        }
    ]
};