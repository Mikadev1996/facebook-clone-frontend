const production = {
    url: {
        BASE_URL: ''
    }
}

const development = {
    url: {
        BASE_URL: 'http://localhost:5000/api'
    }
}

const mode = 'development'

export const config = mode === 'development' ? development : production;