import axios from 'axios'

const instance = axios.create({
  baseURL:"https://my-blog-ca0de.firebaseio.com"
})

// instance.defaults.headers.common['SOMETHING'] = 'SOMETHING'

export default instance