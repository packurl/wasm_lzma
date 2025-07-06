import {lzma,unlzma} from "./lzma.mjs";

onmessage=async({data})=>postMessage(data.level===undefined?unlzma(data):lzma(data.bytes,data.level,data.dictionary_power_of_two));
postMessage('ready');
