export function validate(element) {
  function checkFields(event){
    let isValid = true
     let elements = document.querySelectorAll(".required") //required = classe su cui vogliamo attivare la validazione (user e pw)
     for(let i=0; i<elements.length; i++){
      let field = elements[i]
      let contanier  = field.closest(".fieldContainer")
      contanier.querySelector(".error").classList.add("hidden")
      if (field.value === ""){
        isValid = false
        contanier.querySelector(".error").classList.remove("hidden")
      }
     }
    if (isValid===false){
      event.preventDefault() // preventDefault serve a bloccare la submit del form
    }
  }
  element.addEventListener('submit', checkFields)

}
