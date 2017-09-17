/**
 * Delete a cookie
 * @param  {String}   name The name of the cookie to delete
 * @param  {Function} done Function to execute when finished
 */
export default (name, done) => {
    browser.deleteCookie(name);

    done();
};
