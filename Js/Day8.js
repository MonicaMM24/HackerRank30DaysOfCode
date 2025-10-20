function processData(input) {
    const lines = input.trim().split('\n');
    const n = parseInt(lines[0]);
    const phoneBook = new Map();

    // Read phone book entries
    for (let i = 1; i <= n; i++) {
        const [name, number] = lines[i].split(' ');
        phoneBook.set(name, number);
    }

    // Process queries
    for (let i = n + 1; i < lines.length; i++) {
        const queryName = lines[i];
        if (phoneBook.has(queryName)) {
            console.log(`${queryName}=${phoneBook.get(queryName)}`);
        } else {
            console.log('Not found');
        }
    }
}
