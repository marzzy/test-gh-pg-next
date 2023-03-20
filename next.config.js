const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  basePath: isProd ? '/test-gh-pg-next' : '',
  images: {
    unoptimized: true,
  },
}
