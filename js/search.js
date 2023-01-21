function link() {
    var select = document.getElementById("select");
    document.getElementById("search").action = select.options[select.selectedIndex].value;
    document.getElementById("wd").name = document.getElementById("select").options[select.selectedIndex].getAttribute("name")
}

function change() {
    var focus = document.activeElement.id
    if (focus=="wd" || focus=="select" || focus=="submit") {
        document.getElementById("glass").style.filter = "blur(10px) brightness(80%)"
    }
    else
    {
        document.getElementById("glass").style.filter = "blur(3px) brightness(90%)"
    }

    setTimeout('change()', 100);
}
change();