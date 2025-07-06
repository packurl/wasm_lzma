const url=new URL('lzma_enc.wasm',import.meta.url);
await (await fetch(url)).arrayBuffer();
const worker=await new Promise(r=>{
  // For browsers that don't support type: module on workers (firefox < 114, safari < 15)
  // const worker=new Worker(new URL('./lzma_enc_worker_script.js',import.meta.url));
  const worker=new Worker(new URL('./lzma_enc_worker_script.mjs',import.meta.url),{type: 'module'});
  worker.onmessage=msg=>{
    if(msg.data==='ready'){
      worker.onmessage=null;
      r(worker);
    }
  };
});
/**
 * Compresses an array of bytes with LZMA.
 * @param {Uint8Array} bytes
 * @param {0|1|2|3|4|5|6|7|8|9} [level=9]
 * @param {0|18|20|21|22|23|24|25|26|27} [dictionary_power_of_two=0]
 * @return {Promise<Uint8Array>}
 */
const lzma=(bytes,level=9,dictionary_power_of_two=0)=>new Promise(r=>{
  worker.onmessage=msg=>{
    worker.onmessage=null;
    r(msg.data);
  }
  worker.postMessage({bytes,level,dictionary_power_of_two});
});

export {lzma};
export default lzma;
