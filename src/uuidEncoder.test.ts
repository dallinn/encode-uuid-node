import { expect } from 'chai';
import { uuidEncoder } from './uuidEncoder';

describe('uuidEncoder', function () {
  const passingTexts = [
    'testtextvalue',
    'short',
    'exactly16charsss',
    'text0',
    'test0000',
    '000test000',
    '123456789',
    'exactly160000000',
    '1',
    'a_b_c_d_e_f',
    'exactly1700000000',
    'exactly18000000000',
    'exactly190000000000',
    'exactly2000000000000',
    'exactly21000000000000',
    'exactly21111111111111',
    '21111111111111exactly',
  ];

  const failingTexts = [
    'exactly220000000000000',
    'exactly2300000000000000',
  ];

  passingTexts.forEach((testText) => {
    it(`should correctly encode and decode the text "${testText}"`, function () {
      try {
        console.debug(`Test text:\t ${testText}\t (should pass)`);
        const uuid = uuidEncoder.encode(testText);
        const decodedText = uuidEncoder.decode(uuid);
        console.debug(`Encoded UUID:\t ${uuid}`);
        console.debug(`Decoded text:\t ${decodedText}`);

        expect(decodedText).to.equal(testText, `Text "${testText}" did not match after encoding and decoding`);

        expect(uuid.length).to.equal(36, `UUID length for "${testText}" is not 36`);
      } catch (error) {
        throw new Error(`Test failed for text "${testText}": ${error}`);
      }
    });
  });

  failingTexts.forEach((testText) => {
    it(`should fail to correctly decode the text "${testText}"`, function () {
      try {
        console.debug(`Test text:\t ${testText}\t (should fail)`);
        const uuid = uuidEncoder.encode(testText);
        const decodedText = uuidEncoder.decode(uuid);
        console.debug(`Encoded UUID:\t ${uuid}`);
        console.debug(`Decoded text:\t ${decodedText}`);

        expect(decodedText).to.not.equal(testText, `Expected text "${testText}" to fail but it passed`);
      } catch (error) {
        throw new Error(`Test failed for text "${testText}": ${error}`);
      }
    });
  });
});
