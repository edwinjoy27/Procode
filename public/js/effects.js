function scrollFunction2() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
         document.getElementById("navbar").style.top = "0";
     } else {
                 document.getElementById("navbar").style.top = "-150px";
            }
    }
window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        const header=document.getElementById("header")
        header.style.fontSize = "20px";
        header.style.opacity = "0.3";
         } else {
                     header.style.fontSize = "60px";
                }
                scrollFunction2()   
            }
//window.onscroll = function() {scrollFunction2()};
    