class User {
  constructor(firstName, lastName, email, password, age, address, cardNumber, phone, color) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.age = age;
    this.address = address;
    this.cardNumber = cardNumber;
    this.contactPhone = phone; /* atention */
    this.color = color
  }
}

let shay = new User('shay', 'cerny', 'shaycerny2@getMaxListeners.com', 'asdf', 27, 'address #234 san francisco', '0000 - 0000 - 0000', '001619-23433', 'purple')
// let listsUsers = []

function register() {
  let inputFirstName = $('#txtFirstName').val();
  let inputLastName = $('#txtLastName').val();
  let inputEmail = $('#txtEmail').val();
  let inputPassword = $('#txtPassword').val();
  let inputAge = jQuery("#txtAge").val();
  let inputCardNumber = $('#txtCardNumber').val();
  let inputAddress = $("#txtAddress").val();
  let inputPhone = $("#txtPhone").val();
  let inputColor = $("#txtColor").val();


  let theUser = new User(inputFirstName, inputLastName, inputEmail, inputPassword, inputAge, inputCardNumber, inputAddress, inputPhone, inputColor)

  if (isValid(theUser)) {
    saveUser(theUser)
    console.log(inputFirstName, inputLastName, inputEmail, inputPassword, inputAge, inputCardNumber, inputAddress, inputPhone, inputColor);
  }

  //cleaning inputs
  $('#txtFirstName').val('');
  $('#txtLastName').val('');
  $('#txtEmail').val('');
  $('#txtPassword').val('');
  jQuery("#txtAge").val('');
  $('#txtCardNumber').val('');
  $("#txtAddress").val('');
  $("#txtPhone").val('');
  $("#txtColor").val('');
}

function validatePassword() {
  let txtPassword = $("#txtPassword");
  let password = txtPassword.val();

  if (password.length < 6) {
    txtPassword.css("border", "2px solid red")//jquery function
    displayError('password too short!');
  } else {
    txtPassword.css("border", "2px solid green")
    hideError()
  }
}

function displayError(msg) {
  $("#alertError").removeClass("hide").text(msg)

  // setTimeout(function () {
  //   $("#alertError").addClass("hide");
  // }, 2000);

}



function hideError() {
  $("#alertError").addClass("hide")
}

function isValid(user) {
  valid = true;
  $("input").removeClass("input-error");

  if (user.email.length == 0) {
    valid = false
    $("#txtEmail").addClass("input-error")
  }

  if (user.password == 0) {
    console.log('You need to add password');
    $("#txtPassword").addClass("input-error")
    valid = false
  }

  if (!valid) {
    displayError("Missing data...")
  }
  // if (!valid) {
  //   console.log("!valid Missing data");
  //   $("#alertError").removeClass("hide")

  //   setTimeout(function () {
  //     $("#alertError").addClass("hide");
  //   }, 2000);
  // }

  return valid;
}

function init() {
  console.log('registration');
  $("#txtPassword").change(validatePassword)
  // register()
}

window.onload = init;