export function userCreateValueChange (evt) {
	return {
		type: evt.target.id,
		value: evt.target.value
	}
}