import React from "react";
// import DigitalClockApp from "./DigitalClockApp.jsx";
// import ColorPicker from "./ColorPicker.jsx";
import ToDoList from "./ToDoList";
function App() {
	// return <DigitalClockApp />;
	// return <ColorPicker />;
	return <ToDoList />;
}

export default App;

/*Chapters

    1.Adding Different Cards with props objects
    import Student from "./Students.jsx";
			<Student name="Patrik" age={18} isStudent={false} />
			<Student name="Spongebob" age={17} isStudent={true} />
			<Student name="Squidward" age={50} isStudent={false} />
			<Student age={30} />

      2.Conditional Renedering using UserGreeting function
      import UserGreeting from "./UserGreeting.jsx
      <UserGreeting isLoggedIn={true} username="Stiliyan" />
	  <UserGreeting isLoggedIn={false} />

        3.Rendering Lists
        import List from "./List.jsx";
        	const fruits = [
		  { id: 1, name: "apple", calories: 95 },
	  	{ id: 2, name: "orange", calories: 45 },
	  	{ id: 3, name: "banana", calories: 45 },
	    ];

    	const vegetables = [
		{ id: 4, name: "potatoes", calories: 110 },
		{ id: 5, name: "tomatoes", calories: 30 },
		{ id: 6, name: "carrtos", calories: 60 },
	];
	return (
		<>
			{fruits.length > 0 ? <List items={fruits} category="Fruits" /> : null}
			{vegetables.length > 0 ? (
				<List items={fruits} category="Vegetables" />
			) : null}
		</> 
	);
			4.Button
			import Button from "./Button.jsx";
            return <Button/>
        
				4.Profile picture
				return <ProfilePicture />;
		        import ProfilePicture from "./ProfilePicture.jsx";

					5. Hooks
					import MyComponentHook from "./MyComponentHook";
					return <MyComponentHook />;
				
						6.Couner Program
							import Counter from "./Counter";
							return <Counter/>;
	
							7.MyComponentHookOnChange form
								import MyComponentOnChangeEventHandler from "./MyComponentOnChangeEventHandler";
								return <MyComponentOnChangeEventHandler />;

								8.Color Picker
								import ColorPicker from "./ColorPicker.jsx";
								return <ColorPicker />;
								
									9.import UpdateObjects from "./UpdateObjects";
								  	  return <UpdateObjects />;
							
										10.	Update Array in state
											import UpdateArrInState from "./UpdateArrInState";
											return <UpdateArrInState />;
											
											11.To Do List
											import ToDoList from "./ToDoList";
											return <ToDoList/>

											    12.Width and Height useEffect()
											    import WidthAndHeight from "./WidthAndHeight";
												return <WidthAndHeight />;

													13.Digital Clock
													import DigitalClockApp from "./DigitalClockApp.jsx";
													return <DigitalClockApp />;
													 
															14.Use Context
															import ComponentA from "./contextHook/ComponentA";
															return <ComponentA />;

																15.useRef 
																import UseRefComponent from "../UseRefComponent";
	                                                            return <UseRefComponent />;

																	16.StopWatch
																	import StopWatch from "./StopWatch";
																	return <StopWatch />;
								  */
