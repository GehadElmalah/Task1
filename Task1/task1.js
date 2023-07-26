
const sections= document.querySelectorAll('section');








// Scroll to anchor ID using scrollTO event



 function toSection () {
	 
	 let scrollY = window.pageYOffset;
    document.querySelectorAll(".navelement").forEach((item) => {    //iterate over each item in the list
        item.addEventListener("click", function (event) {           //respond to this function after clicking on any section
            event.preventDefault();
            document.querySelector(item.getAttribute("href")).scrollIntoView({         //go to the appropriate section 
                behavior: "smooth",	
            });
        });
    });
}









// Scroll to section on link click
toSection();


 




