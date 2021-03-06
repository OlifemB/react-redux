module.exports = {
  module: {
    rules: [{
      test: /\.(png|jpg|gif|woff|woff2)$/,
      use: [
        {
          loader: "file-loader",
          options: {}
        }
      ]
    },
    {
      test: /\.txt$/i,
      use: 'raw-loader',
    }]
  }
};