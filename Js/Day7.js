function main() {

    const n = parseInt(readLine().trim(), 10);
    const arr = readLine().trim().split(' ').map(Number);
    
    const reversed = arr.reverse();
    console.log(reversed.join(' '));

}