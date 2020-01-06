
let devEnvironment = {
    baseUrl:'http://3.85.168.106:8888'
}

let prodEnvironment = {
    baseUrl: 'http://3.85.168.106:8888'
}

export let environment = {
    baseUrl: 'http://3.85.168.106:8888'
}

if(process.env.REACT_APP_ENV === 'dev'){
    environment = devEnvironment
} else if(process.env.REACT_APP_ENV === 'prod') {
    environment = prodEnvironment
}
