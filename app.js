const usersUrl = 'https://jsonplaceholder.typicode.com/users'
const allUsers = []

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

function filterUsers() {
    const searchValue = document.getElementById('search').value.toLowerCase()

    const userSearch = allUsers.filter(user =>
         user.name.toLowerCase().includes(searchValue)
    )
    document.getElementById('user-list').innerHTML = ''
    renderUsers(userSearch)
}

async function main() {
    try {
        const users = await fetchUsers(usersUrl)
        allUsers.push(...users)
        console.log('adding users list to the HTML');
        renderUsers(allUsers)
    } catch (error) {
        console.log(error);
        document.getElementById('error-message').style.display = 'block'
    }
    
}

main()

