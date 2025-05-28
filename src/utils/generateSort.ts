
let lastGeneratedSort = 0n

function generateSort(): bigint {
	const base = BigInt(Date.now()) * 1000n

	if (base <= lastGeneratedSort) {
		lastGeneratedSort += 1n
	} else {
		lastGeneratedSort = base
	}

	return lastGeneratedSort
}

export { generateSort }