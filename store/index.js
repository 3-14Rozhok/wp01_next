import { init } from '@rematch/core'
import people from './people'
import theme from './theme'

const models = {
    people,
    theme,
}

const store = init({
    models,
})

export default store
