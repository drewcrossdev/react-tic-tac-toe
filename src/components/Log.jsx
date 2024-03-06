export default function Log({ turns, name }) {
	console.log(turns);
	return (
		<ol id='log'>
			{turns.map((turn) => (
				<li key={`${turn.square.row}${turn.square.col}`}>
					{name[turn.player]} has selected {turn.square.row + 1},
					{turn.square.col + 1}
				</li>
			))}
		</ol>
	);
}
