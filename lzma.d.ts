/* tslint:disable */
/* eslint-disable */
declare module 'lzma' {
  export type CompressionLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  export type DictionaryPowerOfTwo = 0 | 18 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27;
  /**
   * Compresses an array of bytes with LZMA.
   * @param {Uint8Array} bytes
   * @param {0|1|2|3|4|5|6|7|8|9} [level=9]
   * @param {0|18|20|21|22|23|24|25|26|27} [dictionary_power_of_two=0]
   * @return {Uint8Array}
   */
  export function lzma(bytes: Uint8Array, level: CompressionLevel, dictionary_power_of_two: DictionaryPowerOfTwo): Uint8Array;

  /**
   * Decompresses an array of bytes compressed with LZMA.
   * @param {Uint8Array} bytes
   * @return {Uint8Array}
   */
  export function unlzma(bytes: Uint8Array): Uint8Array;
}
