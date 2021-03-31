import React, { useState } from "react";
import PropTypes from "prop-types";
import Spinner from '@components/spinner';

export const AppComponent = (props) => {
	const {
		handleAppLoaded,
		app
	} = props


	const renderTemplate = () => {
		return <>App template</>
	}
	return (
		<div className={`container block mt-4`}>
			<div className={`row`}>
				{(app.isLoaded ? renderTemplate() : <Spinner />)}
			</div>
		</div>
	);
}

AppComponent.propTypes = {
	handleAppLoaded: PropTypes.func.isRequired
};