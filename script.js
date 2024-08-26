document.getElementById("ubahTeksButton").addEventListener("click", function() {
    const teksBaru = document.getElementById("inputTeksBaru").value;
    if (teksBaru.trim() !== "") {
        document.getElementById("judul").textContent = teksBaru;
    }
});