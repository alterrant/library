module.exports = {
    extends: [require.resolve('arui-presets-lint/eslint'), 'plugin:react/jsx-runtime'],
    parserOptions: {
        project: ['./tsconfig.eslint.json',/* './cypress/tsconfig.json' */],
    },

    overrides: [
        {
            files: ['config/**/*.ts', 'src/global-definitions.d.ts', 'src/libs.d.ts'],
            rules: {
                'import/no-default-export': 'off',
            },
        },
    ],
    rules: {
        'import/no-extraneous-dependencies': [
            'error',
            {
                // TODO: добавить после cypess 'cypress/**/*.ts',
                devDependencies: ['**/*.test.{ts,tsx,js,jsx}'],
            },
        ],
        'import/no-default-export': 'off',
        indent: 'off', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md
        '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^action' }],
        "no-nested-ternary": "off",
        "no-unneeded-ternary": "off",
        'array-callback-return': "off",
        'consistent-return': "off",
        'react/jsx-no-useless-fragment': "off",
        'react/button-has-type': "off",
        "react/jsx-boolean-value": "off",
        "react/no-array-index-key": "off",
        "jsx-a11y/click-events-have-key-events": "off",
        "jsx-a11y/no-noninteractive-element-interactions": "off",
        "@typescript-eslint/array-type": ["error", { "default": "array" }],
    },
    ignorePatterns: ['coverage', 'cypress.config.ts'],
};
