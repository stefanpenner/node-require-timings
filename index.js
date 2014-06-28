var fs = require('fs');
require.extensions['.js'] = function(module, filename) {
  console.time(filename);
  var content = fs.readFileSync(filename, 'utf8').toString();
  var mod = module._compile(content, filename);

  console.timeEnd(filename);
  return mod;
};


