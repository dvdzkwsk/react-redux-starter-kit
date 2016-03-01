import React, { PropTypes } from 'react'

function <%= pascalEntityName %> ({ children }) {
  return (
    <div className='<%= snakeEntityName %>-layout'>
      {children}
    </div>
  )
}

<%= pascalEntityName %>.propTypes = {
  children: PropTypes.element
}

export default <%= pascalEntityName %>
