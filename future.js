(function(){
    window.onscroll = function(){stickyNavigation()};
    var navbar = document.getElementById("nav");
    var sticky = navbar.offsetTop;

    function stickyNavigation(){
        if(window.pageYOffset >= sticky){
            navbar.classList.add("stickyNav");
        }else{
            navbar.classList.remove("stickyNav");
        }
    }
})();