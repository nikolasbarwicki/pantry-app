import React from 'react';
import styled from 'styled-components';

import CategoriesListItem from 'components/CategoriesListItem';

const StyledHeading = styled.h2`
  font-size: 2.4rem;
  margin: 0;
`;

const categories = [
  { cat: 'bread', name: 'Bakery' },
  { cat: 'fruit', name: 'Fruit & Vegetables' },
  { cat: 'meat', name: 'Meat & Poultry' },
  { cat: 'diary', name: 'Dairy & Eggs' },
  { cat: 'home', name: 'Household' },
  { cat: 'pantry', name: 'Pantry' },
];

class Categories extends React.Component {
  state = [
    { cat: 'bread', item: 'Bread', qty: 2, min: 1 },
    { cat: 'fruit', item: 'Bananas', qty: 5, min: 5 },
    { cat: 'fruit', item: 'Carrots', qty: 1, min: 2 },
    { cat: 'diary', item: 'Milk', qty: 0, min: 3 },
    { cat: 'home', item: 'Toilet paper', qty: 0, min: 6 },
    { cat: 'pantry', item: 'Bread flour', qty: 4, min: 4 },
  ];

  render() {
    const { type } = this.state;

    return (
      <div>
        <StyledHeading>Categories</StyledHeading>
        <CategoriesListItem
          cat={categories[0].cat}
          name={categories[0].name}
          value={type.filter((item) => item.cat === categories[0].cat).length}
        />
        <CategoriesListItem
          cat={categories[1].cat}
          name={categories[1].name}
          value={type.filter((item) => item.cat === categories[1].cat).length}
        />
        <CategoriesListItem
          cat={categories[2].cat}
          name={categories[2].name}
          value={type.filter((item) => item.cat === categories[2].cat).length}
        />
        <CategoriesListItem
          cat={categories[3].cat}
          name={categories[3].name}
          value={type.filter((item) => item.cat === categories[3].cat).length}
        />
        <CategoriesListItem
          cat={categories[4].cat}
          name={categories[4].name}
          value={type.filter((item) => item.cat === categories[4].cat).length}
        />
        <CategoriesListItem
          cat={categories[5].cat}
          name={categories[5].name}
          value={type.filter((item) => item.cat === categories[5].cat).length}
        />
      </div>
    );
  }
}

export default Categories;
