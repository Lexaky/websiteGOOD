async function getResponse() {
    let response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1/todos"
    );
    let strings = await response.json();

    let list = document.querySelector(".rows");

    for (let key_i in strings) {
        list.innerHTML += `
            <tr class="row">
                <td>${strings[key_i].userId}</td>
                <td>${strings[key_i].title}</td>
                <td>${strings[key_i].completed}</td>
            </tr>
        `;
    }
}

getResponse();