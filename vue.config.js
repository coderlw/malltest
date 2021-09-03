const path = require('path');
function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    /* chainWebpack: (config) => {
        config.resolve.alias
            .set('assets', resolve('src/assets'))
            .set('components', resolve('src/components'))
            .set('network', resolve('src/network'))
            .set('views', resolve('src/views')) */

    configureWebpack: {
        resolve: {
            alias: {
                // '@': 'src'
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
            }
        }
    }
}