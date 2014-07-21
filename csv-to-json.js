var fs = require('fs');
var querystring = require('querystring');
var _ = require('underscore');

var fileInfoTesting = 'name, age, city\n Rene, 35, Vancouver\n Thomas, 29, Portland\n Lexi, 28, Seattle';

var inputText = fs.readFileSync(process.argv[2], 'utf-8');

var splitByLines = inputText.split('\n');

splitByLines[0] = splitByLines[0].split(',');
splitByLines[1] = splitByLines[1].split(',');
splitByLines[2] = splitByLines[2].split(',');
splitByLines[3] = splitByLines[3].split(',');

var jsonList = [];
for (var i=1; i < splitByLines.length; i++) {
	var newObject = _.object(splitByLines[0], splitByLines[i]);
	jsonList.push(newObject);
}

var newFile = fs.writeFileSync(process.argv[3], JSON.stringify(jsonList, null, ' '), 'utf-8');


