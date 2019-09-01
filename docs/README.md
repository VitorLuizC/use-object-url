**[useObjectURL](README.md)**

[Globals](README.md)

## Index

### Functions

* [useObjectURL](README.md#const-useobjecturl)

## Functions

### `Const` useObjectURL

▸ **useObjectURL**(`object`: null | File | Blob | MediaSource): *null | string*

*Defined in [index.ts:9](https://github.com/VitorLuizC/use-object-url/blob/59debc4/src/index.ts#L9)*

React Hook that receives an instance of `File`, `Blob` or `MediaSource` and
creates an URL representing it. It releases URL when component unmount or
parameter changes.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`object` | null \| File \| Blob \| MediaSource | `null` or an instance of `File`, `Blob` or `MediaSource`.  |

**Returns:** *null | string*