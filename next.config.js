/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_API_BASE_URL: process.env.API_BASE_URL,
    NEXT_PUBLIC_GOOGLE_LOGIN_URL: process.env.GOOGLE_LOGIN_URL,
    NEXT_PUBLIC_WALLET_API_KEY: process.env.WALLET_API_KEY,
    NEXT_PUBLIC_GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID,
    NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID: process.env.WALLET_CONNECT_PROJECT_ID
  },
  images: {
    domains: [
      "test.com"
    ]
  },
  webpack: (config, { webpack }) => {
    const prod = process.env.NODE_ENV === 'development';
    const newConfig = {
      ...config,
      mode: prod ? 'production' : 'development',
      module: { 
        rules: [
          ...config.module.rules,
          {
            test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
            use: {
              loader: 'url-loader',
              options: {
                limit: 100000,
                name: '[name].[ext]',
              },
            },
          },
        ],
      },
      plugins: [...config.plugins, new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /^\.\/ko$/)],
    };

    if (prod) {
      newConfig.devtool = 'hidden-source-map';
    }
    return newConfig;
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/challenge",
        permanent: false
      },
    ]
  }
};

module.exports = nextConfig;
