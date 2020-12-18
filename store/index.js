import { init } from '@rematch/core'
import people from './people'
import creds from './creds'

const models = {
    people,
    creds,
}

const store = init({
    models,
})

export default store
