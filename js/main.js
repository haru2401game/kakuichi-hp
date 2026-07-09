// スクロール表示

const targets = document.querySelectorAll(".fade");


const observer = new IntersectionObserver(
(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},
{
    threshold:0.2
});


targets.forEach(target=>{

    observer.observe(target);

});