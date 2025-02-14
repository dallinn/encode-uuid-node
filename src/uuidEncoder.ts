// mapping for characters to their 6-bit values
const CHAR_MAP = 'abcdefghijklmnopqrstuvwxyz0123456789_';
const BITS_PER_CHAR = 6;
const UUID_LENGTH = 32;
const PADDING_CHAR_INDEX = 63; // maximum value for 6 bits
const MAX_TEXT_LENGTH = Math.floor(128 / BITS_PER_CHAR); // max number of chars that fit into 128 bits

export const uuidEncoder = {
  /**
   * Encodes a text string into a UUID format
   * @param text The text string to encode (max 21 characters)
   * @returns A valid UUID string
   */
  encode(text: string): string {
    let bitString = '';

    // pad the text with the padding character to reach MAX_TEXT_LENGTH
    for (let i = 0; i < MAX_TEXT_LENGTH; i++) {
      let charIndex;
      if (i < text.length) {
        charIndex = CHAR_MAP.indexOf(text[i]);
        if (charIndex === -1) {
          throw new Error(`ERROR: invalid character in text: ${text[i]}`);
        }
      } else {
        charIndex = PADDING_CHAR_INDEX;
      }
      const binaryString = charIndex.toString(2).padStart(BITS_PER_CHAR, '0');
      bitString += binaryString;
    }

    // pad the bitString to 128 bits if necessary
    if (bitString.length < 128) {
      bitString = bitString.padEnd(128, '0');
    }

    // convert to uuid format
    const uuid = [];
    for (let i = 0; i < bitString.length; i += 4) {
      // convert each 4-bit segment to a hex digit
      const segment = bitString.slice(i, i + 4);
      uuid.push(parseInt(segment, 2).toString(16));
    }

    // add hyphens for valid uuid format
    return [
      uuid.slice(0, 8).join(''),
      uuid.slice(8, 12).join(''),
      uuid.slice(12, 16).join(''),
      uuid.slice(16, 20).join(''),
      uuid.slice(20).join(''),
    ].join('-');
  },

  /**
   * Decodes a UUID back to its original text string
   * @param uuid A valid UUID string
   * @returns The original text string
   */
  decode(uuid: string): string {
    const cleanUUID = uuid.replace(/-/g, '');

    if (cleanUUID.length !== UUID_LENGTH) {
      throw new Error('ERROR: invalid UUID length');
    }

    // convert each hex char back to a binary representation
    let bitString = '';
    for (let i = 0; i < cleanUUID.length; i++) {
      const hexValue = parseInt(cleanUUID[i], 16);
      const binaryString = hexValue.toString(2).padStart(4, '0');
      bitString += binaryString;
    }

    // convert each 6 bits into a character until padding character is found
    const text = [];
    for (let offset = 0; offset < bitString.length; offset += BITS_PER_CHAR) {
      const segment = bitString.slice(offset, offset + BITS_PER_CHAR);
      if (segment.length < BITS_PER_CHAR) {
        break;
      }

      const charIndex = parseInt(segment, 2);

      if (charIndex === PADDING_CHAR_INDEX) {
        break; // found the padding char
      }

      if (charIndex >= CHAR_MAP.length) {
        throw new Error(`ERROR: invalid charIndex: ${charIndex}`);
      }

      text.push(CHAR_MAP[charIndex]);
    }

    return text.join('');
  }
};
