// Show the role name in each users object using the below data:

let users = [
    { id: 1, name: 'Alice', roleId: 1 },
    { id: 2, name: 'Bob', roleId: 2 },
    { id: 3, name: 'Charlie', roleId: 1 }
];
let roles = [
    { id: 1, name: 'Admin' },
    { id: 2, name: 'User' }
]


for (let i = 0; i < users.length; i++) {
    users[i].roleName = "";
    for (let j = 0; j < roles.length; j++) {
        if (users[i].roleId == roles[j].id) {
            console.log(i)
            console.log(j)
            users[i].roleName = roles[j].name;

        }
    }
}
console.log(users)
