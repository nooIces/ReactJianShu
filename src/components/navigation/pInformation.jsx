import React from 'react';
import '../../style/navigation.less';
import PersonalCard from './PersonalCard.jsx';

class Pinformation extends React.Component{
    render(){
        const { information, loginOut } = this.props;
        return(
            <div className = "pInformation">
                <Avatar />
                <PersonalCard loginOut = { loginOut }username = { information.username } tags = { information.tag }/>
            </div>
        );
    }
}

export default Pinformation;
