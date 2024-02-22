import Payment from 'payment';

test ('пропускает корректный номер карты', () => {
  expect (Payment.fns.validateCardNumber('4242 4242 4242 4242')).toBe(true);
});
test ('не пропускает произвольную строку, содержащую любые нецифровые символы', () => {
  expect (Payment.fns.validateCardNumber('4242 4242 g242 4242')).toBe(false);
});
test ('не пропускает строку с недостаточным количеством цифр', () => {
  expect (Payment.fns.validateCardNumber('4242 4242 4242 4')).toBe(false);
});
test ('не пропускает строку со слишком большим количеством цифр ', () => {
  expect (Payment.fns.validateCardNumber('4242 4242 4242 4242 4242')).toBe(false);
});

test ('пропускает строку с тремя цифровыми символами', () => {
  expect (Payment.fns.validateCardCVC('123')).toBe(true);
});
test ('не пропускает строки с 1-2 цифровыми символами', () => {
  expect (Payment.fns.validateCardCVC('13')).toBe(false);
});
test ('не пропускает строки с 4+ цифровыми символами', () => {
  expect (Payment.fns.validateCardCVC('12377')).toBe(false);
});
test ('не пропускает строки с нецифровыми символами', () => {
  expect (Payment.fns.validateCardCVC('12t')).toBe(false);
});

const textHTML = `<body>
<div class="container">
    <form novalidate autocomplete="on">
        <h2>Card number</h2>
        <input type="text" class="cc-number" pattern="\d*" x-autocompletetype="cc-number" placeholder="Card number"
            required>
        <span id="typePS"></span>
        <img id="imgPS">
        <h2>Expiry</h2>
        <input type="text" class="cc-exp" pattern="\d*" x-autocompletetype="cc-exp" placeholder="Expires MM/YY"
            required maxlength="7">
        <h2>CVC</h2>
        <input type="text" class="cc-cvc" pattern="\d*" x-autocompletetype="cc-csc" placeholder="Security code"
            required maxlength="3" autocomplete="off">
        <h2>Email</h2>
        <input type="email" id="email" placeholder="Email" required>

        <h2 class="validation"></h2>

        <button id="btn" type="submit" disabled>Оплатить</button>
    </form>
</div>
</body>
`;
test ('Testing HTML ...', () => {
  expect (textHTML.match(/input/g).length).toBe(4);
  textHTML.includes('placeholder="Card number"');
  textHTML.includes('placeholder="Expires MM/YY"');
  textHTML.includes('placeholder="Security code"');
  textHTML.includes('placeholder="Email"');
});
