/*thanh*/
            function openNav() {
              document.getElementById("myTab").style.width = "300px";
            }
            
            function closeNav() {
              document.getElementById("myTab").style.width = "0";
            }



/*slide*/         
            function myFunction() {
              if (window.pageYOffset > sticky) {
                menu.classList.add("sticky");
              } else {
                menu.classList.remove("sticky");
              }
            }
