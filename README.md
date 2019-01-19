# boilerplate
Boilerplate for custom element repos.

To set up a new custom element:

1. Open `karma.base.js` and change line 8, `sauceConfiguration.testName` to reflect the correct element
2. In each of the `karma.conf.**.**` files, change the path on line 6 to the point to the correct element
3. In the `test` folder, replace all references to `AuthorElement` in all instances of `sanity.js` with the correct class
4. In the same folder, update the script tags in each instance of `test.html` to point to the correct file
5. In `rollup.release.config.js` change the variable declarations at the top to point to the correct file
