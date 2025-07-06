use lzma_rust2::{LZMA2Options,LZMAWriter};
use lzma_rust2::LZMAReader;
use std::io::Read;
use std::io::Write;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn unlzma(data: &[u8]) -> Vec<u8> {
    let mut out = Vec::with_capacity(data.len() + 64);
    let mut reader = LZMAReader::new_mem_limit(data, u32::MAX, None).unwrap();
    reader.read_to_end(&mut out).unwrap();
    out
}

#[wasm_bindgen]
pub fn lzma(data: &[u8], quality: u8, dictionary_size_power_of_two: u32) -> Vec<u8> {
    let mut out = Vec::with_capacity(data.len() + 64);
    let mut params = LZMA2Options::with_preset(quality as u32);
    params.dict_size = 1 << dictionary_size_power_of_two;
    let mut writer =
        LZMAWriter::new(&mut out, &params, true, false, Some(data.len() as u64)).unwrap();
    writer.write_all(data).unwrap();
    writer.finish().unwrap();
    out
}
