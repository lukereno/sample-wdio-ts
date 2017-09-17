"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const checkIfElementExists_1 = require("../lib/checkIfElementExists");
const customBrowser_1 = require("../../support/customBrowser");
// declare var browserB: MyTypes.;
// declare var bad: MyTypesbbb
//declare var fdafs: global;
/**
 * Set the value of the given input field to a new value or add a value to the
 * current element value
 * @param  {String}   method  The method to use (add or set)
 * @param  {String}   value   The value to set the element to
 * @param  {String}   element Element selector
 * @param  {Function} done    Function to execute when finished
 */
exports.default = (method, value, element, done) => {
    /**
     * The command to perform on the browser object (addValue or setValue)
     * @type {String}
     */
    const command = (method === 'add') ? 'addValue' : 'setValue';
    checkIfElementExists_1.default(element, false, 1);
    if (!value) {
        customBrowser_1.default[command](element, '');
    }
    else {
        customBrowser_1.default[command](element, value);
    }
    done();
};
