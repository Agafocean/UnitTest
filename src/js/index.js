import '../img/visa.png';
import '../img/amex.png';
import '../img/mrcd.png';
import '../img/mtro.png';
import 'normalize.css';
import '../index.html';
import '../css/main.css';
import Payment from 'payment';
import isEmail from 'is-email';

const J = Payment.J,
    number = document.querySelector('.cc-number'),
    exp = document.querySelector('.cc-exp'),
    cvc = document.querySelector('.cc-cvc'),
    validation = document.querySelector('.validation'),
    btn = document.getElementById('btn'),
    email = document.getElementById('email'),
    typePS = document.getElementById('typePS'),
    imgPS = document.getElementById('imgPS');

Payment.formatCardNumber(number, 16);
Payment.formatCardExpiry(exp);
Payment.formatCardCVC(cvc);

var cardType = Payment.fns.cardType(J.val(number));

function checkData() {
    typePS.textContent = '';

    J.toggleClass(number, 'invalid', !Payment.fns.validateCardNumber(J.val(number)));
    J.toggleClass(exp, 'invalid', !Payment.fns.validateCardExpiry(Payment.cardExpiryVal(exp)));
    J.toggleClass(cvc, 'invalid', !Payment.fns.validateCardCVC(J.val(cvc), cardType));
    J.toggleClass(email, 'invalid', !isEmail(email.value));

    let cardnum1 = number.value.substr(0, 1), cardnum2 = number.value.substr(0, 2);
    if (number.value.length == 0 || (number.value.length == 1 && cardnum1 != 4)) { imgPS.style.display = 'none' };

    if (Payment.fns.cardType(number.value)) {
        if (cardnum1 == 4) {
            imgPS.style.display = 'unset';
            imgPS.src = '../img/visa.png';
        }
        else if (cardnum2 == 34 || cardnum2 == 37) {
            imgPS.style.display = 'unset';
            imgPS.src = '../img/amex.png';
        }
        else if (cardnum2 == 50 || cardnum2 == 56 || cardnum2 == 57 || cardnum2 == 58 || cardnum2 == 59) {
            imgPS.style.display = 'unset';
            imgPS.src = '../img/mtro.png';
        }
        else if (cardnum2 == 51 || cardnum2 == 52 || cardnum2 == 53 || cardnum2 == 54 || cardnum2 == 55) {
            imgPS.style.display = 'unset';
            imgPS.src = '../img/mrcd.png';
        }
        else { typePS.textContent = Payment.fns.cardType(number.value).toUpperCase(); }
    };
    if (document.querySelectorAll('.invalid').length) {
        btn.disabled = true;
    } else {
        btn.disabled = false;
    };
};

number.addEventListener('input', checkData);
exp.addEventListener('input', checkData);
cvc.addEventListener('input', checkData);
email.addEventListener('input', checkData);
