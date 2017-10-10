import React from 'react'
import classes from './UserBox.scss'
import Badge from 'material-ui/Badge'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Divider from 'material-ui/Divider';

class UserBox extends React.Component {
    constructor(props) {
        super(props)


    }

    render() {
        return (
            <div className={classes.userBox}>
                <div className={classes.username}>名字是七个字的</div>
                <List className={classes.root}>
                    <ListItem button className={classes.linkBtn}>
                        <ListItemText primary="Inbox" />
                    </ListItem>
                    <Divider light />
                    <ListItem button className={classes.linkBtn}>
                        <ListItemText primary="Drafts" />
                    </ListItem>
                    <Divider />
                    <ListItem button className={classes.linkBtn}>
                        <ListItemText primary="Trash"/>
                    </ListItem>
                </List>
            </div>
        )
    }


}


// export const UserBox = (props) => (
//   <div className={classes.userBox}>

//       <Badge className={classes.badge} badgeContent={0} color="accent">
//       <div className={classes.username}>名字是七个字的</div>
//     </Badge>
//   </div>
// )

export default UserBox
