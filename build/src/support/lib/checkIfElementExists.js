"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
//declare var expect: Chai
/**
 * Check if the given element exists in the DOM one or more times
 * @param  {String}  element  Element selector
 * @param  {Boolean} falsCase Check if the element (does not) exists
 * @param  {Number}  exactly  Check if the element exists exactly this number
 *                            of times
 */
exports.default = (element, falsCase, exactly) => {
    /**
     * The number of elements found in the DOM
     * @type {Int}
     */
    const nrOfElements = browser.elements(element).value;
    if (falsCase === true) {
        chai_1.expect(nrOfElements).to.have.lengthOf(0, `Element with selector "${element}" should not exist on the page`);
    }
    else if (exactly) {
        chai_1.expect(nrOfElements).to.have.lengthOf(exactly, `Element with selector "${element}" should exist exactly ` +
            `${exactly} time(s)`);
    }
    else {
        chai_1.expect(nrOfElements).to.have.length.of.at.least(1, `Element with selector "${element}" should exist on the page`);
    }
};
