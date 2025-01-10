import PropTypes from "prop-types";

function Student(props) {
	return (
		<div className="student">
			<p>Name: {props.name}</p>
			<p>Age: {props.age}</p>
			<p>Student: {props.isStudent ? "Yes" : "No"}</p>
		</div>
	);
}
{
	/*Prop types for ensuring the variable type*/
}
Student.PropTypes = {
	name: PropTypes.string,
	age: PropTypes.number,
	isStudent: PropTypes.bool,
};

{
	/*Adding default props in case they are not passed from the parent component */
}
Student.defaultProps = {
	name: "Guest",
	age: 0,
	isStudent: false,
};
export default Student;
