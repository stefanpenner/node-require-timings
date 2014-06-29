require-timings
---------------

Tiny module to help track down pesty slow requires. For some classes of
application, like a commandline tool, initial boot is quite important. This
module makes it quite simple to roughly see which modules requires are slowing boot.


usage:

```
npm install --save node-require-timings
```

then in your entry file

```js
require('node-require-timings');
```

thats it, now your tool will emit timings for each require.

