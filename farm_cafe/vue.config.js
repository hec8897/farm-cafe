module.exports = {
  "devServer": {
    overlay: false,
    "proxy": {
      "/": {
        "target": "http://localhost:8080",
        "changeOrigin": true
      }
    }
  },
  "publicPath": "./",
  "outputDir": "../server/public",
  "transpileDependencies": [
    "vuetify"
  ]
}