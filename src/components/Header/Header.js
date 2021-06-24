import React from 'react'
import HeaderImg from '../../images/header-img.png'
import ArrowLogo from '../../images/arrow-logo.svg'
import UpArrow from '../../images/up-arrow.svg'
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';

const countries = [
    { countries: 'Thing 1', value: 1 },
    { countries: 'Thing 2', value: 2 },
];

const sports = [
    { sports: 'Thing 1', value: 1 },
    { sports: 'Thing 2', value: 2 },
]

const Header = () => {
    return (
        <header>
            <nav>
                <span>
                    <img src={ArrowLogo} alt="" />
                    <h4>Sports.db</h4>
                </span>
                <form className="search-box">
                    <input className="search" type="text"></input>
                    <span className="search-btn"></span>
                </form>
            </nav>
            <figure>
                <img src={HeaderImg} alt="" />
            </figure>
            <article>
                <h1>
                    Find Your League
                </h1>
            </article>
            <figure>
                <img src={UpArrow} alt="" />
            </figure>

            <ReactMultiSelectCheckboxes options={countries} />
            
            <ReactMultiSelectCheckboxes options={sports} />

            <select name="all-countries" id="countries">
                <option value="">All Countries</option>
                <option value="andorra">Andorra</option>
                <option value="uae">United Arab Emirates</option>
                <option value="afghanistan">Afghanistan</option>
                <option value="antiguaBarbuda">Antigua and Barbuda</option>
                <option value="anguilla">Anguilla</option>
                <option value="albania">Albania</option>
                <option value="armenia">Armenia</option>
                <option value="angola">Angola</option>
            </select>
            <select name="all-sports" id="sports" placeholder="All Sports">
                <option value="">All Sports</option>
                <option value="soccer">Soccer</option>
                <option value="motorsport">Motorsport</option>
                <option value="fighthing">Fighthing</option>
                <option value="baseball">Baseball</option>
                <option value="basketball">Basketball</option>
                <option value="af">American Football</option>
                <option value="ih">Ice Hockey</option>
                <option value="golf">Golf</option>
            </select>

            <form>
                <div class="multipleSelection">
                    <div class="selectBox"
                        onclick="showCheckboxes()">
                        <select>
                            <option>Select options</option>
                        </select>
                        <div class="overSelect"></div>
                    </div>

                    <div id="checkBoxes">
                        <label for="first">
                            <input type="checkbox" id="first" />
                            checkBox1
                        </label>

                        <label for="second">
                            <input type="checkbox" id="second" />
                            checkBox2
                        </label>
                        <label for="third">
                            <input type="checkbox" id="third" />
                            checkBox3
                        </label>
                        <label for="fourth">
                            <input type="checkbox" id="fourth" />
                            checkBox4
                        </label>
                    </div>
                </div>
            </form>
        </header>
    );
}

export default Header;