import { useEffect, useState } from 'react';
import './App.css';

function App() {
	const [currency, setCurrency] = useState([]);
	const [fromValue, setFromValue] = useState();
	const [toValue, setToValue] = useState();
	const [fromCurrency, setFromCurrency] = useState();
	const [toCurrency, setToCurrency] = useState();

	const convertCurrency = () => {
		fetch(
			`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrency}.json`
		)
			.then((response) => response.json())
			.then((data) => {
				setToValue(fromValue * data[fromCurrency][toCurrency]);
			});
	};

	useEffect(() => {
		fetch(
			'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json'
		)
			.then((response) => response.json())
			.then((data) => {
				setCurrency(data);
			});
	}, []);

	return (
		<main>
			<div id='heading'>
				<p>CURRENCY</p>
				<p>MATCH</p>
			</div>
			<div id='card'>
				<div id='from'>
					<label>FROM</label>
					<div className='child'>
						<input
							type='number'
							placeholder='Amount'
							value={fromValue}
							onChange={(e) => {
								setFromValue(e.target.value);
							}}
						/>

						<select
							className='select'
							onChange={(e) => {
								setFromCurrency(e.target.value);
							}}
						>
							<option selected>
								Select
							</option>
							{Object.entries(currency).map(([key, value]) => (
								<option key={key} value={key}>
									{value}
								</option>
							))}
						</select>
					</div>
				</div>

				<div id='to'>
					<label>TO</label>
					<div className='child'>
						<input
							type='number'
							placeholder='Amount'
							value={toValue}
							onChange={(e) => {
								setToValue(e.target.value);
							}}
							disabled
						/>

						<select
							className='select'
							onChange={(e) => {
								setToCurrency(e.target.value);
							}}
						>
							<option selected>
								Select
							</option>
							{Object.entries(currency).map(([key, value]) => (
								<option key={key} value={key}>
									{value}
								</option>
							))}
						</select>
					</div>
				</div>

				<button id='calculate-btn' onClick={convertCurrency}>
					Calculate
				</button>
			</div>
		</main>
	);
}

export default App;
