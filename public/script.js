const urlInput = document.querySelector("#url");
const button = document.querySelector("#imgifyButton");

// const url = "https://bomanstatic.github.io/four-card-feature-section/";
button.addEventListener("click", () => {
    const url = urlInput.value;
    fetch(`http://localhost:3000/screenshot?url=${encodeURIComponent(url)}`)
        .then((response) => response.blob())
        .then((blob) => {
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.download = `${url.replace(/http(s)?(:)?(\/\/)?|(\/\/)?(www\.)?/g, "").replace(".", "_")}.png`;

            link.click();
        });
});

// const inputString = "https://www.example.com";
// const modifiedString = inputString.replace(/http(s)?(:)?(\/\/)?|(\/\/)?(www\.)?/g, "").replace(".", "_");
// console.log(modifiedString);
