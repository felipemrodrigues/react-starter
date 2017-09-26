import React from 'react';
import FilterLink from '../containers/FilterLink';

const Footer = () => (
  <section className="footer">
    <div className="container">
      <p>
        Show:
        {', '}
        <FilterLink filter="SHOW_ALL">
          All
        </FilterLink>
        {', '}
        <FilterLink filter="SHOW_ACTIVE">
          Active
        </FilterLink>
        {', '}
        <FilterLink filter="SHOW_COMPLETED">
          Completed
        </FilterLink>
      </p>
    </div>
  </section>
);

export default Footer;
