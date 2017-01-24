import React from 'react'
import Prompt from '../components/Prompt.js'




var PromptContainer = React.createClass({

    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function() {
        return {username: ''}
    },
    handlerUpdateUser: function(evt) {
        this.setState({username: evt.target.value})
    },
     handlerSubmitUser: function(evt) {
        evt.preventDefault();
        let username = evt.target.value
        this.setState({username: ''})

        console.log(this.context);

        if (this.props.routeParams.playerOne) {
            this.context.router.push({
                    pathname : '/battle',
                    query : {
                        playerOne : this.props.routeParams.playerOne,
                        playerTwo : this.state.username
                                }
                        }                          )
        } else {
            this.context.router.push('/playerTwo/' + this.state.username)
        }
    },
    render: function() {
        return (
            < Prompt  onUpdateUser={this.handlerUpdateUser}
                      onSubmitUser={this.handlerSubmitUser}
                      header={this.props.route.header}
                      username={this.state.username} />
      )
    }
})

module.exports = PromptContainer;
