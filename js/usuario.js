// Script que muestra el nombre de uno de los dos creadores al azar

var numero = Math.floor(Math.random() * 2) + 1;

if (numero == 1) {
    document.write('<img class="rounded-circle me-lg-2" src="img/user.jpg" alt=""');
    document.write('style="width: 40px; height: 40px;">');
    document.write('<span class="d-none d-lg-inline-flex">Joan López</span>');
}
else {
    document.write('<img class="rounded-circle me-lg-2" src="img/user2.jpg" alt=""');
    document.write('style="width: 40px; height: 40px;">');
    document.write('<span class="d-none d-lg-inline-flex">Pablo Cabrer</span>');
}