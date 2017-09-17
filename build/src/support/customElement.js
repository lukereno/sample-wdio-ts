"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CustomElement {
    constructor(webElementId) {
        this.eId = webElementId;
    }
    elements(selector) {
        let x = browser.elementIdElements(this.eId, selector);
        return x.value.map((e) => new CustomElement(e.ELEMENT));
    }
    element(selector) {
        let x = browser.elementIdElement(this.eId, selector);
        return new CustomElement(x.value.ELEMENT);
    }
    getElementTag() {
        return browser.elementIdName(this.eId).value;
    }
    setValue(value) {
        const eType = this.getElementTag();
        if (eType === 'web-component-input') {
        }
        else {
            browser
                .elementIdClear(this.eId)
                .elementIdValue(this.eId, value);
        }
        return this;
    }
    addValue(value) {
        const eType = this.getElementTag();
        if (eType === 'web-component-input') {
        }
        else {
            browser.elementIdValue(this.eId, value);
        }
        return this;
    }
    clearElement() {
        browser.elementIdClear(this.eId);
        return this;
    }
}
exports.default = CustomElement;
