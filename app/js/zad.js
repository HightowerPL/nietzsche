var produkty = '{ "products" : [' +
'{"name":"PROD1", "link":"link1" },' +
'{"name":"PROD2", "link":"link2" },' +
'{"name":"PROD3", "link":"link3" } ]}';

$('.goButton').on('click', function(){
  var resultQ1 = $('.q1').is(':checked') ? 1:0;
  var resultQ2 = $('.q2').is(':checked') ? 1:0;
  var resultQ3 = $('.q3').is(':checked') ? 1:0;
  var resultQ4 = $('.q4').is(':checked') ? 1:0;
  var resultAll = resultQ1*1 + resultQ2*2 + resultQ3*3 + resultQ4*4;

  var d = JSON.parse(produkty);

  if (((resultQ2 == 1) && (resultQ4 == 1))&&((resultQ1 == 0) && (resultQ3 == 0))){
    $('.prodTxt').html(d.products[0].name);
    $('.linkTxt').html(d.products[0].link);
  } else if(resultAll >= 5){
    $('.prodTxt').html(d.products[2].name);
    $('.linkTxt').html(d.products[2].link);
  } else if(resultAll >= 3){
    $('.prodTxt').html(d.products[1].name);
    $('.linkTxt').html(d.products[1].link);
  } else {
    $('.prodTxt').html(d.products[0].name);
    $('.linkTxt').html(d.products[0].link);
  }
});
