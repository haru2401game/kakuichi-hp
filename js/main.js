// =====================
// Scroll Fade Animation
// =====================


const targets = document.querySelectorAll(".fade");


const observer = new IntersectionObserver(
    (entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

                // 一度表示したら監視解除
                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold:0.2
    }
);



targets.forEach(target=>{

    observer.observe(target);

});







// =====================
// Header Scroll Effect
// =====================


const header = document.querySelector("header");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 100){

        header.style.background =
        "rgba(20,20,20,0.95)";

        header.style.transition =
        "0.3s";


    }else{


        header.style.background =
        "linear-gradient(rgba(0,0,0,0.35),transparent)";


    }


});








// =====================
// Food Card Animation
// =====================


const foods = document.querySelectorAll(".food");


const foodObserver = new IntersectionObserver(
(entries)=>{


    entries.forEach((entry,index)=>{


        if(entry.isIntersecting){


            setTimeout(()=>{

                entry.target.style.opacity="1";

                entry.target.style.transform=
                "translateY(0)";


            },index * 200);



            foodObserver.unobserve(entry.target);


        }


    });


},
{
    threshold:0.2
});




foods.forEach(food=>{


    food.style.opacity="0";

    food.style.transform=
    "translateY(40px)";


    food.style.transition=
    "0.8s";


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