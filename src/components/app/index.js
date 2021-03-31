import React from 'react'
import { connect } from "react-redux";
import { AppComponent } from "./appComponent";
import { handleAppLoaded } from "@actions/appActions"

const App = ({ app }) => {
	return (
		<AppComponent
			app={app}
			handleAppLoaded={handleAppLoaded}
		/>
	)
}

const mapStateToProps = state => {
	console.log(state.app)
	return {
		app: state.app,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		handleAppLoaded: (isLoaded) => dispatch(handleAppLoaded({ isLoaded: isLoaded }))
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App)
