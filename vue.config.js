module.exports = {
    devServer: {
        proxy: {
            '/medilog': {
                target: 'http://localhost:8081',
                changeOrigin: true
            }
        }
    },
    transpileDependencies: [
        'vuetify'
    ]
}