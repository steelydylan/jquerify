var through  = require('through2');
var code = "(function (factory) {"+
    "if (typeof module === 'object' && module.exports){"+
        "module.exports = factory;"+
    "}else{"+
        "factory(jQuery);"+
    "}"+
"}(function(){"+
	"${code_here}"+
"}));";
 
module.exports = function (file) {
    return through(function (buf, enc, next) {
    	var content = buf.toString('utf8');
    	if (content.indexOf("module.exports") == -1 && (content.indexOf("$.fn") != -1 || content.indexOf("jQuery") != -1)){
    		content = code.replace("${code_here}",content);
    	}
        this.push(content);
        next();
    });
};