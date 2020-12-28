const theme = {
    state: {
        data: 'default',
    },
    reducers: {
        setTheme(state, data) {
            return { ...state, data: `${data}` }
        },
    },
    effects: null,
}

export default theme
