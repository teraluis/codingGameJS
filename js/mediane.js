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
