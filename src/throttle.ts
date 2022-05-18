type FN = (...args: any[]) => any
export function throttle<T extends FN>(fn: T, limit: number = 300)
: (...args: Parameters<T>) => ReturnType<T>
{
	let result: any, inThrottle: boolean = false;
	return (...args: any[]) => {
		if(!inThrottle) {
			inThrottle = true;
			setTimeout(() => {
				inThrottle= false;
			}, limit);
			result = fn(...args);
		}
		return result
	}
}