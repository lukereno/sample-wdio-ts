import CustomElement from './customElement';

export default class CustomBrowser {
  elements(selector: string): CustomElement[] {
    let x = browser.elements(selector);
    return x.value.map((i) => new CustomElement(i.ELEMENT));
  }

  element(selector: string): CustomElement {
    let x = browser.element(selector);
    return new CustomElement(x.value.ELEMENT);
  }

  clearElement(selector: string): CustomElement {
    return this.element(selector).clearElement();
  }

  setValue(selector: string, value: string): CustomElement {
    return this.element(selector).setValue(value);
  }

  addValue(selector: string, value: string): CustomElement {
    return this.element(selector).addValue(value);
  }
}


//export default new CustomBrowser();