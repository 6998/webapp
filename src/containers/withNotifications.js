import { connect } from "react-redux";

const mapStateToProps = (state) => {
	const notifications = state.notifications;
	return {...state, notifications};
};

const withNotifications = connect(mapStateToProps);

export default withNotifications;
