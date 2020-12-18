const creds = {
    state: {
        data: [],
    },
    reducers: {
        setCreds(state, data) {
            return { ...state, data }
        },
    },
    effects: null,
}

export default creds
