importScripts('./lzma_enc_for_importScripts.js');
(async()=>{
  const fn=await lzma;
  onmessage=async msg=>{
    postMessage(fn(msg.data.bytes,msg.data.level,msg.data.dictionary_power_of_two));
  }
  postMessage('ready');
})();
