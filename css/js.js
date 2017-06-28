'use strict';

$(function () {
    
    $('#przycisk').click(function(){
    $("p:nth-child(5)").prependTo("#kontener");
    });
    
    $('#cofnij').click(function(){
    $( "p:nth-child(1)" ).appendTo( "#kontener" );
    });
        
});