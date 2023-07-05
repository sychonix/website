document.getElementById("copyButton").addEventListener("click", function() {
    var code = document.querySelector("#codebox code");
    var range = document.createRange();
    range.selectNode(code);
    window.getSelection().addRange(range);
    try {
        document.execCommand("copy");
        alert("Kode berhasil disalin!");
    } catch (err) {
        alert("Tidak dapat menyalin kode.");
    }
    window.getSelection().removeAllRanges();
});

