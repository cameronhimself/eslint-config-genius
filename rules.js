{
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module"
  },
  "rules": {
    "camelcase": "error",
    "comma-dangle": [
      "error",
      "always-multiline"
    ],
    "comma-spacing": "error",
    "comma-style": "error",
    "curly": "error",
    "eol-last": "error",
    "eqeqeq": "error",
    "func-call-spacing": [
      "error",
      "never"
    ],
    "no-mixed-spaces-and-tabs": [
      "error",
      "smart-tabs"
    ],
    "no-trailing-spaces": "error",
    "no-var": "error",
    "prefer-const": "error",
    "semi": "error",
    "space-before-blocks": "error",
    "space-before-function-paren": [
      "error",
      {
        "anonymous": "always",
        "named": "never",
        "asyncArrow": "always"
      }
    ],
    "space-in-parens": [
      "error",
      "never"
    ],
    "space-unary-ops": [
      "error",
      {
        "words": true,
        "nonwords": false,
        "overrides": {
          "!": true,
          "!!": true
        }
      }
    ]
  }
}
