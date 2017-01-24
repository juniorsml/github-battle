import React from 'react'
var PropTypes = React.PropTypes;


function Prompt (props){

  return (  <div className="jumbotron col-sm-6 col-sm-offset-3 text-xs-center">
        <h1>{props.header}</h1>
        <h2>{props.username}</h2>
        <div className="col-sm-12">
            <form onSubmit={props.onSubmitUser}>
                <div className="form-group">
                    <input className="form-control" value={props.username} onChange={props.onUpdateUser} type="text" placeholder="Github  Username"/>
                </div>
                <div className="form-group col-sm-4 col-sm-offset-4">
                    <button type="submit" className="btn btn-success">Continue</button>
                </div>
            </form>
        </div>
    </div>)
}

Prompt.proptypes = {
        header : PropTypes.string.isRequired,
        username : PropTypes.string.isRequired,
        onUpdateUser : PropTypes.func.isRequired,
        onSubmitUser : PropTypes.func.isRequired
      }

module.exports = Prompt;
