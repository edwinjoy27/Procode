// function scrollFunction2() {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//          document.getElementById("navbar").style.top = "0";
//      } else {
//                  document.getElementById("navbar").style.top = "-150px";
//             }
//     }
window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        const header=document.getElementById("header")
        header.style.fontSize = "20px";
       
         } else {
                     header.style.fontSize = "60px";
                }
                // scrollFunction2()   
            }

var display_box = document.getElementsByClassName('vis')

console.log(display_box)

display_box[0].addEventListener('click', () => {

    window.location.href = '/algorithm'
})             



display_box[1].addEventListener('click', () => {

    window.location.href = '/regex'
})             



display_box[2].addEventListener('click', () => {

    window.location.href = '/binary'
})             
