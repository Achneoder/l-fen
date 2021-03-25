run bootloader to start a single function

`node ./lib/service/bootloader.js --event='{\"bucket\": \"user\", \"name\": \"111/b.json\"}' --path="../../../path/to/function/index.js" --entryPoint="handleEvent" --name="name-of-the-function"`