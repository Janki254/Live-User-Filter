const resultEle = document.getElementById('result-list');
const filterEle = document.getElementById('filter');
const userListItems = [];



filterEle.addEventListener('input', (e) => filterData(e.target.value));

const getData = async () => {
    const response = await fetch('https://randomuser.me/api?results=50');

    const {results} = await response.json();

    //clear result
    resultEle.innerHTML = '';

    results.forEach((user) => {
        const list_Ele = document.createElement('li');

        userListItems.push(list_Ele);

        list_Ele.innerHTML = `

            <img src="${user.picture.large}" alt="${user.name.first}" />
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `;
        resultEle.appendChild(list_Ele);
    });
};

function filterData(searchedTerm) {
    userListItems.forEach((item) => {
        if (item.innerText.toLowerCase().includes(searchedTerm.toLowerCase())) {
            item.classList.remove('hide');
        } else {
            item.classList.add('hide');
        }
    });
}


getData();
