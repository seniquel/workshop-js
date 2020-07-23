function fetchUsers() {
    fetch('https://loisirs-web-backend.cleverapps.io/users')
        .then(res => res.json())
        .then((out) => {
            console.log('Output: ', out);
        }).catch(err => console.error(err));
}