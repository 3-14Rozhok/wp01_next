import ky from 'ky-universal'

const api = ky.extend({
    prefixUrl: process.env.SERVER_API,
})

export default api
