function codeBlock(content, lang='javascript') {
	return `\`\`\`${lang}\n${content}\n\`\`\``;
}

function ruleHeader(name) {
	return `### [\`${name}\`](https://eslint.org/docs/rules/${name})`;
}

function ruleDefinition(definition) {
	return codeBlock(JSON.stringify(definition, null, 2));
}

function ruleDescription(description) {
	return description;
}

function ruleJustifications(justifications) {
	return justifications.map(j => `- ${j}`).join('\n');
}

function ruleExample(exampleCode, correct) {
	let firstLineIndent;
	const cleanedCode = exampleCode
		.replace(/^\n+|\n+$/g, '') // Left trim newlines
		.split('\n') // Split into lines
		.map(line => { // Remove extra indentation, using the first line as a guide
			if (firstLineIndent === undefined) {
				firstLineIndent = line.match(/^\s*/)[0];
			}
			if (firstLineIndent) {
				return line.replace(new RegExp(`^(${firstLineIndent}){1}`), '');
			}
			return line;
		})
		.join('\n') // Back into a string
		.trim(); // Trim trailing whitespace
	return `#### ${correct ? 'Right' : 'Wrong'}\n${codeBlock(cleanedCode)}`;
}

export {
	codeBlock,
	ruleHeader,
	ruleDefinition,
	ruleDescription,
	ruleJustifications,
	ruleExample,
};
