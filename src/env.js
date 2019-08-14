export default ({
  development: {
    baseURL: 'http://localhost:3000/api'
  },
  production: {
    baseURL: 'http://localhost:3000/api'
  }
})[process.env.NODE_ENV]