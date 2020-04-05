import React from 'react';
import PropTypes from 'prop-types';

import pantryIcon from 'assets/bottles_icon.svg';
import breadIcon from 'assets/bread_icon.svg';
import diaryIcon from 'assets/diary_icon.svg';
import fruitIcon from 'assets/fruit_icon.svg';
import homeIcon from 'assets/home_icon.svg';
import meatIcon from 'assets/meat_icon.svg';

const icons = {
  bread: breadIcon,
  fruit: fruitIcon,
  diary: diaryIcon,
  meat: meatIcon,
  home: homeIcon,
  pantry: pantryIcon,
};

const Icon = ({ iconType }) => {
  return (
    <>
      <img src={icons[iconType]} alt="bread" />
    </>
  );
};

Icon.propTypes = {
  iconType: PropTypes.string.isRequired,
};

export default Icon;
