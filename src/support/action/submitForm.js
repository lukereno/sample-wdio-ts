/**
 * Submit the given form
 * @param  {String}   form Form element selector
 * @param  {Function} done Function to execute when finished
 */
export default (form, done) => {
    browser.submitForm(form);

    done();
};
