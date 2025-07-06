[WASM](https://developer.mozilla.org/en-US/docs/WebAssembly) libs
for LZMA compression and decompression.

This is a simple wrapper on top of
the [lzma-rust2](https://github.com/hasenbanck/lzma-rust2) [rust](https://www.rust-lang.org/) [crate](https://crates.io/crates/lzma-rust2).

<br>

Compilation:

`wasm-pack build --target web`

<br>

Dependencies:

- [lzma-rust2](https://github.com/hasenbanck/lzma-rust2) ([Apache License](https://github.com/hasenbanck/sevenz-rust2/blob/main/LICENSE))
- [wasm-bindgen](https://github.com/rustwasm/wasm-bindgen) ([MIT License](https://github.com/rustwasm/wasm-bindgen/blob/main/LICENSE-MIT))

