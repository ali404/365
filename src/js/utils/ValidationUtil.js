export const isNumber = (num) => {
    return typeof(num) === 'number'
        && isFinite(num)
        && Math.round(num) === num
}
