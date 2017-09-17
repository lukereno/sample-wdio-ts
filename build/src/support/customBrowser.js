"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const customElement_1 = require("./customElement");
class CustomBrowser {
    elements(selector) {
        let x = browser.elements(selector);
        return x.value.map((i) => new customElement_1.default(i.ELEMENT));
    }
    element(selector) {
        let x = browser.element(selector);
        return new customElement_1.default(x.value.ELEMENT);
    }
    clearElement(selector) {
        return this.element(selector).clearElement();
    }
    setValue(selector, value) {
        return this.element(selector).setValue(value);
    }
    addValue(selector, value) {
        return this.element(selector).addValue(value);
    }
}
exports.default = CustomBrowser;
//export default new CustomBrowser(); 
