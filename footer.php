<?php
/**
 * The template for displaying the footer.
 *
 * @package quotesondev
 */

?>

			</div><!-- #content -->

			<footer id="colophon" class="site-footer" role="contentinfo">
				<nav id="site-navigation" class="main-navigation" role="navigation">
					<?php wp_nav_menu( array( 'theme_location' => 'primary', 'menu_id' => 'primary-menu' ) ); ?>
					Brought to you by<a href="https://redacademy.com" target="_blank">&nbsp; RED Academy</a></span>
				</nav>
			</footer><!-- #colophon -->
		</div><!-- #page -->

		<?php wp_footer(); ?>

	</body>
</html>
