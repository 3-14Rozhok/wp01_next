import ky from 'ky-universal'

const request = ky.extend({
    prefixUrl: process.env.SERVER_API,
})

export default request
