module.exports = {
	"plugins": [
		"@typescript-eslint"
	],
	"extends": [
		"eslint:recommended", 
		"plugin:@typescript-eslint/recommended"
	],
	"parserOptions": {
	  "ecmaVersion": 2018,
	  "project": "./tsconfig.json",
	  "sourceType": "module"
	},
	"globals": {
		"process": "readonly",
		"setTimeout": "writeable",
		"Promise": "writeable",
		"console": "writeable",
		"__dirname": "readonly"
	},
	"rules": {
		/* tslint rules turned off for all files
		scroll down for tslint rules*/
		"@typescript-eslint/indent": "off",
		"@typescript-eslint/no-var-requires": "off",
		"@typescript-eslint/explicit-function-return-type": "off",
		"@typescript-eslint/no-use-before-define": "off",
		"@typescript-eslint/interface-name-prefix": "off",
		/* eslint rules */
		"accessor-pairs": [
			1,
			{
			  "getWithoutSet": false
			}
		  ],
		  "array-bracket-spacing": [
			1,
			"never"
		  ],
		  "array-callback-return": 1,
		  "arrow-body-style": [
			1,
			"as-needed"
		  ],
		  "arrow-parens": [
			1,
			"as-needed"
		  ],
		  "arrow-spacing": 1,
		  "block-scoped-var": 1,
		  "block-spacing": [
			1,
			"always"
		  ],
		  "brace-style": [
			1,
			"stroustrup"
		  ],
		  "callback-return": 2,
		  "camelcase": 1,
		  "comma-dangle": [
			1,
			"never"
		  ],
		  "comma-spacing": [
			1,
			{
			  "after": true,
			  "before": false
			}
		  ],
		  "comma-style": [
			1,
			"last"
		  ],
		  "complexity": [
			1,
			15
		  ],
		  "computed-property-spacing": [
			1,
			"never"
		  ],
		  "consistent-return": 1,
		  "consistent-this": [
			2,
			"self"
		  ],
		  "constructor-super": 1,
		  "curly": 2,
		  "default-case": 1,
		  "dot-location": [
			1,
			"property"
		  ],
		  "dot-notation": 1,
		  "eol-last": 0,
		  "eqeqeq": [
			1,
			"smart"
		  ],
		  "func-names": 0,
		  "func-style": [
			1,
			"declaration",
			{
			  "allowArrowFunctions": true
			}
		  ],
		  "generator-star-spacing": [
			1,
			{
			  "after": true,
			  "before": false
			}
		  ],
		  "global-require": 1,
		  "guard-for-in": 1,
		  "handle-callback-err": 2,
		  "jsx-quotes": 0,
		  "key-spacing": [
			1,
			{
			  "afterColon": true,
			  "beforeColon": false
			}
		  ],
		  "keyword-spacing": 1,
		  "linebreak-style": [
			1,
			"unix"
		  ],
		  "lines-around-comment": 0,
		  "max-depth": [
			1,
			5
		  ],
		  "max-len": [
			1,
			{ "tabWidth": 4 },
			{ "code": 180 }
		  ],
		  "max-nested-callbacks": [
			1,
			4
		  ],
		  "max-params": [
			1,
			7
		  ],
		  "max-statements": [
			1,
			50,
			{
			  "ignoreTopLevelFunctions": true
			}
		  ],
		  "new-cap": 1,
		  "new-parens": 1,
		  "newline-after-var": 0,
		  "newline-per-chained-call": 1,
		  "no-alert": 1,
		  "no-array-constructor": 1,
		  "no-caller": 1,
		  "no-case-declarations": 0,
		  "no-class-assign": 1,
		  "no-cond-assign": 1,
		  "no-confusing-arrow": 0,
		  "no-console": 0,
		  "no-const-assign": 1,
		  "no-constant-condition": 1,
		  "no-control-regex": 1,
		  "no-debugger": 1,
		  "no-div-regex": 1,
		  "no-dupe-args": 1,
		  "no-dupe-class-members": 1,
		  "no-dupe-keys": 1,
		  "no-duplicate-case": 1,
		  "no-else-return": 0,
		  "no-empty": 1,
		  "no-empty-character-class": 1,
		  "no-empty-function": 1,
		  "no-empty-pattern": 1,
		  "no-eq-null": 1,
		  "no-eval": 1,
		  "no-ex-assign": 1,
		  "no-extend-native": 1,
		  "no-extra-bind": 1,
		  "no-extra-boolean-cast": 1,
		  "no-extra-label": 1,
		  "no-extra-parens": [
			1,
			"all",
			{
			  "conditionalAssign": false,
			  "nestedBinaryExpressions": false
			}
		  ],
		  "no-extra-semi": 2,
		  "no-fallthrough": 1,
		  "no-floating-decimal": 1,
		  "no-func-assign": 1,
		  "no-implicit-coercion": 0,
		  "no-implicit-globals": 2,
		  "no-implied-eval": 1,
		  "no-inline-comments": 0,
		  "no-inner-declarations": 1,
		  "no-invalid-regexp": 1,
		  "no-invalid-this": 2,
		  "no-irregular-whitespace": 1,
		  "no-iterator": 1,
		  "no-labels": [
			1,
			{
			  "allowLoop": true,
			  "allowSwitch": true
			}
		  ],
		  "no-lone-blocks": 1,
		  "no-lonely-if": 0,
		  "no-loop-func": 0,
		  "no-magic-numbers": 0,
		  "no-mixed-requires": 1,
		  "no-mixed-spaces-and-tabs": [
			1,
			"smart-tabs"
		  ],
		  "no-multi-spaces": 0,
		  "no-multi-str": 1,
		  "no-multiple-empty-lines": 1,
		  "no-native-reassign": [
			1,
			{
			  "exceptions": [
				"Promise"
			  ]
			}
		  ],
		  "no-negated-condition": 0,
		  "no-negated-in-lhs": 1,
		  "no-nested-ternary": 1,
		  "no-new": 1,
		  "no-new-object": 1,
		  "no-new-require": 1,
		  "no-new-symbol": 1,
		  "no-new-wrappers": 1,
		  "no-obj-calls": 1,
		  "no-param-reassign": 0,
		  "no-path-concat": 1,
		  "no-plusplus": 0,
		  "no-process-exit": 0,
		  "no-proto": 1,
		  "no-redeclare": 1,
		  "no-regex-spaces": 1,
		  "no-return-assign": 1,
		  "no-self-assign": 1,
		  "no-self-compare": 1,
		  "no-sequences": 1,
		  "no-spaced-func": 1,
		  "no-sparse-arrays": 1,
		  "no-this-before-super": 1,
		  "no-throw-literal": 1,
		  "no-trailing-spaces": 1,
		  "no-undef": 1,
		  "no-underscore-dangle": 0,
		  "no-unexpected-multiline": 1,
		  "no-unmodified-loop-condition": 1,
		  "no-unneeded-ternary": 1,
		  "no-unreachable": 2,
		  "no-unused-expressions": 1,
		  "no-unused-labels": 1,
		  "no-unused-vars": 2,
		  "no-useless-call": 1,
		  "no-useless-concat": 1,
		  "no-var": 0,
		  "no-void": 1,
		  "no-warning-comments": [
			0,
			{
			  "location": "anywhere",
			  "terms": [
				"todo",
				"fixme",
				"hack"
			  ]
			}
		  ],
		  "no-whitespace-before-property": 1,
		  "no-with": 1,
		  "object-curly-spacing": [
			1,
			"always"
		  ],
		  "object-shorthand": 0,
		  "one-var": 0,
		  "one-var-declaration-per-line": [
			1,
			"initializations"
		  ],
		  "operator-assignment": [
			1,
			"always"
		  ],
		  "operator-linebreak": [
			1,
			"after",
			{
			  "overrides": {
				":": "ignore",
				"?": "ignore"
			  }
			}
		  ],
		  "prefer-arrow-callback": 0,
		  "prefer-const": 1,
		  "prefer-reflect": 0,
		  "prefer-rest-params": 0,
		  "prefer-spread": 0,
		  "prefer-template": 0,
		  "quote-props": [
			1,
			"consistent"
		  ],
		  "quotes": [
			  1,
			  "single",
			  {
				  "avoidEscape": true
			  }
		  ],
		  "radix": 0,
		  "require-yield": 1,
		  "semi": [
			2,
			"always"
		  ],
		  "semi-spacing": [
			1,
			{
			  "after": true,
			  "before": false
			}
		  ],
		  "space-before-blocks": 1,
		  "space-before-function-paren": [
			1,
			{
			  "anonymous": "always",
			  "named": "never"
			}
		  ],
		  "space-in-parens": [
			1,
			"never"
		  ],
		  "space-infix-ops": 1,
		  "space-unary-ops": [
			1,
			{
			  "nonwords": false,
			  "words": true
			}
		  ],
		  "spaced-comment": [
			0,
			"always",
			{
			  "line": {
				"exceptions": [
				  "/"
				]
			  }
			}
		  ],
		  "strict": [
			1,
			"global"
		  ],
		  "template-curly-spacing": [
			1,
			"always"
		  ],
		  "unicode-bom": [
			1,
			"never"
		  ],
		  "use-isnan": 1,
		  "valid-jsdoc": 0,
		  "valid-typeof": 1,
		  "vars-on-top": 0,
		  "wrap-iife": [
			1,
			"inside"
		  ],
		  "yield-star-spacing": [
			1,
			"after"
		  ],
		  "yoda": 1
	},
	"overrides": [
		{
			"files": [
				"*.ts",
				"*.tsx"
			],
			"rules": {
				/* @typescript-eslint rules */
				"@typescript-eslint/indent": [
					1,
					"tab"
				],
				"@typescript-eslint/no-var-requires": 0,
				"@typescript-eslint/explicit-function-return-type": 0,
				"@typescript-eslint/no-use-before-define": 0,
				"@typescript-eslint/interface-name-prefix": 0,
				"@typescript-eslint/no-useless-constructor": 1
			}
		}
	]
}