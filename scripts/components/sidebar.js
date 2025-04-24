let sidebarMoved = false;

function moveSidebar()  {
    const sidebar = document.getElementById("sidebarBody");
    sidebar.style.transition = "0.3s ease-in-out";

    if (!sidebarMoved) {
        sidebar.style.right = "0em";
    }
    else {
        sidebar.style.right = "-16em";
    }

    sidebarMoved = !sidebarMoved;
}