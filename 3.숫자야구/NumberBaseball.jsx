import React, { Component } from "react";

// 숫자 네 개를 겹치지 않고 랜덤하게 뽑는 함수
function getNumbers() {
	const array = [];
	return array;
}

class NumberBaseball extends Component {
	state = {
		result: "",
		value: "",
		answer: getNumbers(), // ex: [1,3,5,7]
		tries: [], // push 쓰면 안 돼요
	};

	onSubmitForm = (e) => {};

	onChangeInput = (e) => {};

	render() {
		const { result, value, tries } = this.state;
		return (
			<>
				<h1>{result}</h1>
				<form onSubmit={this.onSubmitForm}>
					<input maxLength={4} value={value} onChange={this.onChangeInput} />
				</form>
				<div>시도: {tries.length}</div>
				<ul>
					{[
						{ fruit: "사과", taste: "맛있다" },
						{ fruit: "바나나", taste: "맛없다" },
						{ fruit: "포도", taste: "시다" },
						{ fruit: "귤", taste: "시다" },
						{ fruit: "감", taste: "시다" },
						{ fruit: "배", taste: "시다" },
						{ fruit: "밤", taste: "시다" },
					].map((v, i) => {
						return (
							<li key={v.fruit + v.taste}>
								<b>{v.fruit}</b> - {v.taste}
							</li>
						);
					})}
				</ul>
			</>
		);
	}
}

export default NumberBaseball; // import NumberBaseball;
