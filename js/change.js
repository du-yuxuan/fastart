function change() {
    var select = document.getElementById("select");
    document.getElementById("search").action = select.options[select.selectedIndex].value;
    if (select.selectedIndex == 0)
    {
        document.getElementById("wd").name = "wd";
    }
    else
    {
        document.getElementById("wd").name = "q";
    }
    
}
change();