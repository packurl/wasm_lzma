importScripts('./lzma_for_importScripts.js');
(async()=>{
  const {lzma,unlzma}=await fns;
  onmessage=async msg=>{
    postMessage(msg.data.level===undefined?unlzma(msg.data):lzma(msg.data.bytes,msg.data.level,msg.data.dictionary_power_of_two));
  }
  postMessage('ready');
})();
