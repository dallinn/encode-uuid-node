const { uuidEncoder } = require('./dist/uuidEncoder');

// Example 1: Basic usage
const text = 'hello_world';
const uuid = uuidEncoder.encode(text);
console.log('Example 1:');
console.log(`Original text: ${text}`);
console.log(`Encoded UUID: ${uuid}`);
console.log(`Decoded text: ${uuidEncoder.decode(uuid)}`);
console.log('');

// Example 2: Maximum length text (21 characters)
const maxLengthText = 'exactly21000000000000';
const maxLengthUUID = uuidEncoder.encode(maxLengthText);
console.log('Example 2:');
console.log(`Original text: ${maxLengthText}`);
console.log(`Encoded UUID: ${maxLengthUUID}`);
console.log(`Decoded text: ${uuidEncoder.decode(maxLengthUUID)}`);
console.log('');

// Example 3: Short text
const shortText = 'test';
const shortUUID = uuidEncoder.encode(shortText);
console.log('Example 3:');
console.log(`Original text: ${shortText}`);
console.log(`Encoded UUID: ${shortUUID}`);
console.log(`Decoded text: ${uuidEncoder.decode(shortUUID)}`);
console.log('');

// Example 4: Numbers and underscores
const complexText = 'user_123_456';
const complexUUID = uuidEncoder.encode(complexText);
console.log('Example 4:');
console.log(`Original text: ${complexText}`);
console.log(`Encoded UUID: ${complexUUID}`);
console.log(`Decoded text: ${uuidEncoder.decode(complexUUID)}`); 