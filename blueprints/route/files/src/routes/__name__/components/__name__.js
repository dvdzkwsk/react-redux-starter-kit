import React from 'react'
import classes from './<%= pascalEntityName %>.scss'

export const <%= pascalEntityName %> = () => (
  <div className={classes['<%= pascalEntityName %>']}>
    <h4><%= pascalEntityName %></h4>
  </div>
)

export default <%= pascalEntityName %>
