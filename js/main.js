$(document).on("click", "a", function() {
    var id = $(this).attr("id");
    if (id == "register-t") {
        // Switch the Forms
        document.getElementById("login").setAttribute("style", "display: none !important;");
        document.getElementById("register").setAttribute("style", "display: flex !important;");
        // Invert Colors
        document.getElementById("login-form").classList.add('swap');
        document.getElementById("login-form").setAttribute("style", "background-image: linear-gradient(-35.838deg, var(--bg-secondary-shade) 0%, var(--bg-secondary-shade) 50%, var(--bg-secondary) 50%, var(--bg-secondary) 100%);");
    } else if (id == "forgot") {
        alert("Redirect to forgot password form...");
    } else {
        // Switch the Forms
        document.getElementById("register").setAttribute("style", "display: none !important;");
        document.getElementById("login").setAttribute("style", "display: flex !important;");
        // Invert Colors
        document.getElementById("login-form").classList.remove('swap');
        document.getElementById("login-form").setAttribute("style", "background-image: linear-gradient(35.838deg, var(--bg-primary) 0%, var(--bg-primary) 50%, var(--bg-shade) 50%, var(--bg-shade) 100%);");
    }
});
