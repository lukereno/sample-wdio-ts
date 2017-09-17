import CustomElement from './customElement';
export default class CustomBrowser {
    elements(selector: string): CustomElement[];
    element(selector: string): CustomElement;
    clearElement(selector: string): CustomElement;
    setValue(selector: string, value: string): CustomElement;
    addValue(selector: string, value: string): CustomElement;
}
