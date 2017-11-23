(function($){

	$('button').click(function(event) {
		event.preventDefault();

			$.ajax({
				url: api_vars.root_url + 'wp/v2/posts?filter[orderby]=rand&filter[posts_per_page]=1', // api_vars is defined in function.php, original filters are in extras.php 
				method: 'GET',

				}).done(function(data) {
					

					var content = data[0].content.rendered;
					var title = data[0].title.rendered;
					var source = data[0]._qod_quote_source;
					var sourceUrl = data[0]._qod_quote_source_url;

	


					$('.entry-content').empty();
					$('.entry-content').append(content);

					$('.entry-title').empty();
					$('.entry-title').append('&mdash; ' + title);

					$('.source').empty();

					if ( source.length>0 && sourceUrl.length >0 ) {
						$('.source').append( ', <a href="' + sourceUrl + '">' + source + '</a>' );

					} else if ( source.length>0 ) {
						$('.source').append( ', ' + source );
						
					} else if ( sourceUrl.length>0 ) {
						$('.source').append( ', <a href="' + sourceUrl + '">' + '[source]' + '</a>' );	
					}



					$('.source')


				}).fail(function() {
					$('.entry-content').empty();
					$('.entry-title').empty();
					$('.source').empty();

					$('.entry-content').append( 'The major difference between a thing that might go wrong and a thing that cannot possibly go wrong is that when a thing that cannot possibly go wrong goes wrong it usually turns out to be impossible to get at or repair.' );
					$('.entry-title').append( '&mdash; ' + 'Douglas Adams' );
					$('.source').append( '<span class="error">// There\'s been an error. Have you tried turning it off and back on again?</span>');

				}).always(function() {

			}); // end of "Show Me Another" ajax


	});

})(jQuery);