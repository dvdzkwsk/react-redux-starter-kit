import Immutable from 'immutable'
import React from 'react'
import { Link } from 'react-router'
import Category from './Category'
import './Services.scss'
import SubNavbar from 'components/SubNavbar'

export class Categories extends React.Component {
  componentDidMount() {
    this.props.onComponentDidMount && this.props.onComponentDidMount()
  }

  render () {
    return (
      <div>
        <SubNavbar title="Services" />

        <div style={{padding: '10px'}}>
          {
            this.props.categories.map(function (category, index) {
              return category && <Category key={index} category={category} />
            })
          }
        </div>
      </div>
    )
  }
}

Categories.defaultProps = {
  categories: Immutable.List()
}

export default Categories
