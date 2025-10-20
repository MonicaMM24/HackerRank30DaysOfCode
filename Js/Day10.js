function main() {
    const n = parseInt(readLine().trim(), 10);

    // Convert to binary
    const binary = n.toString(2);

    // Split by '0' to get groups of consecutive '1's
    const onesGroups = binary.split('0');

    // Find the maximum length among those groups
    const maxConsecutiveOnes = Math.max(...onesGroups.map(group => group.length));

    // Print the result
    console.log(maxConsecutiveOnes);
}