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

  return (
    <section id="body">
      {filter.length != 0 && <Filter filter={filter} />}
      {datas.map((data) => {
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
