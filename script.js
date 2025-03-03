// for footer
    fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer-placeholder").innerHTML = data;
        })
        .catch(error => console.error("Error loading footer:", error));

// contact

document.getElementById("contactBtn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    document.getElementById("contactModal").classList.remove("hidden");
});

document.getElementById("closeModal").addEventListener("click", function() {
    document.getElementById("contactModal").classList.add("hidden");
});

// Close popup when clicking outside the modal
document.getElementById("contactModal").addEventListener("click", function(event) {
    if (event.target === this) {
        this.classList.add("hidden");
    }
});
