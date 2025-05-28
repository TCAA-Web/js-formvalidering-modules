export let formHasErrors = false

// tjek om value er mindre end targetlength
export function isValueLength(value, targetLength) {
  if (value.trim().length < targetLength) {
    return false
  } else return true
}

// sæt en error message under targetInput
export function setErrorMessage(message, targetInput) {
  const errorElement = document.createElement('b')
  errorElement.innerText = message
  errorElement.classList.add('error')
  targetInput.after(errorElement)
  formHasErrors = true
}

// clear errors fra DOM´en
export function removeErrors() {
  let errors = document.querySelectorAll('.error')
  errors.forEach((error) => error.remove())
  formHasErrors = false
}

// return true hvis email er valid
export function isValidEmail(email) {
  const emailRegex = RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
  if (emailRegex.test(email)) {
    return true
  } else return false
}

// return true hvis password er valid, mindst 8 karakterer og et password der indeholder et tal og et specialtegn.
export function isValidPassword(password) {
  if (password.value.length < 8) {
    setErrorMessage('Dit password skal være 8 karakterer', password)
    return false
  }
  if (!RegExp(/\d+/).test(password.value)) {
    setErrorMessage('Dit password skal indeholde et tal', password)
    return false
  }
  if (!RegExp(/[-’/`~!#*$@_%+=.,^&(){}[\]|;:”<>?\\]/g).test(password.value)) {
    setErrorMessage('Dit password skal indeholde et specialtegn', password)
    return false
  } else return true
}
