import React from 'react';
import './Select.scss';
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';

const options = [
    { label: 'Thing 1', value: 1 },
    { label: 'Thing 2', value: 2 },
];

const Select = () => {
    // var show = true;

    // function showCheckboxes() {
    //     var checkboxes =
    //         document.getElementById("checkBoxes");

    //     if (show) {
    //         checkboxes.style.display = "block";
    //         show = false;
    //     } else {
    //         checkboxes.style.display = "none";
    //         show = true;
    //     }
    // }
    return (
        
        <div>
            <ReactMultiSelectCheckboxes options={options} />

            {/* <form>
                <div class="multiselect">
                    <div class="selectBox" onClick={showCheckboxes()}>
                        <select>
                            <option>Select an option</option>
                        </select>
                        <div class="overSelect"></div>
                    </div>
                    <div id="checkboxes">
                        <label for="one">
                            <input type="checkbox" id="one" />First checkbox</label>
                        <label for="two">
                            <input type="checkbox" id="two" />Second checkbox</label>
                        <label for="three">
                            <input type="checkbox" id="three" />Third checkbox</label>
                    </div>
                </div>
            </form> */}
        </div>
    );
}

export default Select;

