// =====================
// Scroll Fade Animation
// =====================


const targets = document.querySelectorAll(".fade");


const observer = new IntersectionObserver(
(entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.classList.add("show");


            observer.unobserve(entry.target);


        }


    });


},
{
    threshold:0.2
});



targets.forEach(target=>{

    observer.observe(target);

});







// =====================
// Header Scroll Effect
// =====================


const header = document.querySelector("header");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 100){

        header.classList.add("scrolled");


    }else{

        header.classList.remove("scrolled");

    }


});







// =====================
// Food Animation
// =====================


const foods = document.querySelectorAll(".food");


const foodObserver = new IntersectionObserver(
(entries)=>{


    entries.forEach((entry,index)=>{


        if(entry.isIntersecting){


            setTimeout(()=>{

                entry.target.classList.add("show");


            },index * 200);



            foodObserver.unobserve(entry.target);


        }


    });


},
{
    threshold:0.2
});



foods.forEach(food=>{


    foodObserver.observe(food);


});







// =====================
// Smooth Scroll
// =====================


document.querySelectorAll('a[href^="#"]')
.forEach(link=>{


    link.addEventListener("click",(e)=>{


        e.preventDefault();


        const target =
        document.querySelector(
            link.getAttribute("href")
        );


        target.scrollIntoView({

            behavior:"smooth"

        });


    });


});







// =====================
// Food Image Lightbox
// =====================


const images = document.querySelectorAll(".gallery-image");


images.forEach(image=>{


    image.addEventListener("click",()=>{


        const modal = document.createElement("div");

        modal.className="image-modal";


        const modalImage = document.createElement("img");

        modalImage.src = image.src;


        modal.appendChild(modalImage);


        document.body.appendChild(modal);



        modal.addEventListener("click",()=>{

            modal.remove();

        });


    });


});