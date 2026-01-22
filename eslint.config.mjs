// Root ESLint config for monorepo
// Individual packages have their own ESLint configs
export default [
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/build/**',
      '**/.next/**',
      '**/coverage/**',
      '**/*.config.js',
      '**/*.config.mjs',
      '**/*.config.ts',
      '**/package-lock.json',
      '**/docker-compose.yml',
      '**/docs/**',
      '**/.vscode/**',
      '**/.git/**',
    ],
  },
];
