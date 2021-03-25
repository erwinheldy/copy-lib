# copy-lib
Simple libs dependencies copier

## Installation
`npm i copy-lib -g`

## Example
`copy-lib --data=libraries.json`
### libraries.json:
```
{
  "src": "node_modules",
  "dst": "dist/lib",
  "lib": {
    "masonry-layout/dist/*.js": "masonry-layout",
    "inputmask/dist/inputmask.js": "inputmask",
    "inputmask/dist/inputmask.min.js": "inputmask"
  }
}
```