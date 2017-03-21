import React from 'react';

const Link = ({ active, children, onClick }) => {
    if (active) {
        return <span>{children}</span>;
    }

    return (
      <a href='#'
        onClick={e => { e.preventDefault(); onClick(); }}
      >
        {children}
      </a>
    );
};

Link.propTypes = {
    active: React.PropTypes.bool.isRequired,
    children: React.PropTypes.node.isRequired,
    onClick: React.PropTypes.func.isRequired
};

export default Link;
