const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(`Async function is finished!`)
        resolve()
    }, 1000)
})

promiseOne.then(() => {
    console.log(`promise is completed`)
})

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(`Async task is Done`)
    }, 1000)
    resolve()
}).then(() => {
    console.log(`Promise is completed`)
})

new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ username: "Shanto", id: 1 });
    }, 1000)
}).then((user) => {
    console.log(user)
})

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        const error = false // trye using true
        if (!error) {
            resolve({ username: "Shanto", id: 1 })
        }
        else {
            reject("Sorry, Something Went Wrong !")
        }
    }, 1000)
})

promiseThree.then((user) => {
    console.log(user)
    return user.username
}).then((username) => {
    console.log(username)
}).catch(error => {
    console.log(error)
}).finally(() => {
    console.log(`The promise has been resolved or rejected`)
})

new Promise((resolve, reject) => {
    setTimeout(() => {
        const error = false
        if (!error) {
            resolve({ username: "shanto", id: 1 })
        }
        else {
            reject(`Sorry, Something went wrong!`)
        }
    }, 1000)
}).then((user) => {
    console.log(user)
    return user.username
}).then((username) => {
    console.log(username)
}).catch(error => {
    console.log(error)
}).finally(() => {
    console.log("Promise has been resolved or rejected!")
})

// promise eusing async & await

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        const error = false;
        if (!error) {
            resolve({ usernmae: "shanto", password: "123456" })
        }
        else {
            reject(`Sorry Something went wrong !`)
        }
    }, 1000)
});


const consumePromise = async () => {
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
consumePromise()

async function PrintUserInfo() {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

PrintUserInfo()

const printUserInfo = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
    finally {
        console.log(`Promise has been resolved or rejcted`)
    }
}

printUserInfo()

fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.log(error)
    })
    .finally(() => {
        console.log(`Promise has been resolved or rejected`)
    })

