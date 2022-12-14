import React from 'react';
import { useHistory } from 'react-router-dom';
import { BiDrink } from 'react-icons/bi';
import { IoRestaurantOutline } from 'react-icons/io5';
import { MdTravelExplore } from 'react-icons/md';
import drinkIcon from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';

import '../Styles/Footer.css';

function Footer() {
  const history = useHistory();

  return (
    <footer data-testid="footer" className="footer">
      <button
        type="button"
        data-testid="drinks-bottom-btn"
        src={ drinkIcon }
        alt="Drink Icon"
        onClick={ () => history.push('/drinks') }
      >
        <BiDrink />
      </button>

      <button
        type="button"
        data-testid="explore-bottom-btn"
        src={ exploreIcon }
        alt="Explore Icon"
        onClick={ () => history.push('/explore') }
      >
        <MdTravelExplore />
      </button>

      <button
        data-testid="food-bottom-btn"
        type="button"
        src={ mealIcon }
        alt="Meal Icon"
        onClick={ () => history.push('/foods') }
      >
        <IoRestaurantOutline />
      </button>
    </footer>
  );
}

export default Footer;
