const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')

    burger.addEventListener('click', () =>{

        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = ''
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
            }
        });

        //burger animation
        burger.classList.toggle('toggle');


    });
}

navSlide();

    // Define selector for selecting
        // anchor links with the hash
        let anchorSelector = 'a[href^="#"]';
     
        // Collect all such anchor links
        let anchorList =
            document.querySelectorAll(anchorSelector);
         
        // Iterate through each of the links
        anchorList.forEach(link => {
            link.onclick = function (e) {
     
                // Prevent scrolling if the
                // hash value is blank
                e.preventDefault();
         
                // Get the destination to scroll to
                // using the hash property
                let destination =
                    document.querySelector(this.hash);
         
                // Scroll to the destination using
                // scrollIntoView method
                destination.scrollIntoView({
                    behavior: 'smooth'
                    
                });
            }
        });