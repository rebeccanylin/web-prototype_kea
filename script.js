window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");

    document.querySelector("#menuknap").addEventListener("click", toggleMenu);

    document.querySelector("#pil").addEventListener("click", dropDown);

}


function toggleMenu() {
    console.log("toggleMenu");
    document.querySelector("#menu").classList.toggle("hidden");

    let erSkjult = document.querySelector("#menu").classList.contains("hidden");

    if (erSkjult == true) {
        document.getElementById("menuknap").src = "asset_afleveringer/Menu.svg";
    } else {
        document.getElementById("menuknap").src = "asset_afleveringer/x.svg";
    }
}

function dropDown() {
    console.log("dropDown");
    document.querySelector("#dropdown").classList.toggle("hidden");

    let erSkjult = document.querySelector("#dropdown").classList.contains("hidden");

    if (erSkjult == true) {
        document.getElementById("pil").src = "asset_afleveringer/down_small_arrow.svg";
    } else {
        document.getElementById("pil").src = "asset_afleveringer/up.svg";
    }


}
