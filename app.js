const usersUrl = 'https://jsonplaceholder.typicode.com/users'

async function fetchUsers(url) {
        console.log('fetching url');
        const response = await fetch(url)
        console.log('got the url response -> turning into json');
        const data = await response.json()
        return data
}

function renderUsers(array) {
    const userList = document.getElementById('user-list')

    array.forEach(element => {
        const {name, email, username, address: {city}} = element

        const card = document.createElement('div')
        card.className = 'card'
        card.innerHTML = `
            <h2>${name}</h2>
            <p>${username}</p>
            <p>${email}</p>
            <p>${city}</p>
        `
        userList.appendChild(card)
    });
}

async function main() {
    try {
        const users = await fetchUsers(usersUrl)
        console.log('adding users list to the HTML');
        renderUsers(users)
    } catch (error) {
        console.log(error);
    }
    
}

main()

