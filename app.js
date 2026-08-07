const usersUrl = 'https://jsonplaceholder.typicode.com/users'

async function fetchUsers(url) {
        console.log('fetching url');
        const response = await fetch(url)
        console.log('got the url response -> turning into json');
        const data = await response.json()
        return data
}

async function main() {
    try {
        const users = await fetchUsers(usersUrl)
        console.log(users)
    } catch (error) {
        console.log(error);
    }
    
}

main()

