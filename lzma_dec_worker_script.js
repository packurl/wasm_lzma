importScripts('./lzma_dec_for_importScripts.js');
(async()=>{
  const fn=await unlzma;
  onmessage=async msg=>postMessage(fn(msg.data));
  postMessage('ready');
})();
