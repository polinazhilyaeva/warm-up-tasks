/**
 * Determines if a given number is a palindrome.
 *
 * @param      {Number}   number  Given number
 * @return     {Boolean}  True if the given number is palindrome, False otherwise.
 */
function isPalindrome (number) {
    var numString = number.toString(),
        size = numString.length,
        result = true;

    if (typeof number !== 'number') {
        result = false;
    } else {
        for (var i = 0; i < size / 2 ; ++i) {
            if (numString[i] !== numString[size - 1 - i]) {
                result = false;
                break;
            }
        };
    }

    return result;
}

/**
 * Counts an amount of Fibonacci numbers in given range
 *
 * @param      {Number}  start   Start value of range
 * @param      {Number}  end     End value of range
 * @return     {Number}  Amount of Fibonacci numbers in the range from start to end inclusively
 */
function fiboCounter (start, end) {
    var fibo1 = 0,
        fibo2 = 1,
        fibo3 = fibo1 + fibo2,
        count = 0;

    while (fibo1 <= end) {
        if (fibo1 >= start) {
            count++;
        }

        fibo1 = fibo2;
        fibo2 = fibo3;
        fibo3 = fibo1 + fibo2;
    }

    return count;
}

/**
 * Counts an amount of Fibonacci numbers, the length of which equals to a given parameter
 *
 * @param      {number}  n       Given length
 * @return     {number}  Amount of Fibonacci numbers with length = n
 */
function fiboEvaluator (n) {
    var fibo1 = 0,
        fibo2 = 1,
        fibo3 = fibo1 + fibo2,
        count = 0;

    while (fibo1.toString().length < (n + 1)) {
        if (fibo1.toString().length === n) {
            count++;
        }

        fibo1 = fibo2;
        fibo2 = fibo3;
        fibo3 = fibo1 + fibo2;
    }

    return count;
}
