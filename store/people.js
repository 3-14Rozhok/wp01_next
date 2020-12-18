const people = {
    state: { data: [0] },
    reducers: {
        setPeople(state, data) {
            return { ...state, data }
        },
    },
    effects: null,
}

export default people
