import api from '../api'

const people = {
    state: {
        data: [],
    },
    reducers: {
        setPeople(state, data) {
            return { ...state, data }
        },
    },
    effects: dispatch => ({
        async getPeople(payload, rootState) {
            try {
                const data = await api.fetchData.fetchPeople('people/?page=2')
                await dispatch.people.setPeople(data.results)
            } catch (error) {
                console.log(error)
            }
        },
    }),
}

export default people
