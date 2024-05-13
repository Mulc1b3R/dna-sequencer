function displayDNA() {
    const dnaSeq = document.getElementById('dnaSeq').value.trim().toUpperCase();

    if (/^[ACGT]+$/.test(dnaSeq)) {
        let result = "<div style='color: white;'>"; // Set white color for the container
        for (let nucleotide of dnaSeq) {
            switch (nucleotide) {
                case 'A':
                    result += '<span style="color: #FF0000;">A</span> ';
                    break;
                case 'C':
                    result += '<span style="color: #00FF00;">C</span> ';
                    break;
                case 'G':
                    result += '<span style="color: #0000FF;">G</span> ';
                    break;
                case 'T':
                    result += '<span style="color: #FF00FF;">T</span> ';
                    break;
            }
        }
        result += "</div>";
        document.getElementById('result').innerHTML = result;
    } else {
        document.getElementById('result').innerHTML = "Invalid DNA sequence. Please enter a sequence containing only A, C, G, or T.";
    }
}