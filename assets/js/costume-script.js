//mengambil elemen tombol menu
const menuTombol = document.querySelector(".menu-tombol");

// Ambil element untuk menambahkan shoeMenu
const navbarNav = document.querySelector(".navbarNavigasi");

// Memberikan event ke menu tombol menu
menuTombol.addEventListener("click", function () {
  navbarNav.classList.toggle("showMenu");
});
