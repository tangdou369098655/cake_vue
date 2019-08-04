export default ({
  development: {
    baseURL: 'http://localhost:3000'
  },
  production: {
    baseURL: 'https://lvwy.herokuapp.com/api'
  }
})[process.env.NODE_ENV]