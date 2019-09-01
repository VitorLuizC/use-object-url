# useObjectURL

[![Build Status](https://travis-ci.org/VitorLuizC/use-object-url.svg?branch=master)](https://travis-ci.org/VitorLuizC/use-object-url)
[![License](https://badgen.net/github/license/VitorLuizC/use-object-url)](./LICENSE)
[![Library minified size](https://badgen.net/bundlephobia/min/use-object-url)](https://bundlephobia.com/result?p=use-object-url)
[![Library minified + gzipped size](https://badgen.net/bundlephobia/minzip/use-object-url)](https://bundlephobia.com/result?p=use-object-url)

React Hook that receives an instance of `File`, `Blob` or `MediaSource` and creates an URL representing it. It releases URL when component unmount or parameter changes.

```js
import useObjectURL from 'use-object-url';

const DownloadFileLink = ({ file, filename }) => {
  const fileURL = useObjectURL(file);

  return (
    <a href={fileURL} target="_blank" download={filename}>
      Download
    </a>
  );
};
```

## Installation

This library is published in the NPM registry and can be installed using any compatible package manager.

```sh
npm install use-object-url --save

# For Yarn, use the command below.
yarn add use-object-url
```

### Installation from CDN

This module has an UMD bundle available through JSDelivr and Unpkg CDNs.

```html
<!-- For UNPKG use the code below. -->
<script src="https://unpkg.com/use-object-url"></script>

<!-- For JSDelivr use the code below. -->
<script src="https://cdn.jsdelivr.net/npm/use-object-url"></script>

<script>
  function PreviewImage(props) {
    // UMD module is exposed through the "useObjectURL" function.
    var imageURL = useObjectURL(props.uploadedImage);

    return React.createElement('img', {
      src: imageURL,
      alt: 'Uploaded image',
      title: 'Preview of uploaded image.'
    });
  }
</script>
```

## Documentation

[Documentation generated from source files by Typedoc](./docs/README.md).

## License

Released under [MIT License](./LICENSE).
