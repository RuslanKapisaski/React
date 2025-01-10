import PropTypes from "prop-types";

function UserGreeting(props) {
	const welcomeMassage = (
		<h2 className="welcome-message">Welcome {props.username}</h2>
	);

	const prompt = <h2 className="login-promp">Please log in to continue</h2>;

	return props.isLoggedIn ? welcomeMassage : prompt;
}

UserGreeting.PropTypes = {
	isLoggedIn: PropTypes.bool,
	username: PropTypes.string,
};
UserGreeting.defaultProps = {
	isLoggedIn: false,
	username: "Guest",
};

export default UserGreeting;
