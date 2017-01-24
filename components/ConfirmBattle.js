import React from 'react'

function ConfirmBattle(props) {
    return props.isLoading ? <h1>Is Loading...</h1>:<h1>Game Result</h1>


}

module.exports = ConfirmBattle;
