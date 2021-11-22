const React = require("react");
const { useState, useRef } = React;

const GuGuDan = () => {
	const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
	const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
	const [value, setValue] = useState("");
	const [result, setResult] = useState("");
	const inputRef = useRef(null);

	const onSubmitForm = (e) => {
		e.preventDefault();
		if (parseInt(value) === first * second) {
			setResult(`${first} * ${second} = ${value} 정답입니다!`);
			setFirst(Math.ceil(Math.random() * 9));
			setSecond(Math.ceil(Math.random() * 9));
			setValue("");
		} else {
			setResult(`${first} * ${second} = ${value} 땡입니다!`);
			setValue("");
		}
		inputRef.current.focus();
	};

	const onChangeInput = (e) => {
		setValue(e.target.value);
	};

	return (
		<>
			<div>
				{first}곱하기{second}는?
			</div>
			<form onSubmit={onSubmitForm}>
				<input ref={inputRef} type="number" value={value} onChange={onChangeInput} />
				<button>입력!</button>
			</form>
			<div>{result}</div>
		</>
	);
};

module.exports = GuGuDan;
