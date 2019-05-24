function sidenVises() {
    console.log(sidenVises);

    document.querySelector("#login").classList.add("hide");
    document.querySelector("#login").removeEventListener("click", sidenVises);

    document.querySelector("#forside").classList.add("hide", forside);
    document.querySelector("#login").removeEventListener("click", forside);
}

function forside() {
    console.log(forside);

    document.querySelector("#forside").classList.remove("hide", forside);
}
