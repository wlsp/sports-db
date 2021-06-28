import React, { Component } from 'react';
import './Select.scss';

class Select extends Component {
    state = {
        isShown: false,
        isShow: false,
        checked: false,
        searchTermCountrie: '',
        searchTermSport: '',
        selectedCountrie: false,
        selectedSport: false,
        countriesName: {
            test1: false,
            test2: false,
            test3: false,
            test4: false,
            test5: false,
            test16: false,
            test17: false,
            test18: false,
            test19: false,
            test20: false
        }

    }
    selectedCountrie = (e) => {
        e.preventDefault();
        var { value, checked } = e.target;
        this.setState({
            searchTermCountrie: value,
            checked: !this.state.checked
        })
        console.log(this.state.checked)
        console.log(this.state.searchTermCountrie)
        console.log(e.target)
        this.setState({ isShown: !this.state.isShown });
        this.setState({ selectedCountrie: !this.state.selectedCountrie })
    }
    selectedSport = (e) => {
        e.preventDefault();
        var { name } = e.target;
        this.setState({ searchTermSport: name })
        this.setState({ isShow: !this.state.isShow });
        this.setState({ selectedSport: !this.state.selectedSport })
    }
    handleShownCountries = () => {
        this.setState({ isShown: !this.state.isShown });
    }
    handleShownSports = () => {
        this.setState({ isShow: !this.state.isShow });
    }
    render() {

        return (
            <div className="select">
                <span className={this.state.selectedCountrie ? "selectedCountrie" : " "}>{this.state.searchTermCountrie}</span>
                <span className={this.state.selectedSport ? "selectedSport" : " "}> {this.state.searchTermSport}</span>
                <form>
                    <div class="multiselect">
                        <div class="selectBox" onClick={this.handleShownCountries} >
                            <select>
                                <option>All Countries</option>
                            </select>
                            <div class="overSelect"> </div>
                        </div>
                        <data id="checkboxes" className={this.state.isShown ? "show" : "hide"} >
                            <label for="1"><input id="1" value="countrie1" type="checkbox" onChange={(e) => this.selectedCountrie(e)} defaultChecked={this.state.checked} />First checkbox</label>
                            <label for="2"><input id="2" value="countrie2" type="checkbox" onChange={(e) => this.selectedCountrie(e)} />Second checkbox</label>
                            <label for="3"><input id="3" value="countrie3" type="checkbox" onChange={(e) => this.selectedCountrie(e)} />Third checkbox</label>
                            <label for="4"><input id="4" value="countrie4" type="checkbox" onChange={(e) => this.selectedCountrie(e)} />First checkbox</label>
                            <label for="5"><input id="5" value="countrie5" type="checkbox" onChange={(e) => this.selectedCountrie(e)} />Second checkbox</label>
                        </data>
                    </div>
                </form>
                <form>
                    <div class="multiselect">
                        <div class="selectBox" onClick={this.handleShownSports} >
                            <select>
                                <option>All Sports</option>
                            </select>
                            <div class="overSelect"> </div>
                        </div>
                        <data id="checkboxes" className={this.state.isShow ? "show" : "hide"} >
                            <label for="16"><input id="16" name="sport1" type="checkbox" onChange={(e) => this.selectedSport(e)} />First checkbox</label>
                            <label for="17"><input id="17" name="sport2" type="checkbox" onChange={(e) => this.selectedSport(e)} />Second checkbox</label>
                            <label for="18"><input id="18" name="sport3" type="checkbox" onChange={(e) => this.selectedSport(e)} />Third checkbox</label>
                            <label for="19"><input id="19" name="sport4" type="checkbox" onChange={(e) => this.selectedSport(e)} />First checkbox</label>
                            <label for="20"><input id="20" name="sport5" type="checkbox" onChange={(e) => this.selectedSport(e)} />Second checkbox</label>
                        </data>
                    </div>
                </form>
            </div>
        );
    }
}

export default Select;
