import React from 'react'
import classes from './<%= pascalEntityName %>.scss'

export const <%= pascalEntityName %> = () => (
  <div className={classes['<%= pascalEntityName %>']}>
    <h1><%= pascalEntityName %></h1>
  </div>
)

export default <%= pascalEntityName %>
