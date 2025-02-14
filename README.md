# encode-uuid

A utility to encode text strings into UUID format and decode UUIDs back to text.

## Features

- Encode text strings (up to 21 characters) into UUID format
- Decode UUIDs back to their original text
- Supports characters: a-z, 0-9, and underscore (_)
- TypeScript support

## Installation

```bash
npm install encode-uuid
```

## Usage

```typescript
import { textToUUID, UUIDtoText } from 'encode-uuid';

// Encode a string to UUID
const uuid = textToUUID('testtextvalue');
console.log(uuid); // Outputs a valid UUID

// Decode a UUID back to string
const originalText = UUIDtoText(uuid);
console.log(originalText); // Outputs: 'testtextvalue'
```

## API

### `textToUUID(text: string): string`

Converts a text string into a UUID format.

- `text`: The text string to encode (max 21 characters)
- Returns: A valid UUID string

### `UUIDtoText(uuid: string): string`

Converts a UUID back to its original text string.

- `uuid`: A valid UUID string
- Returns: The original text string

## Limitations

- Maximum input length: 21 characters
- Only supports characters: a-z, 0-9, and underscore (_)
- Case sensitive

## License

ISC
