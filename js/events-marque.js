$(document).ready(function() {
    const $marqueeInner = $('.marquee-inner');
    const $cards = $marqueeInner.children('.event-card').clone();
    $marqueeInner.append($cards);
});