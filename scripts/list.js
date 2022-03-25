console.log('list...')

function displayUsers(users) {
  let template = ""

  $("#usersTable").html("")
  let data = ""
  //get each user

  for (let i = 0; i < users.length; i++) {
    data += createUser(users[i], i)
    // console.log('** ', createUser(users[i]));
  }
  $('#usersTable').html(data)

  function createUser(user, index) {
    // console.log('createee.. ', users);
    return `<tr>
              <td>${user.firstName}</td>
              <td>${user.lastName}</td>
              <td>${user.email}</td>
              <td>${user.age}</td>
              <td>${user.address}</td>
              <td>${user.cardNumber}</td>
              <td>${user.contactPhone}</td>
              <td><input type="color" id="${user.color}"> ${user.color}</input></td>
              <td><button type="button" onclick="removeUser(${index})"><i class="fas fa-trash" style="color:red"></i></button></td>
            </tr>
            `
  }

  //append/html the user to the table
}

function removeUser(index) {
  remove(index)
  let users = readUsers();
  displayUsers(users)
}

function init() {
  console.log('listening users');
  let users = readUsers();


  // let inputFirstName = $('#txtFirstName').val();


  displayUsers(users)
}

window.onload = init;