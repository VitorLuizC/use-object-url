/*!
 * use-object-url v1.0.0
 * (c) Vitor Luiz Cavalcanti <vitorluizc@outlook.com> (https://vitorluizc.github.io)
 * Released under the MIT License.
 */
'use strict';

var react = require('react');

/**
 * React Hook that receives an instance of `File`, `Blob` or `MediaSource` and
 * creates an URL representing it. It releases URL when component unmount or
 * parameter changes.
 * @param object - `null` or an instance of `File`, `Blob` or `MediaSource`.
 */

var useObjectURL = function (object) {
  var ref = react.useState(null);
  var objectURL = ref[0];
  var setObjectURL = ref[1];
  react.useEffect(function () {
    if (!object) {
      return;
    }

    var objectURL = URL.createObjectURL(object);
    setObjectURL(objectURL);
    return function () {
      URL.revokeObjectURL(objectURL);
      setObjectURL(null);
    };
  }, [object]);
  return objectURL;
};

module.exports = useObjectURL;
