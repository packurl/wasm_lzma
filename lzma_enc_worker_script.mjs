import {lzma} from "./lzma_enc.mjs";

onmessage=async({data: {bytes,level,dictionary_power_of_two}})=>postMessage(lzma(bytes,level,dictionary_power_of_two));
postMessage('ready');
