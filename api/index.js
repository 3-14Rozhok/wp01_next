import ky from 'ky-universal'

const get = async (url, headers) => {
    try {
        const requestUrl = process.env.SERVER_API + url
        const data = await ky.get(requestUrl, { headers: headers }).json()
        return data.results
    } catch (error) {
        console.log(error)
    }
}

const post = async (url, json, headers) => {
    try {
        const requestUrl = url
        const data = await ky.post(requestUrl, { json: json, headers: headers }).json()
        return data
    } catch (error) {
        console.log(error)
    }
}

module.exports = { get, post }
