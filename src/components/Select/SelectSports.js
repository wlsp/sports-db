import React, { Component } from 'react';
import './Select.scss';

// const countries = [
//       { label: 'Andorra', value: 1 },
//       { label: 'United Arab Emirates', value: 2 },
//       { label: 'Afghanistan', value: 3 },
//       { label: 'Antigua and Barbuda', value: 4 },
//       { label: 'Anguilla', value: 5 },
//       { label: 'Albania', value: 6 },
//       { label: 'Armenia', value: 7 },
//       { label: 'Angola', value: 8 },
//     ];

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

class SelectSports extends Component {
    state = {
        isShow: false
    }
    handleShownSports = () => {
        this.setState({ isShow: !this.state.isShow });
    }
    render() {
        return (
            <div className="select">
                    <form>
                        <div class="multiselect">
                            <div class="selectBox" onClick={this.handleShownSports} >
                                <select>
                                    <option>All Sports</option>
                                </select>
                                <div class="overSelect"> </div>
                            </div>
                            <data id="checkboxes" className={this.state.isShow ? "show" : "hide"} >
                                <label><input type="checkbox" />First checkbox</label>
                                <label><input type="checkbox" />Second checkbox</label>
                                <label><input type="checkbox" />Third checkbox</label>
                                <label><input type="checkbox" />First checkbox</label>
                                <label><input type="checkbox" />Second checkbox</label>
                                <label><input type="checkbox" />Third checkbox</label>
                                <label><input type="checkbox" />First checkbox</label>
                                <label><input type="checkbox" />Second checkbox</label>
                                <label><input type="checkbox" />Third checkbox</label>
                                <label><input type="checkbox" />First checkbox</label>
                                <label><input type="checkbox" />Second checkbox</label>
                                <label><input type="checkbox" />Third checkbox</label>
                                <label><input type="checkbox" />First checkbox</label>
                                <label><input type="checkbox" />Second checkbox</label>
                                <label><input type="checkbox" />Third checkbox</label>
                            </data>
                        </div>
                    </form>
                </div>
        );
    }
}

export default SelectSports;