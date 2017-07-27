(function( $ ){

    'use strict';

    var shareLinks = {
        facebook: 'https://www.facebook.com/sharer/sharer.php?u=',
        twitter: 'https://twitter.com/home?status=',
        google: 'https://plus.google.com/share?url=',
        linkedin: 'https://www.linkedin.com/shareArticle?mini=true&url='
    };

    var Sofy = function ( options, el ) {

        var defaults = {
            facebookUrl: shareLinks.facebook,
            twitterUrl: shareLinks.twitter,
            googleUrl: shareLinks.google,
            linkedinUrl: shareLinks.linkedin,
            networkData: 'network',
            urlData: 'url',
            windowWidth: 350,
            windowHeight: 550
        };

        var settings = $.extend({}, defaults, options);

        $('.social-share').each(function(index, el) {
            var self = $(this);
            var currentUrl = window.location.href;

            self.attr('data-url', currentUrl);

            // In the case that you cannot add data attribute (like divi theme) just specify
            // the social media name as class, then it will add the right data attribute
            if (self.hasClass('facebook')){
              self.attr('data-network', 'facebook');
            }else if (self.hasClass('twitter')){
              self.attr('data-network', 'twitter');
            }else if (self.hasClass('linkedin')){
              self.attr('data-network', 'linkedin');
            }
          });

        if ( el.length > 0 ) {

            el.on('click', function(e){
                e.preventDefault();
                //debugger;

                var socialNetwork = $( this ).data( settings.networkData );
                var shareUrl = $( this ).data( settings.urlData );

                if ( socialNetwork == 'facebook' ) {
                    $( this ).attr( 'href', settings.facebookUrl + shareUrl );
                } else if ( socialNetwork == 'google' ) {
                    $( this ).attr( 'href', settings.googleUrl + shareUrl );
                } else if ( socialNetwork == 'twitter' ) {
                    $( this ).attr( 'href', settings.twitterUrl + shareUrl );
                } else if ( socialNetwork == 'linkedin' ) {
                    $( this ).attr( 'href', settings.linkedinUrl + shareUrl );
                } else {
                    console.log('Dont support the current social network :(');
                }

                var linkRef = $( this ).attr( 'href' );
                var windowSize = 'height=' + settings.windowHeight + ',width=' + settings.windowWidth + ',resizable=1';

                window.open(linkRef, socialNetwork, windowSize.toString());

            });
        }

    };

    $.fn.sofyShare = function ( options ) {

        return Sofy( options, $(this) );

    };

})( jQuery );
