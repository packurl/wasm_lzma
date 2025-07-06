import {unlzma} from "./lzma_dec.mjs";

onmessage=async({data})=>postMessage(unlzma(data));
postMessage('ready');
