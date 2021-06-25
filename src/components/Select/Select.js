import React, { Component } from 'react';
import './Select.scss';


class Select extends React.Component {
    state = {
        isShown: false,
        isShow: false,
        countrieNames: {
            TestOne: false,
            TestTwo: false,
            TestThree: false,
            TestFour: false,
            TestFive: false,
            TestSix: false
        }
    }
    chclik = (e) => {
        var {name,checked} = e.target;

        this.setState((e)=>{
            var selectedCountrie = e.countrieNames;
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
        var displaySelect = Object.keys(this.state.countrieNames).filter((x)=>this.state.countrieNames[x]);
        return (
            <div className="select">
                <form>
                    <div className="res" ><button >{displaySelect+" "}</button></div>
                    <div class="multiselect">
                        <div class="selectBox" onClick={this.handleShownCountries} >
                            <select>
                                <option>All Countries</option>
                            </select>
                            <div class="overSelect"> </div>
                        </div>
                        <data id="checkboxes" className={this.state.isShown ? "show" : "hide"} >
                            <label><input type="checkbox" name="TEST1" onChange={this.chclik} />First checkbox</label>
                            <label><input type="checkbox" name="TEST2" onChange={this.chclik} />Second checkbox</label>
                            <label><input type="checkbox" name="TEST3" onChange={this.chclik} />Third checkbox</label>
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
                <form>
                    <div class="multiselect">
                        <div class="selectBox" onClick={this.handleShownSports} >
                            <select>
                                <option>All Sports</option>
                            </select>
                            <div class="overSelect"> </div>
                        </div>
                        <data id="checkboxes" className={this.state.isShow ? "show" : "hide"} >
                            <label><input type="checkbox" name="TEST4" onChange={this.chclik} />First checkbox</label>
                            <label><input type="checkbox" name="TEST5" onChange={this.chclik} />Second checkbox</label>
                            <label><input type="checkbox" name="TEST6" onChange={this.chclik} />Third checkbox</label>
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

export default Select;


