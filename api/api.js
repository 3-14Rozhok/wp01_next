import request from './request'

const api = {
    fetchData: {
        fetchPeople: async url => request.get(url).json(),
    },
}

export default api
