# Quotes on Dev Starter

A WordPress starter theme for the Quotes on Dev project, forked from Underscores.

## Installation

### 1. Download me (don't clone me!)

Then add me to your `wp-content/themes` directory.

### 2. Rename the `quotesondev-starter-master` directory

Make sure that the theme directory name is project appropriate! Do you need `starter` or `master` in the directory name?

### 3. Install the dev dependencies

Next you'll need to run `npm install` **inside your theme directory** to install the npm packages you'll need for Gulp, etc.

### 4. Update the proxy in `gulpfile.js`

Lastly, be sure to update your `gulpfile.js` with the appropriate URL for the Browsersync proxy (so change `localhost[:port-here]/[your-dir-name-here]` to the appropriate localhost URL).

And now would be a good time to `git init` :)


## Development

### To Do

- validate with Theme Check
- fix the error that displays when you try to submit while unauthenticated
- fix the error that's thrown by searching
- Display one item per page for the blog index and author archives, five items per page for category and tag archives, and ten items per page for search results
- try to find a way to make the slug always display, even on first load
- Tie the logo to the "Show Me Another" function
- experiment with .append() vs .text() - If I used .text() could I skip the .empty() step?
- update style.css header
- Upade @package declarations at the top of PHP files
- cross-browser testing
	- Does the submit form warn if you enter an invalid url?
- get nonces working for post method
- test cross-browser thoroughly
- enforce a maximum quote submission length
- prevent terms from appearing more than once in archives


### Dev Resources

- https://developer.mozilla.org/en-US/docs/Web/API/History_API
- https://github.com/CMB2/CMB2/wiki/Basic-Usage
- https://red-wdp.herokuapp.com/project/project-5-quotes-on-dev/