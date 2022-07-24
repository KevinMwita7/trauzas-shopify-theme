document.addEventListener('DOMContentLoaded', function() {
    let swiper = new Swiper('.collection-list-swiper', {
        slidesPerView: 2,
        spaceBetween: 30,
        // If we need pagination
        pagination: {
          el: '.collection-list-swiper-pagination',
          clickable: true,
        },
    });

    if(Shopify.designMode) {
      document.addEventListener("shopify:section:load", function (event) {
        swiper = new Swiper('.swiper', options);
      });
  
      document.addEventListener("shopify:section:unload", function (event) {
          swiper.destroy();
      });
          
      document.addEventListener("shopify:block:select", function(event) {
        var block = JSON.parse(event.target.dataset.shopifyEditorBlock);
        if(block.type === "banner_slide") {
          console.log("Swiper block is", event.target.dataset.slideIndex)
          swiper.slideTo(+event.target.dataset.slideIndex);
        }
      });
    }
});