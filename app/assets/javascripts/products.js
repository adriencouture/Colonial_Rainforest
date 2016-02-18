$(document).on('page:load ready', function() {
  // $('#search-form').submit(function(event) {
  $('#search-form').on('submit', function(event) {
    event.preventDefault();
    var searchValue = $('#search').val();

    $.ajax({
      url: '/products?search=' + $('#search').val(),
      type: 'GET',
      dataType: 'script'
    });

    // $.getScript('/products?search=' + searchValue);

  });

  $(window).scroll(function() {
    var url = $('.pagination span.next').children().attr('href');
    if (url && $(window).scrollTop() > $(document).height() - $(window).height() - 50) {
      $('.pagination').text("Fetching more products...");
      return $.getScript(url);
    }
  });

  // $(window).scroll(function() {
  //       // console.log($(window).scrollTop());
  //       // console.log($(document).height() - $(window).height() - 50);
  //    if ($(window).scrollTop() > $(document).height() - $(window).height() - 50) {
  //       return alert('near bottom');
  //    }
  // });
});
