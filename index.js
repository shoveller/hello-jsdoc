// 이 어노테이션을 사용해야 타입스크립트의 타입체크 지원을 받을 수 있다.
// @ts-check

// 실제 타입스크립트 인터페이스 선언과 대우가 같다.
/**
 * @typedef {Object} IParams
 * @property {string} name
 * @property {string} value
 */
const params = {
	name: '야호',
	value: '',
}

// 제네릭 타입도 지원한다
/**
 * @template T
 * @param {IParams} params
 * @param {Array<T>} arr
 */
const renderText = (params, arr) => {
	return params.name + arr.join('')
}

console.log(renderText({ name: '음', value: '잘 되는군' }, [1, 2, 3]))
