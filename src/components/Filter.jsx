const Filter = ({ filter, handleRemoveFilter, handleClearAllFilter }) => {
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
      <div
        className="clear-filter"
        onClick={() => {
          handleClearAllFilter();
        }}
      >
        Clear
      </div>
    </section>
  );
};

export default Filter;
