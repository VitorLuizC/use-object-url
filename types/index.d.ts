/**
 * React Hook that receives an instance of `File`, `Blob` or `MediaSource` and
 * creates an URL representing it. It releases URL when component unmount or
 * parameter changes.
 * @param object - `null` or an instance of `File`, `Blob` or `MediaSource`.
 */
declare const useObjectURL: (object: File | Blob | MediaSource | null) => string | null;
export default useObjectURL;
