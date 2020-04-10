import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CategoriesItem from 'components/Categories/CategoriesItem';
import Heading from 'components/Heading';

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
      <Heading>Categories</Heading>
      {categories.map((item) => (
        <CategoriesItem
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
