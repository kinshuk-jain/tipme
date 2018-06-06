module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "plugins": [
    "react",
    "jsx-a11y",
    "import"
  ],
  "rules": {
    'jsx-a11y/href-no-hash': 'off',
    'import/no-named-as-default': 'off',
    'react/forbid-prop-types': 'off',
    'import/no-named-as-default-member': 'off',
    'import/prefer-default-export': 'off',
    'react/prefer-stateless-function': 'off',
    'no-prototype-builtins': 'off',
    'react/require-default-props': 'off',
    'class-methods-use-this': 'off',
    'react/no-array-index-key': 'warn',
    "react/jsx-filename-extension": [1, {
      "extensions": [".js", ".jsx"]
    }]
  }
};
