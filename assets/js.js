document.addEventListener("DOMContentLoaded", function() {
    var numberFirst = document.querySelector(".number-increase");
    var numberthird = document.querySelector(".number-participants");
  
    var updateCount = () => {
      var valuethird = parseInt(numberthird.dataset.val);
      var svalue = parseInt(numberFirst.textContent.slice(1));
      let ivalue = 0;
      let increaseTimeout;
      let delay;
  
      function increaseCount() {
        ivalue += 1;
        if (ivalue < 63) {
          delay = 40;
        } else {
          delay = 8000;
          svalue += Math.random()*0.3;
        }
  
        numberthird.textContent = ivalue;
        numberFirst.textContent = "$" + svalue.toFixed(2);
        increaseTimeout = setTimeout(increaseCount, delay);
      }
  
      increaseCount();
    };
  
    updateCount();


    var wrapper = document.querySelector(".wrapper");
    var carousel = document.querySelector(".carousel");
    var firstCardWidth = carousel.querySelector(".card").offsetWidth;
    var arrowBtns = document.querySelectorAll(".wrapper ion-icon");
    var carouselChildrens = [...carousel.children];

    let isDragging = false, startX, startScrollLeft;


    let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

    carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
        carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
    });

    carouselChildrens.slice(0, cardPerView).forEach(card => {
        carousel.insertAdjacentHTML("beforeend", card.outerHTML);
    });
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");




    arrowBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
        });
    });




    var dragStart = (e) => {
        isDragging = true;
        carousel.classList.add("dragging");
        startX = e.pageX;
        startScrollLeft = carousel.scrollLeft;
    }

    var dragging = (e) => {
        if(!isDragging) return;
        carousel.scrollLeft = startScrollLeft - (e.pageX - startX); //true
    }

    const dragStop = () => {
        isDragging = false;
        carousel.classList.remove("dragging");
    }




    const infiniteScroll = () => {
        // If the carousel is at the beginning, scroll to the end
        if(carousel.scrollLeft === 0) {
            carousel.classList.add("no-transition");
            carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
            carousel.classList.remove("no-transition");
        } 
        // If the carousel is at the end, scroll to the beginning
        else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
            carousel.classList.add("no-transition");
            carousel.scrollLeft = carousel.offsetWidth;
            carousel.classList.remove("no-transition");
        }

    }


    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);
    carousel.addEventListener("scroll", infiniteScroll);

});