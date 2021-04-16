import React from 'react';

const withClass = (WrappedComponent, classNm) => {
	return props => (
		<div className={classNm}>
			<WrappedComponent />
		</div>
	)
};

export default withClass;