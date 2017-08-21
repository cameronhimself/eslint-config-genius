export default [
	{ name: 'camelcase',
		definition: 'error',
		description: 'Require `camelCase` for variables and object properties.',
	},
	{ name: 'comma-dangle',
		definition: ['error', 'always-multiline'],
		description: 'Require multiline list items to have a dangling comma.',
		justifications: [
			'Makes adding and reordering items a whole lot less fiddly.',
			'Simplifies diffs and makes them clearer. See [the ESLint documentation](https://eslint.org/docs/rules/comma-dangle) for a good example of this.',
		],
		wrongExample: `
			const things = [
				'foo',
				'bar'
			];

			const data = {
				foo: 'bar',
				baz: 'bat'
			}
		`,
		rightExample: `
			const things = [
				'foo',
				'bar',
			];

			const data = {
				foo: 'bar',
				baz: 'bat',
			};
		`,
	},
	{ name: 'comma-spacing',
		definition: 'error',
		description: 'Space after commas, but not before.',
	},
	{ name: 'comma-style',
		definition: 'error',
		description: 'Require a comma after and on the same line as an array element, object property, or variable declaration',
	},
	{ name: 'curly',
		definition: 'error',
		description: 'Blocks require curly braces.',
		justifications: [
			'More consistent.',
			'Easier and [less error-prone](https://stackoverflow.com/a/4797368) to refactor a block later to include more lines.',
		],
		wrongExample: `
			if (foo) alert(foo);

			if (foo)
				alert(foo);
				alert(bar); // not inside the if block!
		`,
		rightExample: `
			if (foo) {
				alert(foo);
			}

			if (foo) {
				alert(foo);
			}
			alert(bar); // obviously not inside the if block.
		`,
	},
	{ name: 'eol-last',
		definition: 'error',
		description: 'Require a newline at the end of files.',
	},
	{ name: 'eqeqeq',
		definition: 'error',
		description: 'Always require `===` and `!==`, even for literals on both sides and even when `null` is involved.',
	},
	{ name: 'func-call-spacing',
		definition: ['error', 'never'],
		description: 'Disallow whitespace between a function call and its parens.',
	},
	{ name: 'no-mixed-spaces-and-tabs',
		definition: ['error', 'smart-tabs'],
		description: 'Require tabs for indentation, but spaces for alignment. Combining them in this specific way provides the best of both.',
		justifications: [
			'Tabs maintain their intended purpose of indentation, and nothing else.',
			'Code can always be viewed using the tab width the reader is most comfortable with.',
			'Lined-up code will stay lined-up no matter what.',
		],
		wrongExample: `
			if (foo) {
			/*ss*/alert(foo);
			}

			const data = {
			/*tab*/foo: 'barbaz',/*tab*/ // Some descriptive text
			/*tab*//*tab*//*tab*//*tab*/ // explaining this item
			/*tab*/quz: 'qux',
			};

		`,
		rightExample: `
			if (foo) {
			/*tab*/alert(foo);
			}

			const data = {
			/*tab*/foo: 'barbaz', // Some descriptive text
			/*tab*//*ssssssssss*/ // explaining this item
			/*tab*/quz: 'qux',
			};
		`,
	},
	{ name: 'no-trailing-spaces',
		definition: 'error',
		description: 'Do not allow trailing whitespace, even on blank lines.',
	},
	{ name: 'no-var',
		definition: 'error',
		description: 'Always require `let` or `const` as opposed to `var`.',
	},
	{ name: 'prefer-const',
		definition: 'error',
		description: 'Always prefer `const` as opposed to `let` when possible.',
	},
	{ name: 'semi',
		definition: 'error',
		description: 'Always require semicolons.',
	},
	{ name: 'space-before-blocks',
		definition: 'error',
		description: 'Require a space before the opening brace of a block.',
		wrongExample: `
			if (a){
				b();
			}

			function a(){}

			try {} catch(a){}

			class Foo{
				constructor(){}
			}
		`,
		rightExample: `
			if (a) {
				b();
			}

			function a() {}

			try {} catch(a) {}

			class Foo {
				constructor() {}
			}
		`,
	},
	{ name: 'space-before-function-paren',
		definition: ['error', {
			anonymous: 'always',
			named: 'never',
			asyncArrow: 'always',
		}],
		description: 'Require a space after anonymous and arrow function parens and disallow for named function parens.',
	},
	{ name: 'space-in-parens',
		definition: ['error', 'never'],
		description: 'Disallow spaces padding the insides of parens.',
	},
	{ name: 'space-unary-ops',
		definition: ['error', {
			words: true,
			nonwords: false,
			overrides: {
				'!': true,
				'!!': true,
			},
		}],
		description: 'Require a space after `!` and `!!`, but not other non-word unary operators.',
		justifications: [
			'It can be very easy to miss a `!` (and, to a lesser extent, `!!`) in front of a variable when scanning code. A space instantly makes things clearer at a glance.',
			'Other unary operators are much easier to see.',
		],
		wrongExample: `
			if (!foo) {
				badFooCount ++;
			}

			foo = !bar;
		`,
		rightExample: `
			if (! foo) {
				badFooCount++;
			}

			foo = ! bar;
		`,
	},
];
