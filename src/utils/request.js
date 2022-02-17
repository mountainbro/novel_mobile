const axios = import('axios')

const instance = axios.create({
    baseUrl: '',
    timeout: 15000
})

export default instance
