import React from 'react'
import ConfirmBattle from '../components/ConfirmBattle.js'

const ConfirmBattleContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function() {
        return {isLoading: false, playersInfo: []}
    },
    componentDidMount : function(){
        let query = this.props.location.query;
        console.log(query);
    },
    render: function() {

        return (<ConfirmBattle isLoading={this.state.isLoading} playersInfo={this.state.playersInfo} />)
    }
})

module.exports = ConfirmBattleContainer;
