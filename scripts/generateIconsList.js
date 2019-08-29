const path = require('path');
const fs = require('fs');

const location = path.join(__dirname, '..', 'node_modules', 'material-svg-react-icons', 'dist');

const iconList = fs.readdirSync(location).map(file => path.basename(file, '.js'));

console.log(JSON.stringify(iconList, null, 2));
