/**
 * Check if the given elements contains text
 * @param  {String}   element   Element selector
 * @param  {String}   falseCase Whether to check if the content contains text
 *                              or not
 * @param  {Function} done      Function to execute when finished
 */
export default (element, falseCase, done) => {
    /**
     * The command to perform on the browser object
     * @type {String}
     */
    let command = 'getValue';

    if (browser.getAttribute(element, 'value') === null) {
        command = 'getText';
    }

    /**
     * Callback to trigger when done
     * @type {Function}
     */
    let doneCallback = done;

    /**
     * False case
     * @type {Boolean}
     */
    let boolFalseCase;

    /**
     * The text of the element
     * @type {String}
     */
    const text = browser[command](element);

    if (typeof falseCase === 'function') {
        doneCallback = falseCase;
        boolFalseCase = false;
    } else {
        boolFalseCase = !!falseCase;
    }

    if (boolFalseCase) {
        expect(text).to.equal('');
    } else {
        expect(text).to.not.equal('');
    }

    doneCallback();
};
