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

export const config = process.env.NODE_ENV === 'development' ? development:production;