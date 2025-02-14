import { textToUUID, UUIDtoText } from './src/encodeUUID';

// Example 1: Basic usage
const text: string = 'hello_world';
const uuid: string = textToUUID(text);
console.log('Example 1:');
console.log(`Original text: ${text}`);
console.log(`Encoded UUID: ${uuid}`);
console.log(`Decoded text: ${UUIDtoText(uuid)}`);
console.log('');

// Example 2: Maximum length text (21 characters)
const maxLengthText: string = 'exactly21000000000000';
const maxLengthUUID: string = textToUUID(maxLengthText);
console.log('Example 2:');
console.log(`Original text: ${maxLengthText}`);
console.log(`Encoded UUID: ${maxLengthUUID}`);
console.log(`Decoded text: ${UUIDtoText(maxLengthUUID)}`);
console.log('');

// Example 3: Short text
const shortText: string = 'test';
const shortUUID: string = textToUUID(shortText);
console.log('Example 3:');
console.log(`Original text: ${shortText}`);
console.log(`Encoded UUID: ${shortUUID}`);
console.log(`Decoded text: ${UUIDtoText(shortUUID)}`);
console.log('');

// Example 4: Numbers and underscores
const complexText: string = 'user_123_456';
const complexUUID: string = textToUUID(complexText);
console.log('Example 4:');
console.log(`Original text: ${complexText}`);
console.log(`Encoded UUID: ${complexUUID}`);
console.log(`Decoded text: ${UUIDtoText(complexUUID)}`); 