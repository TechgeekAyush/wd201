import globals from "globals";
import pluginJs from "@eslint/js";


export default {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
    jest: true
  },
  extends: 'eslint:recommended',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {}
};