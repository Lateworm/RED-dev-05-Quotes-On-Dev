<?php
/**
 * Quote Submission Page
 *
 * @package QOD_Starter_Theme
 */

get_header(); ?>

<div id="primary" class="content-area">
	<main id="main" class="site-main">
		<section>

			<header>
			<?php the_title( '<h1 class="entry-title">', '</h1>' ) ?>
			</header>

			<?php
				if( is_user_logged_in() && current_user_can( 'edit_posts' ) ):
			?>

			<div class="quote-submission-wrapper">
				<form name="quoteForm" id="quote-submission-form">

					<div>
						<label for="quote-author">Author of Quote:</label>
						<input type="text" name="quote-author" id="quote-author" >
					</div>

					<div>
						<label for="quote-content">Quote:</label>
						<textarea rows="3" cols="20" name="quote-content" id="quote-content" ></textarea>
					</div>

					<div>
						<label for="quote-source">Source of Quote (site name, social media name, etc...):</label>
						<input type="text" name="quote-source" id="quote-source" >
					</div>

					<div>
						<label for="quote-source-url">URL to Source:</label>
						<input type="url" name="quote-source-url" id="quote-source-url" >
					</div>

					<input type="submit" value="Submit Quote">
					<input type="reset" id="reset">

				</form>

				<p class="submit-status-message"></p>

			</div>

			<?php else: ?>

			<p>You must <?php echo sprintf( '<a href="%1s">%2s</a>', esc_url( wp_login_url() ), 'log in' )?> to post a quote.</p>

			<?php endif;?>

		</section>
	</main>
</div>



<?php get_footer(); ?>