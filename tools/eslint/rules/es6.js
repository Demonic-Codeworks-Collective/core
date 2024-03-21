const es6Rules = {
  'no-useless-computed-key': 'error',
  'no-useless-rename': 'error',
  'no-var': 'error',
  'prefer-numeric-literals': 'error',
  'prefer-rest-params': 'error',
  'prefer-spread': 'error',
  'prefer-template': 'error',
  'symbol-description': 'error',
  'prefer-const': [
    'error',
    {
      destructuring: 'all',
      ignoreReadBeforeAssign: true,
    },
  ],
  'prefer-destructuring': [
    'error',
    {
      VariableDeclarator: {
        array: false,
        object: true,
      },
      AssignmentExpression: {
        array: false,
        object: false,
      },
    },
    {
      enforceForRenamedProperties: false,
    },
  ],
  'arrow-body-style': [
    'error',
    'as-needed',
    {
      requireReturnForObjectLiteral: false,
    },
  ],
  'no-restricted-exports': [
    'error',
    {
      restrictedNamedExports: ['then'],
    },
  ],
  'object-shorthand': [
    'error',
    'always',
    {
      ignoreConstructors: false,
      avoidQuotes: true,
      avoidExplicitReturnArrows: true,
    },
  ],
};

export { es6Rules };
