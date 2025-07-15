function Guvi(name, email, adhar, type) {
    this.name = name
    this.email = email
    this.adhar = adhar
    this.type = type
}

// add the method to valiidate the prototype
Display.prototype.validate = function (guvi) {
   
    if (guvi.name.length < 2 || guvi.email.length < 5 || guvi.adhar.length < 12) {
        return false
    }
    else {
        return true
    }
}


// clear form
Display.prototype.clear = function () {
    let guviForm = document.getElementById('registerform');
    guviForm.reset();
}


Display.prototype.add = function (guvi) {
    tableBody = document.getElementById("tableBody");
    let uilist = `<tr>
    <td>${guvi.name}</td>
    <td>${guvi.email}</td>
    <td>${guvi.adhar}</td>
    <td>${guvi.type}</td>
    </tr>
    `
    tableBody.innerHTML += uilist
}


Display.prototype.show=function(type,displayMessage){
    let message=document.getElementById("showmessage");
    message.innerHTML=`<div class="alert alert-${type}" role="alert">
 ${displayMessage}
</div>`

setTimeout(function(){
    message.innerHTML='';
},3000)
}


// main function
let guviForm = document.getElementById('registerform');
guviForm.addEventListener('submit', guviFormSubmit)


function guviFormSubmit(e) {
    console.log("form is getting submitted")
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let adhar = document.getElementById('adhar').value
    let male = document.getElementById('male')
    let female = document.getElementById('female')

    let gender=male.checked?male.value:female.checked?female.value:'';
    
    e.preventDefault()

    let data = new Guvi(name, email, adhar, gender);
    console.log(data)
    let display = new Display();

    if (display.validate(data)) {
        display.add(data);
        display.clear();
        display.show('success', "Registration is Success")

    }
    else {
        display.show('danger', "Registration is failed please fill out the form properly...")
        display.clear();
    }


}


function Display() {

}
