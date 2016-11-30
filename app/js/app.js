$(document).ready(function(){
  var covers  = ["images/cover1.jpg", "images/cover2.jpg", "images/cover3.jpg", "images/cover4.jpg", "images/cover5.jpg", "images/cover6.jpg", "images/cover7.jpg", "images/cover8.jpg"];
  var prices = ['19.99', '23.99', '33.99', '43.99', '53.99', '63.99', '73.99', '83.99']
  var i = 0;

  function coverChange() {
    if (i == covers.length){
      i=0;
    } else if(i<0){
      i = covers.length - 1;
    }
    $('.amount').text(prices[i]);
    $('.bookCover').fadeOut(500, function(){
      $(this).attr('src', covers[i]);
    }).fadeIn(1000);
  }

  $('.btnNext').on('click', function(){
    $(this).animate({left: '10px'}, 'fast');
    $(this).animate({left: '-10px'}, 'fast');
    i++;
    coverChange();
  });
  $('.btnBack').on('click', function(){
    $(this).animate({left: '-10px'}, 'fast');
    $(this).animate({left: '10px'}, 'fast');
    i--;
    coverChange();
  });
});
