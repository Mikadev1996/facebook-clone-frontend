const production = {
    url: {
        BASE_URL: 'https://facebook-clone-express.azurewebsites.net/api'
    }
}

const development = {
    url: {
        BASE_URL: 'http://localhost:5000/api'
    }
}

const mode = 'production'

export const config = production;