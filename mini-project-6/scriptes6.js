class Guvi {
  constructor(name, email, adhar, type) {
    this.name = name;
    this.email = email;
    this.adhar = adhar;
    this.type = type;
  }
}

class Display {
  add(guvi) {
    let tableBody;
    tableBody = document.getElementById("tableBody");
    let uilist = `<tr>
    <td>${guvi.name}</td>
    <td>${guvi.email}</td>
    <td>${guvi.adhar}</td>
    <td>${guvi.type}</td>
    </tr>
    `;
    tableBody.innerHTML += uilist;
  }

  clear() {
    let guviForm = document.getElementById("registerform");
    guviForm.reset();
  }

  validate(guvi) {
    if (
      guvi.name.length < 2 ||
      guvi.email.length < 5 ||
      guvi.adhar.length < 12
    ) {
      return false;
    } else {
      return true;
    }
  }

  show(type, displayMessage) {
    let message = document.getElementById("showmessage");
    message.innerHTML = `<div class="alert alert-${type}" role="alert">
     ${displayMessage}
    </div>`;
    setTimeout(function(){
        message.innerHTML='';
    },3000)
    }
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


// search functionality
// search functionality
let searchForm = document.querySelector('form[role="search"]');
searchForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let searchInput = searchForm.querySelector('input[type="search"]').value.toLowerCase();
    let tableRows = document.querySelectorAll('#tableBody tr');

    tableRows.forEach(row => {
        let rowText = row.innerText.toLowerCase();
        if (rowText.includes(searchInput)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
});