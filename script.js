const button = document.querySelector("#button");
button.addEventListener("click", calculate);

function calculate (e) {
    e.preventDefault();
    const actualPrice = document.querySelector("#firstInput").value;
    const people = document.querySelector("#secondInput").value;

    if (actualPrice === "" || people === "" || people < 1) {
        Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Please enter your information!'
          })
    }
  
  let costPerPerson = actualPrice / people;

  costPerPerson = costPerPerson.toFixed(2);

    document.querySelector("#billCost").textContent = actualPrice;
    document.querySelector("#billPerPerson").textContent = costPerPerson;
}

