const Filter = ({ filter, handleRemoveFilter }) => {
  return (
    <section className="filter card-horizontal">
      <ul>
        {filter.map((value) => {
          return (
            <li key={value}>
              {value}
              <span
                onClick={() => {
                  handleRemoveFilter(value);
                }}
              >
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
