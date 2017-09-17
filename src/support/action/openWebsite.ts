/**
 * Open the given URL
 * @param  {String}   type Type of navigation (url or site)
 * @param  {String}   page The URL to navigate to
 * @param  {Function} done Function to execute when finished
 */
export default (type: string, page: string, done: any) => {
    /**
     * The URL to navigate to
     * @type {String}
     */
    const url = (type === 'url') ? page : browser.options.baseUrl + page;

    browser.url(url);

    done();
};
