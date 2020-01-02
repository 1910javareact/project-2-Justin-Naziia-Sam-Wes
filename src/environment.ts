
let devEnvironment = {
    baseUrl:'http://localhost:8888'
}

let prodEnvironment = {
    baseUrl: 'http://localhost:8888'
}

export let environment = {
    baseUrl: 'http://localhost:8888'
}

if(process.env.REACT_APP_ENV === 'dev'){
    environment = devEnvironment
} else if(process.env.REACT_APP_ENV === 'prod') {
    environment = prodEnvironment
}