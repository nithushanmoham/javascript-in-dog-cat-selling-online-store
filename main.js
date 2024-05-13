
document.addEventListener('DOMContentLoaded', function () {
    const buyButtons = document.querySelectorAll('.buy-btn');
    const quantityInputs = document.querySelectorAll('.quantity');
    const cancelButtons = document.querySelectorAll('.cancel-btn');
    const subtotalElement = document.getElementById('subtotal');
    const shippingPaymentElement = document.getElementById('shipping-payment');
    const totalPaymentElement = document.getElementById('total-payment');

    let subtotal = 0;
    let shippingPayment = 0;
    let totalPayment = 0;

    buyButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const quantity = parseInt(quantityInputs[index].value);
            const price = parseInt(button.dataset.price);
            const totalPrice = quantity * price;
            subtotal += totalPrice;
    
            shippingPayment = quantity * 200;

            totalPayment = subtotal + shippingPayment;

            subtotalElement.textContent = subtotal;
            shippingPaymentElement.textContent = shippingPayment;
            totalPaymentElement.textContent = totalPayment;

            quantityInputs[index].value = 1;
        });
    });

    cancelButtons.forEach((cancelButton, index) => {
        cancelButton.addEventListener('click', () => {
            const quantity = parseInt(quantityInputs[index].value);
            const price = parseInt(buyButtons[index].dataset.price);
            const totalPrice = quantity * price;
            subtotal -= totalPrice;

            shippingPayment = quantity * 200;

            totalPayment = subtotal + shippingPayment;

            subtotalElement.textContent = subtotal;
            shippingPaymentElement.textContent = shippingPayment;
            totalPaymentElement.textContent = totalPayment;

            // Reset quantity after cancellation
            quantityInputs[index].value = 1;
        });
    });
});
