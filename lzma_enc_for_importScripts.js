const lzma=(async()=>{
  let wasm;
  const wbg={
    __wbindgen_init_externref_table: function(){
      const table=wasm.__wbindgen_export_0;
      const offset=table.grow(4);
      table.set(0);
      table.set(offset);
      table.set(offset+1,null);
      table.set(offset+2,true);
      table.set(offset+3,false);
    }
  };
  const {instance}=await WebAssembly.instantiateStreaming(await fetch('./lzma_enc.wasm',{cache: 'force-cache'}),{wbg});
  wasm=instance.exports;
  const malloc=wasm.__wbindgen_malloc;
  const free=wasm.__wbindgen_free;

  const presets=[18,20,21,22,22,23,23,24,25,26];

  return (it,level,dictionary_power_of_two)=>{
    if(level<0) level=0;
    if(level>9) level=9;
    if(dictionary_power_of_two<0) dictionary_power_of_two=0;
    if(dictionary_power_of_two>27) dictionary_power_of_two=27;
    if(dictionary_power_of_two===0) dictionary_power_of_two=presets[level];
    const n1=it.length;
    const p1=malloc(n1,1);
    new Uint8Array(wasm.memory.buffer).set(it,p1);
    const [p2,n2]=wasm.lzma(p1,n1,level,dictionary_power_of_two);
    const res=new Uint8Array(wasm.memory.buffer).subarray(p2,p2+n2).slice();
    free(p2,n2);
    return res;
  };
})();
