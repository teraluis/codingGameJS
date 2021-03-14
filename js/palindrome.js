
function longestPalindrome(s: string): string {
    let palindrome = s.substring(0, 0);
    let tmp = "";
    for(let i = 0; i<s.length - 2; i++) {
        for(let j = i + 1; j < s.length; j++) {
            tmp = s.substring(i, j);
            if(isPalindrome(tmp) && tmp.length > palindrome.length) {
                palindrome = tmp;
            }
        }
    }
    return palindrome;
};

function isPalindrome(s: string): boolean {
    const splitString = s.split("");
    const reverse = splitString.reverse();
    return s === reverse.join("");
};
