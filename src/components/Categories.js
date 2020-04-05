import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import CategoriesListItem from 'components/CategoriesListItem';

const StyledHeading = styled.h2`
  font-size: 2.4rem;
  margin: 0;
`;

const Categories = ({ items }) => {
  const categories = [
    { cat: 'bread', name: 'Bakery' },
    { cat: 'fruit', name: 'Fruit & Vegetables' },
    { cat: 'meat', name: 'Meat & Poultry' },
    { cat: 'diary', name: 'Dairy & Eggs' },
    { cat: 'home', name: 'Household' },
    { cat: 'pantry', name: 'Pantry' },
  ];

  return (
    <div>
      <StyledHeading>Categories</StyledHeading>
      {categories.map((item) => (
        <CategoriesListItem
          cat={item.cat}
          name={item.name}
          value={items.filter((el) => el.cat === item.cat).length}
        />
      ))}
    </div>
  );
};

Categories.propTypes = {
  items: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Categories);
