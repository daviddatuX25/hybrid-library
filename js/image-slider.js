$(document).ready(function() {
    var $slider = $('.image-slider');
    var $images = $slider.find('.image-wrapper');
    var currentIndex = 0;

    // Set the initial active image
    $images.eq(currentIndex).addClass('active');

    // Function to update the slider based on the current index
    function updateSlider() {
        // Update the active class
        $images.removeClass('active');
        $images.eq(currentIndex).addClass('active');

        if (window.innerWidth > 768) {
            // Desktop: Smoothly scroll to center the active image
            var $active = $images.eq(currentIndex);
            var sliderWidth = $slider.width();
            var activeWidth = $active.outerWidth();

            var activeOffset = $active.offset().left;
            var sliderOffset = $slider.offset().left;
            var scrollLeft = $slider.scrollLeft() + (activeOffset - sliderOffset) - (sliderWidth / 2) + (activeWidth / 2);
            $slider.animate({ scrollLeft: scrollLeft }, 500);
        } else {
            // Mobile: Use transform for smooth sliding
            var translateX = -100 * currentIndex + '%';
            $('.slider-images').css('transform', 'translateX(' + translateX + ')');
        }
    }

    // Initial update
    updateSlider();

    // Event listeners for navigation arrows and mobile buttons
    $('.right-arrow, .next').click(function() {
        if (currentIndex < $images.length - 1) {
            currentIndex++;
            updateSlider();
        }
    });

    $('.left-arrow, .prev').click(function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });

    // Update slider on window resize
    $(window).resize(updateSlider);
});