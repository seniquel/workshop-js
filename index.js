function fetchUsers() {
    var table_html = "";
    fetch('https://loisirs-web-backend.cleverapps.io/users')
        .then(function (response) { return response.json(); })
        .then(function (data) {
            data.forEach(d => {
                table_html += "<tr><td>" + d.id + "</td><td>" + d.name + "</td><td>" + d.password + "</td></tr>";
            });
            document.getElementById('table_users').innerHTML = table_html;
        })
        .catch(error => console.error(error));
}

fetchUsers();

function postUser() {
    nom = document.getElementById('nom_personne').value;
    pass = document.getElementById('password').value;
    //data = document.forms.user_form
    fetch('https://loisirs-web-backend.cleverapps.io/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name: nom, password: pass}) // body data type must match "Content-Type" header
    }).catch(err => console.error(err));
}