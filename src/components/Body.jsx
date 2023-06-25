import { useState } from "react";

import Card from "./Card";
import Filter from "./Filter";

import datas from "../../data.json";

const Body = () => {
  const [filter, setFilter] = useState([]);

  const handleOnClick = (clickedItems) => {
    if (filter.includes(clickedItems) != true) {
      setFilter([...filter, clickedItems]);
    }
  };

  const handleRemoveFilter = (removedFilter) => {
    let new_filter = filter.filter((value) => {
      return value !== removedFilter;
    });
    console.log(new_filter);
    setFilter(new_filter);
  };
  const handleClearAllFilter = () => {
    setFilter([]);
  };

  let filtered_data = datas;

  if (filter.length > 0) {
    filtered_data = datas.filter(function (item) {
      return item.keywords.some(function (keyword) {
        return filter.includes(keyword);
      });
    });
  }

  return (
    <section id="body">
      {filter.length != 0 && (
        <Filter
          filter={filter}
          handleRemoveFilter={handleRemoveFilter}
          handleClearAllFilter={handleClearAllFilter}
        />
      )}
      {filtered_data.map((data) => {
        const {
          position,
          timing,
          location,
          keywords,
          company,
          company_logo,
          posted_on,
        } = data;

        return (
          <Card
            key={posted_on}
            position={position}
            timing={timing}
            location={location}
            keywords={keywords}
            company={company}
            company_logo={company_logo}
            posted_on={posted_on}
            handleClick={handleOnClick}
          />
        );
      })}
    </section>
  );
};

export default Body;
