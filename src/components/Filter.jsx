const Filter = ({ filter }) => {
  return (
    <section className="filter card-horizontal">
      <ul>
        {filter.map((value) => {
          return (
            <li key={value}>
              {value}
              <span>
                <i className="bi bi-dash-circle"></i>
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Filter;
