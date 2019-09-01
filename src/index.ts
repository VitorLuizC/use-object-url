import { useEffect, useState } from 'react';

/**
 * React Hook that receives an instance of `File`, `Blob` or `MediaSource` and
 * creates an URL representing it. It releases URL when component unmount or
 * parameter changes.
 * @param object - `null` or an instance of `File`, `Blob` or `MediaSource`.
 */
const useObjectURL = (object: null | File | Blob | MediaSource) => {
  const [objectURL, setObjectURL] = useState<null | string>(null);

  useEffect(() => {
    if (!object) {
      return;
    }

    const objectURL = URL.createObjectURL(object);
    setObjectURL(objectURL);
    return () => {
      URL.revokeObjectURL(objectURL);
      setObjectURL(null);
    };
  }, [object]);

  return objectURL;
};

export default useObjectURL;
