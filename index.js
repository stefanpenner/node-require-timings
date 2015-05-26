var fs = require('fs');
require.extensions['.js'] = function(module, filename) {
  var start = new Date();
  var content = fs.readFileSync(filename, 'utf8').toString();
  var mod = module._compile(content, filename);
  console.log(new Date() - start, filename)
  return mod;
};


