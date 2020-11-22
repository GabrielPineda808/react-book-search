import axios from 'axios'

export default {
    getBooks: function(search){
        return axios.get('https://www.googleapis.com/books/v1/volumes?q='+ search)
    },
    deleteBook: function(id) {
        return axios.delete('/api/books/' + id)
    }
}