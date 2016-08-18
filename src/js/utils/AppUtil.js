import {isNumber} from './ValidationUtil'

export const generateRandString = (length) => {
    if(isNumber(length) && length > 0) {
        let str = ''
        for(let i=0; i<length; i++) {
            str += Math.floor(Math.random() * 10)
        }

        return str
    }
    else {
        return false
    }
}
