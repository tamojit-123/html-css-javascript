var path =   require('path');
const { clearScreenDown } = require('readline');
module.exports = 
{
    entry: './js/welcome.js',
    output : 
    {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'sample')
    }
}
