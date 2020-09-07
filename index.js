module.exports = {
  rules: {
    // POSSIBLE ERRORS
    // Color
    'color-no-invalid-hex': true,

    // Font Family
    'font-family-no-duplicate-names': true,
    'font-family-no-missing-generic-family-keyword': true,

    // Function
    'function-calc-no-invalid': true,
    'function-calc-no-unspaced-operator': true,
    'function-linear-gradient-no-nonstandard-direction': true,

    // String
    'string-no-newline': true,

    // Unit
    'unit-no-unknown': true,

    // Property
    'property-no-unknown': true,

    // Keyframe declaration
    'keyframe-declaration-no-important': true,

    // Declaration block
    'declaration-block-no-duplicate-properties': [
      true,
      {
        ignore: ['consecutive-duplicates-with-different-values'],
      },
    ],
    'declaration-block-no-shorthand-property-overrides': true,

    // Block
    'block-no-empty': true,

    // Selector
    'selector-pseudo-class-no-unknown': true,
    'selector-pseudo-element-no-unknown': true,
    'selector-type-no-unknown': true,

    // Media feature
    'media-feature-name-no-unknown': true,

    // At-rule
    'at-rule-no-unknown': true,

    // Comment
    'comment-no-empty': true,

    // General / Sheet
    'no-descending-specificity': true,
    'no-duplicate-at-import-rules': true,
    'no-duplicate-selectors': true,
    // 'no-empty-source': true,
    'no-extra-semicolons': true,
    // 'no-invalid-double-slash-comments': false,

    // LIMIT LANGUAGE FEATURES
    // Alpha-value
    'alpha-value-notation': 'percentage',

    // Hue
    'hue-degree-notation': 'angle',

    // Color
    'color-function-notation': 'modern',
    'color-named': [
      'never',
      {
        ignore: ['inside-function'],
      },
    ],
    // 'color-no-hex': false,

    // Length
    'length-zero-no-unit': [
      true,
      {
        ignore: ['custom-properties'],
      },
    ],

    // Font weight
    'font-weight-notation': 'numeric',

    // Function
    // 'function-url-no-scheme-relative': false,

    // Number
    'number-max-precision': 3,

    // Shorthand property
    'shorthand-property-no-redundant-values': true,

    // Value
    'value-no-vendor-prefix': true,

    // Property
    'property-no-vendor-prefix': true,

    // Declaration
    // 'declaration-block-no-redundant-longhand-properties': false,
    // 'declaration-no-important': false,
    'declaration-property-unit-blacklist': {
      '/^font/': ['px'],
      '/^animation/': ['s'],
    },

    // Declaration block
    'declaration-block-single-line-max-declarations': 1,

    // Selector
    'selector-max-attribute': 3,
    'selector-max-class': 3,
    'selector-max-combinators': 3,
    'selector-max-compound-selectors': 4,
    'selector-max-empty-lines': 0,
    'selector-max-id': 1,
    'selector-max-pseudo-class': 2,
    // 'selector-max-specificity': [1, 2, 2],
    'selector-max-type': 2,
    'selector-max-universal': 1,
    // 'selector-nested-pattern': '^&:(?:hover|focus)$',
    'selector-no-vendor-prefix': true,
    'selector-pseudo-element-colon-notation': 'single',

    // Media feature
    'media-feature-name-no-vendor-prefix': true,

    // At-rule
    'at-rule-no-vendor-prefix': true,

    // STYLISTIC ISSUES
    // Color
    'color-hex-case': 'upper',
    'color-hex-length': 'long',

    // Font family
    'font-family-name-quotes': 'always-where-recommended',

    // Function
    'function-comma-newline-after': 'never-multi-line',
    'function-comma-newline-before': 'never-multi-line',
    'function-comma-space-after': 'always',
    'function-comma-space-before': 'never',
    'function-max-empty-lines': 0,
    'function-name-case': 'lower',
    'function-parentheses-newline-inside': 'never-multi-line',
    'function-parentheses-space-inside': 'never',
    'function-url-quotes': 'always',
    'function-whitespace-after': 'always',
  },

  // Number
  'number-leading-zero': 'always',
  'number-no-trailing-zeros': true,

  // String
  'string-quotes': 'single',

  // Unit
  'unit-case': 'lower',

  // Value
  'value-keyword-case': 'lower',

  // Value list
  'value-list-comma-newline-after': 'never-multi-line',
  'value-list-comma-newline-before': 'never-multi-line',
  'value-list-comma-space-after': 'always',
  'value-list-comma-space-before': 'never',
  'value-list-max-empty-lines': 0,

  // Custom property
  'custom-property-empty-line-before': [
    'always',
    {
      except: ['after-custom-property'],
    },
  ],

  // Declaration
  'declaration-bang-space-after': 'never',
  'declaration-bang-space-before': 'always',
  // 'declaration-colon-newline-after': 'always-multi-line',
  'declaration-colon-space-after': 'always',
  'declaration-colon-space-before': 'never',
  'declaration-empty-line-before': 'never',

  // Declaration block
  'declaration-block-semicolon-newline-after': 'always',
  'declaration-block-semicolon-newline-before': 'never-multi-line',
  'declaration-block-semicolon-space-after': 'always',
  'declaration-block-semicolon-space-before': 'never',
  'declaration-block-trailing-semicolon': 'always',

  // Block
  'block-closing-brace-empty-line-before': 'never',
  'block-closing-brace-newline-after': 'always',
  'block-closing-brace-newline-before': 'always-multi-line',
  'block-closing-brace-space-after': 'always',
  'block-closing-brace-space-before': 'always',
  'block-opening-brace-newline-after': 'never',
  'block-opening-brace-newline-before': 'never',
  'block-opening-brace-space-after': 'always',
  'block-opening-brace-space-before': 'always',

  // Selector
  'selector-attribute-brackets-space-inside': 'never',
  'selector-attribute-operator-space-after': 'never',
  'selector-attribute-operator-space-before': 'never',
  'selector-attribute-quotes': 'always',
  'selector-combinator-space-after': 'always',
  'selector-combinator-space-before': 'always',
  'selector-descendant-combinator-no-non-space': 'always',
  'selector-pseudo-class-case': 'lower',
  'selector-pseudo-class-parentheses-space-inside': 'never',
  'selector-pseudo-element-case': 'lower',
  'selector-type-case': 'lower',

  // Selector list
  'selector-list-comma-newline-after': 'always',
  'selector-list-comma-newline-before': 'always',
  'selector-list-comma-space-after': 'always',
  'selector-list-comma-space-before': 'never',

  // Rule
  'rule-empty-line-before': 'always',

  // Media feature
  'media-feature-colon-space-after': 'always',
  'media-feature-colon-space-before': 'before',
  'media-feature-name-case': 'lower',
  'media-feature-parentheses-space-inside': 'never',
  'media-feature-range-operator-space-after': 'always',
  'media-feature-range-operator-space-before': 'always',

  // Media query list
  'media-query-list-comma-newline-after': 'always',
  'media-query-list-comma-newline-before': 'always',
  'media-query-list-comma-space-after': 'always',
  'media-query-list-comma-space-before': 'always',

  // At-rule
  'at-rule-empty-line-before': 'always',
  'at-rule-name-case': 'lower',
  'at-rule-name-newline-after': 'never',
  'at-rule-name-space-after': 'always',
  'at-rule-semicolon-newline-after': 'always',
  'at-rule-semicolon-space-before': 'never',

  // Comment
  'comment-empty-line-before': 'never',
  'comment-whitespace-inside': 'always',

  // General / Sheet
  'max-empty-lines': 1,
  'max-line-length': 100,
  'no-missing-end-of-source-newline': true,
  'no-empty-first-line': true,
  indentation: 2,
  linebreaks: 'unix',
};
