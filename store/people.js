import api from '../api'

const people = {
    state: {
        data: [0],
    },
    reducers: {
        setPeople(state, data) {
            return { ...state, data }
        },
    },
    effects: dispatch => ({
        async getPeople(payload, rootState) {
            try {
                const data = await api.get('people/?page=2').json()
                await dispatch.people.setPeople(data.results)
            } catch (error) {
                console.log(error)
            }
        },
    }),
}

export default people
