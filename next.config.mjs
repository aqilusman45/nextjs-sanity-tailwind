/** @type {import('next').NextConfig} */

const config = {
  webpack: (config) => {
    // Add rule for SVG files
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader'],
    })

    return config
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    formats: ['image/webp'],
  },
  rewrites: async () => [
    {
      source: '/storybook',
      destination: '/storybook-static/index.html',
    },
  ],
  /*
   * Fix Error: EMFILE: too many open files
   * see https://github.com/phosphor-icons/react/issues/45#issuecomment-1773840947
   */
  modularizeImports: {
    '@phosphor-icons/react': {
      transform: '@phosphor-icons/react/dist/ssr/{{member}}',
      skipDefaultConversion: true,
    },
  },
}

export default config
