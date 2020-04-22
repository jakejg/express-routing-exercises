

function getMean(array) {
    const total = array.reduce((accum, next) => {
        return accum + next
    })

    return total/array.length
}

function getMedian(array) {
    array.sort((a,b) => {
        return a-b;
    })
    if (array.length % 2 === 0) {
        let idx1 = array.length/2;
        let idx2 = idx1 -1;
        return (array[idx1] + array[idx2])/2
    }
    else {
        let idx = Math.floor(array.length/2)
        return array[idx]
    }
}

function getMode(array) {
    frequ = {}
    for (let item of array) {
        count = frequ[item] || 0;
        count ++;
        frequ[item] = count
    }

    const max = Math.max(...Object.values(frequ))

    if (max === 1){
        return "No mode"
    }

    const modes = []

    for (let key in frequ) {
        if (frequ[key] === max) {
            modes.push(key)
        }
    }

    if (modes.length === 1) {
        return parseInt(modes[0])
    }
    else {
        return modes.map(val => {
            return parseInt(val)
        })
    }
}

module.exports = {
    getMean, getMedian, getMode
}
