var through  = require('through2');
var path = require('path');
var code = "(function (factory) {"+
    "if (typeof module === 'object' && module.exports){"+
        "module.exports = factory;"+
    "}else{"+
        "factory(jQuery);"+
    "}"+
"}(function(){"+
	"${code_here}"+
"}));";

module.exports = function(options){
	var files = options.files;
	var process_path = process.cwd();
	return function (filename) {
	    return through(function (buf, enc, next) {
	    	var content = buf.toString('utf8');
	    	var flag = false;
	    	files.forEach(function(file){
	    		if(path.resolve(process_path,file) === filename){
	    			flag = true;
	    		}
	    	});
	    	if (flag){
	    		console.log("true");
	    		content = code.replace("${code_here}",content);
	    	}
	        this.push(content);
	        next();
	    });
	};
};
