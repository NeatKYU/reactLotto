import React from 'react';

function Button ({handleLotto}) {
	return (
		<div style={{textAlign:"center"}}>
			<button className="ui button" onClick={handleLotto}>추첨</button>
		</div>
	)
}

export default Button;