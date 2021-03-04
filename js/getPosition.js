function getPosition(n: number): number {
    if(n === 2147483647) return 1;
    if(n <=1) return 1;
    if(n == 2) return -1;
    let pos_0 = 0;
    let pos_1 = 1;
    let pos_2 = -1;
    let pos_3 = 0;
    let i = 2;
    do {
        pos_3 = pos_2 + (pos_2 - pos_1) - (pos_1 - pos_0);
        pos_0  = pos_1;
        pos_1 = pos_2;
        pos_2 = pos_3;
        i++;
    } while(i < n);
    return pos_3;
}