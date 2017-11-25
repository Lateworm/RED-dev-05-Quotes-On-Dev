(function($){

	$('button').click(function(event) { // "Show Me Another"
		event.preventDefault();

		$.ajax({
			method: 'GET',
			url: api_vars.root_url + 'wp/v2/posts?filter[orderby]=rand&filter[posts_per_page]=1', // api_vars is defined in function.php, original filters are in extras.php 

			}).done(function(data) {
				
				var content = data[0].content.rendered;
				var title = data[0].title.rendered;
				var source = data[0]._qod_quote_source;
				var sourceUrl = data[0]._qod_quote_source_url;
				var slug = data[0].slug;
				var sluggedUrl = api_vars.home_url + "/" + slug + "/";

				$('.index-entry-content').empty();
				$('.index-entry-content').append(content);

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

				history.pushState(null, null, sluggedUrl);

			}).fail(function() {
				$('.entry-content').empty();
				$('.entry-title').empty();
				$('.source').empty();

				$('.entry-content').append( 'The major difference between a thing that might go wrong and a thing that cannot possibly go wrong is that when a thing that cannot possibly go wrong goes wrong it usually turns out to be impossible to get at or repair.' );
				$('.entry-title').append( '&mdash; ' + 'Douglas Adams' );
				$('.source').append( '<span class="error">// There\'s been an error. Have you tried turning it off and back on again?</span>');

			}).always(function() { 

		});

	}); // end of "Show Me Another" button-click functionality


	$('#quote-submission-form').on('submit', function(event) { // Submit a new quote // try click of button
		event.preventDefault();

		var title = $('#quote-author').val(); // The quote author's name goes in the "Title" field of the WP post
		var content = $('#quote-content').val();
		var _qod_quote_source = $('#quote-source').val(); // Might need "_qod_" prefix for cmb2 fields?
		var _qod_quote_source_url = $('#quote-source-url').val();

		$.ajax({
			method: 'POST',
			url: api_vars.root_url + 'wp/v2/posts',
			data: { // create the data object to be pushed
				title: title,
				content: content,
				_qod_quote_source: _qod_quote_source, 
				_qod_quote_source_url: _qod_quote_source_url, 
				status: 'publish'
				},
			beforeSend: function(xhr) { // copied from the slides....
				xhr.setRequestHeader( 'X-WP-Nonce', api_vars.nonce );
				}

		}).done(function() {
			$('.submit-status-message').append( api_vars.success );
			// trigger reset?
		
		}).fail(function() {
			$('.submit-status-message').append( api_vars.failure )
		})
	})





	

})(jQuery);