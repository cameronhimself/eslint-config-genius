/* eslint no-console: ["off"]*/
/* global console: false */
import fs from 'fs';
import jsonfile from 'jsonfile';
import rules from './src/rules';
import {
	codeBlock,
	ruleHeader,
	ruleDefinition,
	ruleDescription,
	ruleJustifications,
	ruleExample,
} from './markdownBuilders';

const eslintBase = {
	extends: 'eslint:recommended',
	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'module',
	},
};

const eslint = Object.assign({}, eslintBase, {
	rules: rules.reduce((acc, r) => {
		acc[r.name] = r.definition;
		return acc;
	}, {}),
});

const readmeRules = rules.reduce((acc, rule) => {
	acc.push(ruleHeader(rule.name));
	acc.push(ruleDefinition(rule.definition));
	rule.description && acc.push(ruleDescription(rule.description));
	rule.justifications && acc.push(ruleJustifications(rule.justifications));
	rule.wrongExample && acc.push(ruleExample(rule.wrongExample, false));
	rule.rightExample && acc.push(ruleExample(rule.rightExample, true));
	return acc;
}, []);

const readme = [
	'# ESLint Genius',
	'**An ESLint config for geniuses**.',
	'But you can continue to be standard if you want.',
	'This is a combination of best practices, styles that have objective benefits, and my own (let\'s face it, correct) opinions. I try to provide my rationale for the more contentious decisions.',
	'## Base config',
	codeBlock(JSON.stringify(eslintBase, null, 2)),
].concat(readmeRules);

fs.writeFile('README.md', readme.join('\n\n'), err =>
	err && console.error(err)
);
jsonfile.writeFile('rules.js', eslint, {spaces: 2}, err =>
	err && console.error(err)
);
jsonfile.writeFile('.eslintrc', eslint, {spaces: 2}, err =>
	err && console.error(err)
);
