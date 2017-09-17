import checkIfElementExists from '../lib/checkIfElementExists';
import b from '../../support/customBrowser'

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
export default (method: string, value: string, element: string, done: any) => {
    /**
     * The command to perform on the browser object (addValue or setValue)
     * @type {String}
     */
    const command = (method === 'add') ? 'addValue' : 'setValue';
    
    checkIfElementExists(element, false, 1);

    if (!value) {
        b[command](element, '');
    } else {
        b[command](element, value);
    }

    done();
};
