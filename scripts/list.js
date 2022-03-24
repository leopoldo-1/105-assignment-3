console.log('list...')

function displayUsers(users) {
  //travel the array
  let tabla = $('#tableUsers').val()
  let template = ""
  console.log('... ', users);

  //get each user
  for (let i = 0; i < users.length; i++) {
    template +=
      `
      <tr>
        <td>${users[i].firstName}</td>
        <td>${users[i].lastName}</td>
        <td>${users[i].email}</td>
        <td>${users[i].age}</td>
        <td>${users[i].address}</td>
        <td>${users[i].cardNumber}</td>
        <td>${users[i].contactPhone}</td>
        <td><input type="color"> ${users[i].color}</input></td>
      </tr>
    `
  }

  //append the user to the table append() from jquery
  $('#tableUsers').append(template)
}

function init() {
  console.log('listening users');
  let users = readUsers();


  // let inputFirstName = $('#txtFirstName').val();


  displayUsers(users)
}

window.onload = init;