import { connect } from 'react-redux'
import MainBlock from './MainBlock'

const index = ({ people, getPeople }) => {
    return <MainBlock people={people} getPeople={getPeople} />
}

const mapState = state => ({
    people: state.people,
})

const mapDispatch = dispatch => ({
    getPeople: () => dispatch.people.getPeople(),
})

export default connect(mapState, mapDispatch)(index)
