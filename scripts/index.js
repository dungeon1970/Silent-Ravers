window.onload=function(){

    const showMenuToggle = document.getElementsByClassName('toggle-button')[0];
    const navbarLinks = document.getElementById('navbar-links');
    const backToTop = document.getElementById('back-top');
    const menuItem = [].slice.call(document.getElementsByClassName("menu-item"));
    const homePage = document.getElementById('home');

    let lastItem = menuItem[0];


    showMenuToggle.addEventListener('click', () => {
        toggleNav();
    })


    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    })
   
    
    homePage.addEventListener('click', () => {
        loadHome('main', 'home.html');
    })


    menuItem.forEach((element, index) => {
        element.addEventListener("click", () => {
            let page = element.id + ".html";
            loadHome('main', page);
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
        navbarLinks.classList.remove('active')
     }



     async function fetchHtmlAsText(url) {
        return await (await fetch(url)).text();
    }
    
    async function loadHome(id, page) {
        const contentDiv = document.getElementById(id);
        contentDiv.innerHTML = await fetchHtmlAsText(page);
    }








}//end