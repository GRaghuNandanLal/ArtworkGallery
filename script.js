document.addEventListener("DOMContentLoaded", () => {
    const search = document.getElementById("search");
    const sort = document.getElementById("sort");
    const artworks = document.querySelectorAll(".artwork");

    // Search Functionality
    search.addEventListener("input", () => {
        const value = search.value.toLowerCase();
        artworks.forEach(artwork => {
            const name = artwork.dataset.name.toLowerCase();
            artwork.style.display = name.includes(value) ? "block" : "none";
        });
    });

    // Sorting Functionality
    sort.addEventListener("change", () => {
        let sorted = Array.from(artworks).sort((a, b) => {
            if (sort.value === "name") {
                return a.dataset.name.localeCompare(b.dataset.name);
            } else if (sort.value === "date") {
                return new Date(a.dataset.date) - new Date(b.dataset.date);
            }
        });

        const gallery = document.getElementById("gallery");
        gallery.innerHTML = "";
        sorted.forEach(art => gallery.appendChild(art));
    });
});
