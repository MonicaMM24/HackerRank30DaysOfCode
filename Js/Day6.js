function processData(input) {
    const lines = input.trim().split('\n');
    const T = parseInt(lines[0]);

    for (let i = 1; i <= T; i++) {
        const S = lines[i];
        let evenChars = '';
        let oddChars = '';

        for (let j = 0; j < S.length; j++) {
            if (j % 2 === 0) {
                evenChars += S[j];
            } else {
                oddChars += S[j];
            }
        }

        console.log(`${evenChars} ${oddChars}`);
    }
}
