const cart = [];
function displayProduct() {
    let totalPrice = 0;
    document.getElementById('table-container').innerHTML='';
    const table = document.getElementById('table-container');
    for (let i = 0; i < cart.length; i++) {
        totalPrice = totalPrice + cart[i].price;
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <th>${i + 1}</th>
        <td>${cart[i].name}</td>
        <td>${cart[i].price}</td>
        `;
        table.appendChild(tr);
    }

    const tr = document.createElement("tr");
    tr.innerHTML =
        `
        <th></th>
        <td>Total Price</td>
        <td>${totalPrice}</td>
    `;
    table.appendChild(tr);
}
function addToCart(element) {

    const name = element.parentNode.parentNode.children[0].innerText;
    const price = parseFloat(element.parentNode.parentNode.children[1].children[0].innerText);
    const pd = { name, price };
    cart.push(pd);
    document.getElementById("count").innerText = cart.length;
    displayProduct();
}