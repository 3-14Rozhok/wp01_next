import ky from 'ky-universal'

const api = async url => {
    try {
        const res = await ky.get(process.env.SERVER_API + url)
        const data = await res.json()
        return data.results
    } catch (error) {
        console.log(error)
        return error
    }
}

export default api
