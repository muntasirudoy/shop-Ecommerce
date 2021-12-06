var search_content = [
    { title: 'Apple' },
    { title: 'Onion' },
    { title: 'Potato' },
    { title: 'Orange' },
    { title: 'banana' },
    { title: 'Lichu' },
    { title: 'Mango' },
    // etc
  ];


$('.ui.search')
  .search({
    source: search_content
  })
;


$('.ui.dropdown')
  .dropdown()
;


$('.menu > .ui.dropdown').dropdown({
  on: 'hover'
});




$('.example').popup({
  inline   : true,
  hoverable: true,
  position : 'bottom left',
  delay: {
    show: 300,
    hide: 300
   }
   });

   $('.activating.element')
   .popup()
 ;
 
 $('.boundary')
  .popup({
    boundary: ' .example '
  })
;