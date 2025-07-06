/* tslint:disable */
/* eslint-disable */
declare module 'lzma_dec_worker' {
  /**
   * Decompresses an array of bytes compressed with LZMA.
   * @param {Uint8Array} bytes
   * @return {Promise<Uint8Array>}
   */
  export function unlzma(bytes: Uint8Array): Promise<Uint8Array>;

  export default unlzma;
}
