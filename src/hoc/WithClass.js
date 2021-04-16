import React from 'react';

const withClass = (WrappedComponent, classNm) => {
	return props => (
		<div className={classNm}>
			<WrappedComponent {...props}/>
		</div>
	)
};

export default withClass;