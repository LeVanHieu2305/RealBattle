var username = document.querySelector('#username');
var email = document.querySelector('#email');
var password = document.querySelector('#password');
var confirmPassword = document.querySelector('#confirmpassword');
var form = document.querySelector('form');

function showError(input, message) {
    let parent = input.parentElement;
    let small = parent.querySelector('small')

    parent.classList.add('error');
    small.innerText = message;

}

function showSuccess(input) {
    let parent = input.parentElement;
    let small = parent.querySelector('small')
    parent.classList.remove('error');
    small.innerText = '';
}
// Check rỗng
function checkEmptyError(listInput) {
    let isEmptyError = false;
    listInput.forEach(input => {
        input.value = input.value.trim()
        if (!input.value) {
            isEmptyError = true;
            showError(input, 'Không được để trống')
        } else {
            showSuccess(input);
        }
    });
    return isEmptyError;
}

function checkEmailError(input) {
    const regexEmail = /^("(?:[!#-\[\]-\u{10FFFF}]|\\[\t -\u{10FFFF}])*"|[!#-'*+\-/-9=?A-Z\^-\u{10FFFF}](?:\.?[!#-'*+\-/-9=?A-Z\^-\u{10FFFF}])*)@([!#-'*+\-/-9=?A-Z\^-\u{10FFFF}](?:\.?[!#-'*+\-/-9=?A-Z\^-\u{10FFFF}])*|\[[!-Z\^-\u{10FFFF}]*\])$/u;
    input.value = input.value.trim();
    let isEmailError = !regexEmail.test(input.value);
    if (regexEmail.test(input.value)) {
        showSuccess(input);
    } else {
        showError(input, 'Email is not a valid email address');
    }
    return isEmailError;
}

function checkLengthError(input, min, max) {
    input.value = input.value.trim();

    if (input.value.length < min) {
        showError(input, `Phải có ít nhất ${min} kí tự`)
        return true
    }

    if (input.value.length > max) {
        showError(input, `Không được quá ${max} kí tự`)
        return true

    }

    return false
}

function checkMathPasswordError(passwordInput, cfPasswordInput) {
    if (passwordInput.value !== cfPasswordInput.value) {
        showError(cfPasswordInput, 'Mật khẩu không trùng khớp');
        return true;
    }
    return false;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    let isEmptyError = checkEmptyError([username, email, password, confirmPassword]);
    let isEmailError = checkEmailError(email);
    let isUsernameLengthError = checkLengthError(username, 3, 10);
    let isPasswordLengthError = checkLengthError(password, 3, 10);
    let isMathError = checkMathPasswordError(password, confirmPassword)
})