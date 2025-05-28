import {
  isValueLength,
  setErrorMessage,
  removeErrors,
  isValidEmail,
  isValidPassword,
  formHasErrors,
} from './formHelpers.js'

// hent formen med ID
let form = document.getElementById('signupform')

// tilføj eventlistener der tjekker efter et submit event og kører "submitForm" funktionen
form.addEventListener('submit', submitForm)

function submitForm(event) {
  event.preventDefault() // For at siden ikke refresher

  removeErrors() // Fjerner alle tidligere errors

  // Hent alle felter ind fra event.target
  let firstName = event.target.firstname
  let lastName = event.target.lastname
  let address = event.target.address
  let postalCode = event.target.postal
  let country = event.target.country
  let email = event.target.email
  let password = event.target.password
  let passwordRepeat = event.target.passwordRepeat

  if (!isValueLength(firstName.value, 2)) {
    setErrorMessage('Dit fornavn skal være større end 2 bogstaver', firstName)
  }

  if (!isValueLength(lastName.value, 2)) {
    setErrorMessage('Dit efternavn skal være mindst 2', lastName)
  }

  if (!isValueLength(address.value, 2)) {
    setErrorMessage('Din adresse skal være mindst 2', address)
  }

  if (postalCode.value.length !== 4) {
    setErrorMessage('Postnummer er ugyldigt', postalCode)
  }

  if (!isValueLength(country.value, 2)) {
    setErrorMessage('Dit land skal indeholde to bogstaver', country)
  }

  if (!isValidEmail(email.value)) {
    setErrorMessage('Din email er ikke gyldig', email)
  }

  if (!isValidPassword(password)) {
    if (password.value !== passwordRepeat.value) {
      setErrorMessage('De to passwords er ikke ens', passwordRepeat)
    }
  }

  // Hvis ikke der er nogle fejl, så vis en alert til brugeren
  if (!formHasErrors) {
    alert('Du har indsent formen')
  }
}
