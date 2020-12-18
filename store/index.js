import { init } from '@rematch/core'
import people from './people'

const models = {
    people,
}

const store = init({
    models,
})

export default store
