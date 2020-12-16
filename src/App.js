import DegreeConversion from "./Conversion";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
	return (
		<div className="App">
			<div className="App-header">
				<h1>Temperature Conversion</h1>
				<DegreeConversion />
			</div>
		</div>
	);
};

export default App;
