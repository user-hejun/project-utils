type FN = (...args: any[]) => any
export function debounce<T extends FN>(fn: T, limit: number = 300)
: (...args: Parameters<T>) => ReturnType<T>
{
	let result: any, timer: any
	return (...args: any[]) => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			result = fn(...args);
		}, limit)
		return result;
	}
}

