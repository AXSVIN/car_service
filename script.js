function validateForm() {
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("phoneError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("problemError").innerHTML = "";

    var name = document.getElementById("name").value;
    var email = document.getElementById("phone").value;
    var name = document.getElementById("email").value;
    var email = document.getElementById("problem").value;

    if (name.trim() === "") {
        document.getElementById("nameError").innerHTML = "please fill out this field";
        return;
    }
    if (email.trim() === "") {
        document.getElementById("phoneError").innerHTML = "please fill out this field";
        return;
    }
    if (name.trim() === "") {
        document.getElementById("emailError").innerHTML = "please fill out this field";
        return;
    }
    if (name.trim() === "") {
         document.getElementById("problemError").innerHTML = "please fill out this field";
         return;
    }
    
    window.location.href = "register.html";
}