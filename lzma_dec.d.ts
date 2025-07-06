/* tslint:disable */
/* eslint-disable */
declare module 'lzma_enc' {
  /**
   * Decompresses an array of bytes compressed with LZMA2.
   * @param {Uint8Array} bytes
   * @return {Uint8Array}
   */
  export function unlzma2(bytes: Uint8Array): Uint8Array;

  export default unlzma2;
}
