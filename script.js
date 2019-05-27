window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log(sidenVises);

    document.querySelector("#login").classList.add("hide");
    document.querySelector("#login").removeEventListener("click", sidenVises);

    document.querySelector("#forside").classList.add("hide", forside);
    document.querySelector("#login").removeEventListener("click", forside);

    document.querySelector("#menuknap").addEventListener("click", toggleMenu);
}

function forside() {
    console.log(forside);

    document.querySelector("#forside").classList.remove("hide", forside);


}

function toggleMenu() {
    console.log("toggleMenu");
    document.querySelector("#menu").classList.toggle("hidden");

    let erSkjult = document.querySelector("#menu").classList.contains("hidden");

    if (erSkjult == true) {
        document.querySelector("#menuknap").textContent = "☰";
    } else {
        document.querySelector("#menuknap").textContent = "X";
    }
}
