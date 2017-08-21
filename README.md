# ESLint Genius

**An ESLint config for geniuses**.

But you can continue to be standard if you want.

This is a combination of best practices, styles that have objective benefits, and my own (let's face it, correct) opinions. I try to provide my rationale for the more contentious decisions.

## Base config

```javascript
{
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module"
  }
}
```

## Rules

### [`camelcase`](https://eslint.org/docs/rules/camelcase)

```javascript
"error"
```

Require `camelCase` for variables and object properties.

### [`comma-dangle`](https://eslint.org/docs/rules/comma-dangle)

```javascript
[
  "error",
  "always-multiline"
]
```

Require multiline list items to have a dangling comma.

- Makes adding and reordering items a whole lot less fiddly.
- Simplifies diffs and makes them clearer. See [the ESLint documentation](https://eslint.org/docs/rules/comma-dangle) for a good example of this.

#### Wrong
```javascript
const things = [
	'foo',
	'bar'
];

const data = {
	foo: 'bar',
	baz: 'bat'
}
```

#### Right
```javascript
const things = [
	'foo',
	'bar',
];

const data = {
	foo: 'bar',
	baz: 'bat',
};
```

### [`comma-spacing`](https://eslint.org/docs/rules/comma-spacing)

```javascript
"error"
```

Space after commas, but not before.

### [`comma-style`](https://eslint.org/docs/rules/comma-style)

```javascript
"error"
```

Require a comma after and on the same line as an array element, object property, or variable declaration

### [`curly`](https://eslint.org/docs/rules/curly)

```javascript
"error"
```

Blocks require curly braces.

- More consistent.
- Easier and [less error-prone](https://stackoverflow.com/a/4797368) to refactor a block later to include more lines.

#### Wrong
```javascript
if (foo) alert(foo);

if (foo)
	alert(foo);
	alert(bar); // not inside the if block!
```

#### Right
```javascript
if (foo) {
	alert(foo);
}

if (foo) {
	alert(foo);
}
alert(bar); // obviously not inside the if block.
```

### [`eol-last`](https://eslint.org/docs/rules/eol-last)

```javascript
"error"
```

Require a newline at the end of files.

### [`eqeqeq`](https://eslint.org/docs/rules/eqeqeq)

```javascript
"error"
```

Always require `===` and `!==`, even for literals on both sides and even when `null` is involved.

### [`func-call-spacing`](https://eslint.org/docs/rules/func-call-spacing)

```javascript
[
  "error",
  "never"
]
```

Disallow whitespace between a function call and its parens.

### [`no-mixed-spaces-and-tabs`](https://eslint.org/docs/rules/no-mixed-spaces-and-tabs)

```javascript
[
  "error",
  "smart-tabs"
]
```

Require tabs for indentation, but spaces for alignment. Combining them in this specific way provides the best of both.

- Tabs maintain their intended purpose of indentation, and nothing else.
- Code can always be viewed using the tab width the reader is most comfortable with.
- Lined-up code will stay lined-up no matter what.

#### Wrong
```javascript
if (foo) {
/*ss*/alert(foo);
}

const data = {
/*tab*/foo: 'barbaz',/*tab*/ // Some descriptive text
/*tab*//*tab*//*tab*//*tab*/ // explaining this item
/*tab*/quz: 'qux',
};
```

#### Right
```javascript
if (foo) {
/*tab*/alert(foo);
}

const data = {
/*tab*/foo: 'barbaz', // Some descriptive text
/*tab*//*ssssssssss*/ // explaining this item
/*tab*/quz: 'qux',
};
```

### [`no-trailing-spaces`](https://eslint.org/docs/rules/no-trailing-spaces)

```javascript
"error"
```

Do not allow trailing whitespace, even on blank lines.

### [`no-var`](https://eslint.org/docs/rules/no-var)

```javascript
"error"
```

Always require `let` or `const` as opposed to `var`.

### [`prefer-const`](https://eslint.org/docs/rules/prefer-const)

```javascript
"error"
```

Always prefer `const` as opposed to `let` when possible.

### [`semi`](https://eslint.org/docs/rules/semi)

```javascript
"error"
```

Always require semicolons.

### [`space-before-blocks`](https://eslint.org/docs/rules/space-before-blocks)

```javascript
"error"
```

Require a space before the opening brace of a block.

#### Wrong
```javascript
if (a){
	b();
}

function a(){}

try {} catch(a){}

class Foo{
	constructor(){}
}
```

#### Right
```javascript
if (a) {
	b();
}

function a() {}

try {} catch(a) {}

class Foo {
	constructor() {}
}
```

### [`space-before-function-paren`](https://eslint.org/docs/rules/space-before-function-paren)

```javascript
[
  "error",
  {
    "anonymous": "always",
    "named": "never",
    "asyncArrow": "always"
  }
]
```

Require a space after anonymous and arrow function parens and disallow for named function parens.

### [`space-in-parens`](https://eslint.org/docs/rules/space-in-parens)

```javascript
[
  "error",
  "never"
]
```

Disallow spaces padding the insides of parens.

### [`space-unary-ops`](https://eslint.org/docs/rules/space-unary-ops)

```javascript
[
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
```

Require a space after `!` and `!!`, but not other non-word unary operators.

- It can be very easy to miss a `!` (and, to a lesser extent, `!!`) in front of a variable when scanning code. A space instantly makes things clearer at a glance.
- Other unary operators are much easier to see.

#### Wrong
```javascript
if (!foo) {
	badFooCount ++;
}

foo = !bar;
```

#### Right
```javascript
if (! foo) {
	badFooCount++;
}

foo = ! bar;
```
