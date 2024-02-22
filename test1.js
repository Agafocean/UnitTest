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
console.log (textHTML.match(/input/g).length);
console.log (textHTML.includes('placeholder="Email"'));

