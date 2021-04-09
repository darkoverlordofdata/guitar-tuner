# guitar-tuner

Based on techniques discussed in [WebAssembly/Rust Tutorial: Pitch-perfect Audio Processing](https://www.toptal.com/webassembly/webassembly-rust-tutorial-web-audio) at the Toptal Engineering Blog.

Guitar tuner written in rust, compiled to wasm for use in javascript. 

UI is created with [canvas gauges](https://canvas-gauges.com/)

## Install
``` sh
git clone git@github.com:darkoverlordofdata/guitar-tuner.git
cd guitar-tuner/wasm-audio/
wasm-pack build --target web
cd ..
cp -R ./wasm-audio/pkg ./public/wasm-audio
yarn
yarn start
```

* * *

