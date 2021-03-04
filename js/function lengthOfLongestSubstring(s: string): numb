function lengthOfLongestSubstring(s: string): number {
    let tab = s.split("");
    let count  = 0;
    let words = [];
    for(let i = 0; i < tab.length; i++) {
        let reste = s.substring(i+1); 
        let mot = s.substring(0, i);
        if(reste.includes(mot) || i == tab.length -1) {
            console.log(mot + " est present dans " + reste)
            words.push(count);
            count = 0;
        }else {
            console.log(mot + " n est pas present dans " + reste)
            count++
        }
        console.log(count);
    }
    console.log(words);
    return Math.max(...words);
};

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let mergedArray = nums1.concat(nums2);
    mergedArray = mergedArray.sort();
    let pos = Math.floor(mergedArray.length/2);
    console.log(mergedArray[pos]);
    if(mergedArray.length % 2 !== 0) {
        return mergedArray[pos];
    } else {
        return Math.floor(mergedArray[pos] + mergedArray[pos+1])/2;
    }
};

function longestPalindrome(s: string): string {
    let palindrome = s.substring(0, 0);;
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
    if(s == reverse.join("")) {
        return true;
    }
    else {
        return false;
    }
};