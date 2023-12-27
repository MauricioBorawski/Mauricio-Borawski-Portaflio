module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:astro/recommended', // assuming there's a plugin for Astro.js
  ],
  rules: {
    // Aquí puedes agregar reglas personalizadas o modificar las reglas predeterminadas de ESLint
    // Ejemplo:
    // 'no-console': 'off',
    // 'no-unused-vars': 'warn',
  },
};

