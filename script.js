// ============================ PAGE SWITCHING ============================
function showPage(id) {
    document.querySelectorAll(".page").forEach(p => p.style.display = "none");
    document.getElementById(id).style.display = "block";

    if (id === "cart") loadCart();
    if (id === "admin") loadAdmin();
}

// ============================ LOGIN SYSTEM ============================
function login() {
    let ID = document.getElementById("userid").value;
    let PW = document.getElementById("password").value;

    if (ID === "2023000587" && PW === "STS") {
        alert("Login Successful!");
        showPage("home");
    } else if (ID === "ADMIN" && PW === "ADMIN123") {
        alert("Admin Login Successful!");
        showPage("admin");
    } else {
        alert("Incorrect User ID or Password!");
        document.getElementById("forgotBtn").style.display = "inline-block";
    }
}

// ============================ REGISTRATION ============================
let members = [];

function registerMember() {
    const member = {
        name: document.getElementById("name").value,
        age: document.getElementById("age").value,
        aadhar: document.getElementById("aadhar").value,
        contact: document.getElementById("contact").value,
        email: document.getElementById("email").value,
        address: document.getElementById("address").value
    };
    members.push(member);

    alert("Registration Successful!");
    showPage('home');
}

// ============================ CART SYSTEM ============================
let cart = [];

function addToCart(book, price) {
    cart.push({book, price});
    alert(book + " added to cart!");
}

function loadCart() {
    let table = document.getElementById("cartTable");
    table.innerHTML = `
        <tr>
            <th>Book</th>
            <th>Price</th>
        </tr>
    `;

    let total = 0;

    cart.forEach(item => {
        table.innerHTML += `<tr><td>${item.book}</td><td>$${item.price}</td></tr>`;
        total += item.price;
    });

    document.getElementById("totalAmount").innerText = 
        "Total Amount: $" + total;
}

// ============================ ADMIN DASHBOARD ============================
function loadAdmin() {
    let table = document.getElementById("adminMembers");
    table.innerHTML = `
        <tr><th>Name</th><th>Age</th><th>Aadhar</th><th>Contact</th><th>Email</th><th>Address</th></tr>
    `;

    members.forEach(m => {
        table.innerHTML += `
            <tr>
                <td>${m.name}</td>
                <td>${m.age}</td>
                <td>${m.aadhar}</td>
                <td>${m.contact}</td>
                <td>${m.email}</td>
                <td>${m.address}</td>
            </tr>
        `;
    });

    let cartTable = document.getElementById("adminCart");
    cartTable.innerHTML = `<tr><th>Book</th><th>Price</th></tr>`;

    cart.forEach(item => {
        cartTable.innerHTML += `<tr><td>${item.book}</td><td>${item.price}</td></tr>`;
    });
}
