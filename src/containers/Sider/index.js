import { Menu, Icon } from 'antd'
import React, { Component } from 'react'
import { fetchData } from './actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import QueueAnim from 'rc-queue-anim'

const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup

class Sider extends Component {
  static propTypes = {
    fetchData: React.PropTypes.func.isRequired,
    siderData: React.PropTypes.array.isRequired
  }

  constructor (props) {
    super(props)
    this.state = {
      current: '1'
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentWillMount () {
    this.props.fetchData()
  }

  handleClick (e) {
    console.log('click ', e)
    this.setState({
      current: e.key
    })
  }

  render () {
    var subTag = 0
    var itemTag = 0
    var optionTag = 0
    return (
      <Menu onClick={this.handleClick}
        defaultOpenKeys={['sub0', 'item0']}
        selectedKeys={[this.state.current]}
        mode='inline'
        theme='dark'
        >
        {this.props.siderData.map((sub, index) => (
            <SubMenu key={'sub' + subTag++} title={<span><Icon type={sub.icon || 'mail'} />
              <span>{sub.title}</span></span>} >
              {sub.children && sub.children.map((item, index) => {
                if (item.type === 'group') {
                  return (<MenuItemGroup key={'item' + itemTag++} title={item.title}>
                    {item.children && item.children.map((option, index) => (
                      <Menu.Item key={'option' + optionTag++}>{option.title}</Menu.Item>
                    ))}
                  </MenuItemGroup>)
                } else if (item.type === 'drop') {
                  return (<SubMenu key={'item' + itemTag++} title={item.title}>
                    {item.children && item.children.map((option, index) => (
                      <Menu.Item key={'option' + optionTag++}>{option.title}</Menu.Item>
                    ))}
                  </SubMenu>)
                } else {
                  return (
                    <Menu.Item key={'option' + optionTag++}>{item.title}</Menu.Item>
                  )
                }
              })}
            </SubMenu>
          ))}
      </Menu>
    )
  }
}

export default connect(state => ({
  siderData: state.siderData
}), dispatch => ({
  ...bindActionCreators({
    fetchData
  }, dispatch)
}))(Sider)
