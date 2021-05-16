window.onload=function(){

    const showMenuToggle = document.getElementsByClassName('toggle-button')[0]
    const navbarLinks = document.getElementById('navbar-links');
    const backToTop = document.getElementById('back-top');
    const menuItem = [].slice.call(document.getElementsByClassName("menu-item"));
    let lastItem = menuItem[0];


    showMenuToggle.addEventListener('click', () => {
        toggleNav();
    })


    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    })
   
    
    menuItem.forEach((element, index) => {
        element.addEventListener("click", () => {
            lastItem.classList.remove('menu-item-click');
            lastItem = element;
            element.classList.add('menu-item-click');
            toggleNav();
        });
    });
 
   
    function toggleNav() {
        navbarLinks.classList.toggle('active')
        
    }

    window.onscroll = function() {
        if (window.pageYOffset > 150) {
           backToTop.style.display = "block";
        }
        else {
         backToTop.style.display = "none";
        }
        lastItem.classList.remove('menu-item-click');
     }


}//end


  

