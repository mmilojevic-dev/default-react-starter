module.exports = {
  trailingComma: 'none',
  tabWidth: 2,
  printWidth: 80,
  useTabs: false,
  semi: false,
  singleQuote: true,
  quoteProps: 'as-needed',
  bracketSpacing: true,
  arrowParens: 'always',
  jsxBracketSameLine: false,
  endOfLine: 'lf',
  tailwindConfig: './tailwind.config.ts',
  overrides: [
    {
      files: '.prettierrc',
      options: {
        parser: 'json'
      }
    }
  ],
  plugins: ['prettier-plugin-tailwindcss', 'prettier-plugin-classnames']
}
