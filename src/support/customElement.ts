export default class CustomElement {
  public eId: string;

  constructor(webElementId: string) {
    this.eId = webElementId;
  }

  elements(selector: string): CustomElement[] {
    let x = browser.elementIdElements(this.eId, selector);
    return x.value.map((e) => new CustomElement(e.ELEMENT));
  }

  element(selector: string): CustomElement {
    let x = browser.elementIdElement(this.eId, selector);
    return new CustomElement(x.value.ELEMENT);
  }

  private getElementTag(): string {
    return browser.elementIdName(this.eId).value;
  }

  setValue(value: string): CustomElement {
    const eType = this.getElementTag();
    if (eType === 'web-component-input') {
    } else {
      browser
        .elementIdClear(this.eId)
        .elementIdValue(this.eId, value);
    }
    return this;
  }

  addValue(value: string): CustomElement {
    const eType = this.getElementTag();
    if (eType === 'web-component-input') {
    } else {
      browser.elementIdValue(this.eId, value);
    }
    return this;
  }

  clearElement(): CustomElement {
    browser.elementIdClear(this.eId);
    return this;
  }
}