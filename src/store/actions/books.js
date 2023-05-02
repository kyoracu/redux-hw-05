import api from '../../api'
import { setBooks, setBooksError, setBooksLoading } from '../reducers/books'

const fetchBooks = () => async (dispatch) => {
    const controller = new AbortController()
    try {
        dispatch(setBooksLoading())
        const response = await api.getBooks(controller.signal)
        dispatch(setBooks(response.data))
    }
    catch (err) {
        controller.abort()
        dispatch(setBooks(err.message))
    }
}

export default fetchBooks