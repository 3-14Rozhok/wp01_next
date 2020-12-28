import { connect } from 'react-redux'

import MainBlock from './MainBlock'

const mapState = state => ({
    people: state.people,
    theme: state.theme,
})

const mapDispatch = dispatch => ({
    getPeople: () => dispatch.people.getPeople(),
    setTheme: theme => dispatch.theme.setTheme(theme),
})

export default connect(mapState, mapDispatch)(MainBlock)
