function getArrayParams(...arr) {
	let max = Math.max(...arr);
	let min = Math.min(...arr);
	let sum = arr.reduce((acc, item) => (acc + item));
	let avg = +(sum / arr.length).toFixed(2);
	return {
		min: min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) {
	return arr.reduce((acc, item) => acc + item, 0);
}

function differenceMaxMinWorker(...arr) {
	let max = Math.max(...arr);
	let min = Math.min(...arr);
	if (arr.length === 0) {
		return 0;
	}
	return (max - min);
}

function differenceEvenOddWorker(...arr) {
	let sumEvenElements = 0;
	let sumOddElements = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 == 0) {
			sumEvenElements += arr[i];
		} else {
			sumOddElements += arr[i];
		}
	}
	return (sumEvenElements - sumOddElements);
}

function averageEvenElementsWorker(...arr) {
	let sumEvenElements = 0;
	let countEvenElements = 0;
	if (arr.length === 0) {
		return 0;
	}
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 == 0) {
			sumEvenElements += arr[i];
			countEvenElements += 1;
		}
	}
	return (sumEvenElements / countEvenElements);
}

function makeWork(arrOfArr, func) {
	maxWorkerResult = -Infinity;
	for (let i = 0; i < arrOfArr.length; i++) {
		let res = func(...arrOfArr[i]);
		if (res > maxWorkerResult) {
			maxWorkerResult = res;
		}
	}
	return maxWorkerResult;
}