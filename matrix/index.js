function matrix(n) {
    let result = Array.from({ length: n }, () => Array(n).fill(0));

    let top = 0;
    let bottom = n - 1;
    let left = 0;
    let right = n - 1;

    let currentNumber = 1;

    while (currentNumber <= n * n) {
        for (let i = left; i <= right; i++) {
            result[top][i] = currentNumber++;
        }
        top++;

        for (let i = top; i <= bottom; i++) {
            result[i][right] = currentNumber++;
        }
        right--;

        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                result[bottom][i] = currentNumber++;
            }
            bottom--;
        }

        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                result[i][left] = currentNumber++;
            }
            left++;
        }
    }

    return result;
}

module.exports = matrix;
