$.fn.commentCards = function(){

    return this.each(function(){
  
      var $this = $(this),
          $cards = $this.find('.card-znaki'),
          $current = $cards.filter('.card-znaki--current'),
          $next;
  
      $cards.on('click',function(){
        if ( !$current.is(this) ) {
          $cards.removeClass('card-znaki--current card-znaki--out card-znaki--next');
          $current.addClass('card-znaki--out');
          $current = $(this).addClass('card-znaki--current');
          $next = $current.next();
          $next = $next.length ? $next : $cards.first();
          $next.addClass('card-znaki--next');
        }
      });
  
      if ( !$current.length ) {
        $current = $cards.last();
        $cards.first().trigger('click');
      }
  
      $this.addClass('cards-znaki--active');
  
    })
  
  };
  
  $('.cards-znaki').commentCards();