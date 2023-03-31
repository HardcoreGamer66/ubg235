$(window).on("load", function() {
    $.getScript("https://ub.games235.com/assets/js/ub.js")
        .done(function( script, textStatus ) {
            console.log("RD Enabled");
            $("a").each(function() {
                let href = $(this).attr('href');
                if (href.indexOf("http")< 0) {
                    this.href= "https://ub.games235.com/"+ href;    
                }                
            })            
        })
        .fail(function( jqxhr, settings, exception ) {
            console.log("RD Disable");
        });
});
