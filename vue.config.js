module.exports = {
    devServer: {
        proxy: {
            '/medilog': {
                target: 'http://localhost:8080',
                changeOrigin: true
            }
        }
    },
    transpileDependencies: [
        'vuetify'
    ]
}