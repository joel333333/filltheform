var name_input = document.getElementById("name_input");
var names = document.getElementById("name");
var add_details = document.getElementById("add_details");
var input_age = document.getElementById("input_age");
var age = document.getElementById("age")
var input_phone_number = document.getElementById("input_phone_number");
var phone_number = document.getElementById("phone_number");
var input_email = document.getElementById("input_email");
var e_mail = document.getElementById("e-mail");
var input_state = document.getElementById("input_state");
var state = document.getElementById("state");
var add_details = document.getElementById("add_details");
var container = document.getElementById("container")
var box = document.getElementById("box");


container.style.display = "none"

function details() {
    names.textContent = name_input.value;
    age.textContent = input_age.value;
    phone_number.textContent = input_phone_number.value;
    e_mail.textContent = input_email.value;
    state.textContent = input_state.value;
    add_details.style.backgroundColor = "red"
    container.style.display = "inline"
    box.style.display = "none"
}