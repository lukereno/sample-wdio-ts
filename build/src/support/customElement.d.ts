export default class CustomElement {
    eId: string;
    constructor(webElementId: string);
    elements(selector: string): CustomElement[];
    element(selector: string): CustomElement;
    private getElementTag();
    setValue(value: string): CustomElement;
    addValue(value: string): CustomElement;
    clearElement(): CustomElement;
}
