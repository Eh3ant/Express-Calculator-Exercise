function mean(nums) {
    if (nums.length === 0) return 0;
    return nums.reduce((acc, cur) => acc + cur, 0) / nums.length
}

function median(nums) {
    if (nums.length === 0) return 0;
    nums.sort()

    let midIdx = Math.floor(nums.length / 2)

    if (nums.length % 2 === 0) {
        return (nums[midIdx - 1] + nums[midIdx]) / 2
    } else {
        return nums[midIdx]
    }
}

function mode(nums) {
    if (nums.length === 0) return 0;

    let frequency = {};
    let maxFreq = 0;
    let modes = [];

    nums.forEach(num => {
        frequency[num] = (frequency[num] || 0) + 1;
        if (frequency[num] > maxFreq) {
            maxFreq = frequency[num]
        }
    });

    // Find all numbers with the maximum frequency
    for (let key in frequency) {
        if (frequency[key] === maxFreq) {
            modes.push(Number(key))
        }
    }
    return modes.length === 1 ? modes[0] : modes
}

module.exports = { mean, median, mode };