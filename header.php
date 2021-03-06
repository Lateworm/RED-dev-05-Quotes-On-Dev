<?php
/**
 * The header for our theme.
 *
 * @package quotesondev
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
	<head>
		<meta charset="<?php bloginfo( 'charset' ); ?>">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="profile" href="http://gmpg.org/xfn/11">
		<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

	<?php wp_head(); ?>
	</head>

	<body <?php body_class(); ?>>
		<div id="page" class="hfeed site">
			<a class="skip-link screen-reader-text" href="#content"><?php esc_html( 'Skip to content' ); ?></a>

			<header id="masthead" class="site-header" role="banner">
				<div class="site-branding">
					<h1 class="site-title screen-reader-text"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
					<a href="<?php echo get_site_url() ?>" ><img class="site-description" src="<?php echo get_site_url().'/wp-content/themes/quotesondev/img/qod-logo.svg'; ?>"></img></a>
				</div><!-- .site-branding -->


			</header><!-- #masthead -->

			<div id="content" class="site-content">

				<div class="blockquote-marks">
				<i class="fa fa-quote-left blockquote-mark" aria-hidden="true"></i>
				<i class="fa fa-quote-right blockquote-mark" aria-hidden="true"></i>
			</div>
