import React, { Component } from 'react';
import './Select.scss';


class Select extends Component {
    state = {
        isShown: false,
        isShow: false,
        selected: [],
       countriesName: {
           test1: false,
           test2: false,
           test3: false,
           test4: false,
           test5: false,
           test6: false,
           test7: false,
           test8: false,
           test9: false,
           test10: false,
           test11: false,
           test12: false,
           test13: false,
           test14: false,
           test15: false,
           test16: false,
           test17: false,
           test18: false,
           test19: false,
           test20: false
       }
       
    }
    selectedCountrie = (e) => {
        var {name, checked} = e.target;
        this.setState((e)=>{
            var selectedCountrie = e.countriesName;
            console.log(name.toUpperCase())
            this.setState({ isShown: !this.state.isShown });
            return selectedCountrie[name]=checked;
        });
    }
    selectedSport = (e) => {
        var {name, checked} = e.target;
        this.setState((e)=>{
            var selectedCountrie = e.countriesName;
            console.log(name.toUpperCase())
            this.setState({ isShow: !this.state.isShow });
            return selectedCountrie[name]=checked;
        });
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
                <form>
                    <div className="res" ></div>
                    <div class="multiselect">
                        <div class="selectBox" onClick={this.handleShownCountries} >
                            <select>
                                <option>All Countries</option>
                            </select>
                            <div class="overSelect"> </div>
                        </div>
                        <data id="checkboxes" className={this.state.isShown ? "show" : "hide"} >
                            <label for="1"><input id="1" name="countrie1" type="checkbox" onChange={this.selectedCountrie} />First checkbox</label>
                            <label for="2"><input id="2" name="countrie2" type="checkbox" onChange={this.selectedCountrie} />Second checkbox</label>
                            <label for="3"><input id="3" name="countrie3" type="checkbox" onChange={this.selectedCountrie} />Third checkbox</label>
                            <label for="4"><input id="4" name="countrie4" type="checkbox" onChange={this.selectedCountrie} />First checkbox</label>
                            <label for="5"><input id="5" name="countrie5" type="checkbox" onChange={this.selectedCountrie} />Second checkbox</label>
                            <label for="6"><input id="6" name="countrie6" type="checkbox" onChange={this.selectedCountrie} />Third checkbox</label>
                            <label for="7"><input id="7" name="countrie7" type="checkbox" onChange={this.selectedCountrie} />First checkbox</label>
                            <label for="8"><input id="8" name="countrie8" type="checkbox" onChange={this.selectedCountrie} />Second checkbox</label>
                            <label for="9"><input id="9" name="countrie9" type="checkbox" onChange={this.selectedCountrie} />Third checkbox</label>
                            <label for="10"><input id="10" name="countrie10" type="checkbox" onChange={this.selectedCountrie} />First checkbox</label>
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
                            <label for="16"><input id="16" name="sport1" type="checkbox" onChange={this.selectedSport} />First checkbox</label>
                            <label for="17"><input id="17" name="sport2" type="checkbox" onChange={this.selectedSport} />Second checkbox</label>
                            <label for="18"><input id="18" name="sport3" type="checkbox" onChange={this.selectedSport} />Third checkbox</label>
                            <label for="19"><input id="19" name="sport4" type="checkbox" onChange={this.selectedSport} />First checkbox</label>
                            <label for="20"><input id="20" name="sport5" type="checkbox" onChange={this.selectedSport} />Second checkbox</label>
                            <label for="21"><input id="21" name="sport6" type="checkbox" onChange={this.selectedSport} />Third checkbox</label>
                            <label for="22"><input id="22" name="sport7" type="checkbox" onChange={this.selectedSport} />First checkbox</label>
                            <label for="23"><input id="23" name="sport8" type="checkbox" onChange={this.selectedSport} />Second checkbox</label>
                            <label for="24"><input id="24" name="sport9" type="checkbox" onChange={this.selectedSport} />Third checkbox</label>
                            <label for="25"><input id="25" name="sport10" type="checkbox" onChange={this.selectedSport} />First checkbox</label>
                        </data>
                    </div>
                </form>
            </div>
        );
    }
}

export default Select;


