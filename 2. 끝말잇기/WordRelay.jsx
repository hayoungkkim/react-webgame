const React = require("react");
const { useState, useRef } = React;

const WordRelay = () => {
	const [word, setWord] = useState("김하영");
	const [value, setValue] = useState("");
	const [result, setResult] = useState("");
	const inputRef = useRef(null);

	const onSubmit = (e) => {
		e.preventDefault();
		if (word[word.length - 1] === value[0]) {
			setResult("딩동댕");
			setWord(value);
			setValue("");
		} else {
			setResult("땡");
			setValue("");
		}
		inputRef.current.focus();
	};

	const onChange = (e) => {
		setValue(e.target.value);
	};

	return (
		<>
			<div>{word}</div>
			<form onSubmit={onSubmit}>
				<label htmlFor="wordInput">글자를 입력하세요.</label>
				<input id="wordInput" className="wordInput" ref={inputRef} type="text" value={value} onChange={onChange} />
				<button>입력!</button>
			</form>
			<div>{result}</div>
		</>
	);
};

module.exports = WordRelay;
