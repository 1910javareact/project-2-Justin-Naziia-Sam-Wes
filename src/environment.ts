
let devEnvironment = {
    baseUrl:'http://localhost:8888'
}

let prodEnvironment = {
    baseUrl: ''
}

export let environment = {
    baseUrl: ''
}

if(process.env.REACT_APP_ENV === 'dev'){
    environment = devEnvironment
} else if(process.env.REACT_APP_ENV === 'prod') {
    environment = prodEnvironment
}
