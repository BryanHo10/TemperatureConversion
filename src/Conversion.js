import React, { useState } from "react";
import { Form, FormControl, InputGroup } from "react-bootstrap";

const DegreeConversion = () => {
	const [inputChoice, setInputChoice] = useState("F");
	const [inputVal, setInputVal] = useState("");
	return (
		<div>
			<Form className="py-5">
				<Form.Control
					as="select"
					className="mr-sm-2"
					id="inlineFormCustomSelect"
					custom
					onChange={(e) => setInputChoice(e.target.value)}
				>
					<option value="" disabled>
						Choose...
					</option>
					<option value="F">Fahrenheit</option>
					<option value="C">Celsius</option>
				</Form.Control>
			</Form>

			<InputGroup className="lg">
				<FormControl
					onChange={(e) => {
						const re = /^[0-9\b]+$/;

						// if value is not blank, then test the regex

						if (e.target.value === "" || re.test(e.target.value)) {
							setInputVal(e.target.value);
						}
					}}
					aria-label=""
					aria-describedby="inputGroup-sizing-lg"
				/>
				<InputGroup.Append>
					<InputGroup.Text id="inputGroup-sizing-lg">
						&deg;{inputChoice === "F" ? "F (Fahrenheit)" : "C (Celsius)"}
					</InputGroup.Text>
				</InputGroup.Append>
			</InputGroup>
			{inputVal === "" ? (
				<h2 className="py-3">Please enter a number</h2>
			) : (
				<h2 className="py-3">
					{inputChoice === "F"
						? `Celsius:  ${((32 * parseFloat(inputVal) - 32) * (5 / 9)).toFixed(
								2
						  )}`
						: `Fahrenheit:  ${(
								32 * parseFloat(inputVal) * (9 / 5) +
								32
						  ).toFixed(2)}`}
				</h2>
			)}
		</div>
	);
};
export default DegreeConversion;
