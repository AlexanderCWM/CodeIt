// FILTER
(function(){
    'use strict';
	var $ = jQuery;
	$.fn.extend({
		filterTable: function(){
			return this.each(function(){
				$(this).on('keyup', function(e){
					var $this = $(this), 
                        search = $this.val().toLowerCase(), 
                        target = $this.attr('data-filters'), 
                        $target = $(target), 
                        $item = $target.find('.card-item'),
                        item_name = $target.find('.card-item').find('.card-title'),
						pagList = $('.pagination_list'),
						pagNum = Number($('.pagination_list>li>a').text()),
						quantItemsForShow = 8,
						fullQuantityItems = $('.cards_list').find('.card-item').length,
						pagesQuantity = Math.ceil(fullQuantityItems/quantItemsForShow);
					if(search == '') {
						pagList.find('li a').removeClass('active');
						pagList.find('li:eq(0) a').addClass('active');
						$('.cards_list').find('.card-item').hide();
						$('.cards_list').find('.card-item').slice(0,quantItemsForShow).show();
                    } 
                    else {
						$item.each(function(){
							var $this = $(this);
							var showingCards = $this.find('.card-title').text().toLowerCase().indexOf(search);
							showingCards === -1 ? $this.hide() : $this.show();
							
							
						})
					}
				});
			});
		},
		itemCounter: function(){
			return this.each(function(){
				$(this).on('keyup', function(e){
			
					
				});
			});
		}
	});
	$('[data-action="filter"]').filterTable();
	$('[data-action="filter"]').itemCounter();


})(jQuery);
//FILTER END

// PAGINATION
function paginationFunc(e){
	
$(document).ready(function (){
	var quantItemsForShow = 8,
	fullQuantityItems = $('.cards_list').find('.card-item').length,
	pagesQuantity = Math.ceil(fullQuantityItems/quantItemsForShow),
	i,
	pagList = $('.pagination_list'),
	visibleDefault = $('.cards_list').find('.card-item');
	

	$('.cards_list').find('.card-item').slice(0,quantItemsForShow).show();

			for (i = 1; i<pagesQuantity+1; i++){
				$('<li><a href="#">'+ i +'</a></li>').appendTo(pagList);
			}
			$(document).on('change', function(){
				$(pagList).children().remove();
				for (i = 1; i<pagesQuantity+1; i++){
					$('<li><a href="#">'+ i +'</a></li>').appendTo(pagList);
				}
			})
			pagList.find('li:eq(0) a').addClass('active');

			$('.pagination_list>li>a').click(function(event){
				event.preventDefault();
				pagNum = Number($(this).text());
				$('.pagination_list li a').removeClass('active');
				$(this).addClass('active');
				if(pagNum === 1){
					$('.cards_list').find('.card-item').hide();
					$('.cards_list').find('.card-item').slice(0,quantItemsForShow).show();
				}
				else{
					$('.cards_list').find('.card-item').css({'display':'none'});
					$('.cards_list').find('.card-item').slice(quantItemsForShow*(pagNum-1),quantItemsForShow*pagNum).show();
				}
				console.log(typeof pagNum);
			});
});
}
paginationFunc();



// PAGINATION END

//DELETE ITEM 

	$('.card-btns a:first-child').click(function(e){
e.preventDefault();
	$(this).parent().parent().parent().parent().remove();
	console.log('1111')
	});
	$('.img_hover p').click(function(e){
		e.preventDefault();
			$(this).parent().parent().parent().parent().remove();
			console.log('1111')
			});



//DELETE ITEM END

//SLICK
$('.carousel_content').slick({

	infinite: true,
	autoplaySpeed:500,
	slidesToShow: 4,
	slidesToScroll: 1,
	arrows:false,
	autoplay:true,
	centerMode:false,
	responsive: [
	  {
		breakpoint: 1200,
		settings: {
		  slidesToShow: 3,
		  slidesToScroll: 3,
		}
	  },
	  {
		breakpoint: 600,
		settings: {
		  slidesToShow: 2,
		  slidesToScroll: 2
		}
	  },
	  {
		breakpoint: 480,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1
		}
	  }
	
	]
  });
//SLick END

// CLEAR_BTN
$(document).on('keyup', function(){
	if(	$('[data-action="filter"]').val().length > 0 ){
		$('.clear_filter').addClass('activated');
		console.log($('[data-action="filter"]').val().length);
	}
	else{	$('.clear_filter').removeClass('activated'); }
	
	
});
$('.clear_filter').click(function(e){

	if(	$('[data-action="filter"]').val.length > 0){
		e.preventDefault();
	$('[data-action="filter"]').val('');
	return paginationFunc();
	}
})
//CLEAR_BTN END
$( '[data-action="filter"]' ).focus(function() {

$('[data-action="filter"]').keypress(function (e) {
	if (e.which == 13) {
	  alert('1')
	}
  });
});

//  VALIDATE SUB

$(document).ready(function() {
	$('#email').change(function() {
		if($(this).val() != '') {
			var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
			if(pattern.test($(this).val())){	
				$(this).css({'border' : '1px solid #569b44'});
				
			} 
			else {
				$(this).css({'border' : '1px solid #ff0000'});
			}
		}
		 else {
			$(this).css({'border' : '1px solid #ff0000'});
		}
	});
});

//VALIDATE END