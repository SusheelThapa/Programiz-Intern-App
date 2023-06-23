import Card from "./Card";
import datas from "../../data.json";

const Body = () => {
  return (
    <section id="body">
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
          />
        );
      })}
    </section>
  );
};

export default Body;
