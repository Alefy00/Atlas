const imageResponses = [
    {
        imageUrl: "./images/Eritropoese/Eritroblasto basófilo Fg1.png",
        response: "Eritroblasto basófilo (seta), eritroblasto policromático (duas setas), eritroblasto ortocromático (seta tracejada)."
    },
    {
        imageUrl: "./images/Eritropoese/Eritroblasto Basófilo Fg2.png",
        response: "Eritroblasto basófilo (seta) e eritroblasto ortocromático (seta tracejada)."
    },
    {
        imageUrl: "./images/Eritropoese/Eritroblasto ortocromático FG1.png",
        response: "Eritroblasto ortocromático (seta)."
    },
    {
        imageUrl: "./images/Eritropoese/Eritroblasto Ortocromático FG2.png",
        response: "Eritroblasto ortocromático (seta)."
    },
    {
        imageUrl: "./images/Eritropoese/Eritroblasto Ortocromático FG3.png",
        response: "Eritroblasto ortocromático (seta)."
    },
    {
        imageUrl: "./images/Eritropoese/Eritroblasto Ortocromático FG4.png",
        response: "Eritroblasto ortocromático expelindo núcleo (seta)"
    },
    {
        imageUrl: "./images/Eritropoese/Eritroblasto Policromático FG1.png",
        response: "Eritroblasto policromático (seta)"
    },
    {
        imageUrl: "./images/Eritropoese/Eritroblasto Policromático FG2.png",
        response: "Eritroblasto policromático (seta) ao lado de um monócito."
    },
    {
        imageUrl: "./images/Eritropoese/Eritrócitos-Hemácias FG1.png",
        response: "Hemácias normocrômicas e normocíticas - aumento de 1000x."
    },
    {
        imageUrl: "./images/Eritropoese/Eritrócitos-Hemácias FG2.png",
        response: " Hemácias normais com alterações artefatuais (hemácias crenadas - sangue em contato com EDTA do tubo de coleta por muito tempo antes da confecção do esfregaço) - aumento de 1000x."
    },
    {
        imageUrl: "./images/Eritropoese/Eritrócitos-Hemácias FG3.png",
        response: " Hemácias normais (em aumento de 400x)"
    },
    {
        imageUrl: "./images/Eritropoese/proeritroblasto.jpg",
        response: "Proeritroblasto"
    },
    {
        imageUrl: "./images/Eritropoese/Reticulócito FG1.png",
        response: "Reticulócitos em coloração azul de cresil brilhante, mostrando os restos de RNA."
    },
    {
        imageUrl: "./images/Eritropoese/Reticulócito FG2.png",
        response: "Reticulócitos e hemácias em coloração azul de cresil brilhante."
    },
    {
        imageUrl: "./images/Eritropoese/Reticulócito FG3.png",
        response: "Reticulócito (1000x)."
    }
    
];

const imageElement = document.getElementById("image");
const responseElement = document.getElementById("response");
const showAnswerButton = document.getElementById("show-answer");
const nextImageButton = document.getElementById("next-image");

let currentImageIndex = -1;

function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
}

function showImage(index) {
    imageElement.src = imageResponses[index].imageUrl;
    currentImageIndex = index;
    responseElement.textContent = ""; // Limpa a resposta ao trocar de imagem
}

function showRandomImage() {
    const randomIndex = getRandomIndex(imageResponses.length);
    showImage(randomIndex);
}

showRandomImage();

showAnswerButton.addEventListener("click", () => {
    if (currentImageIndex !== -1) {
        responseElement.textContent = imageResponses[currentImageIndex].response;
    }
});

nextImageButton.addEventListener("click", () => {
    responseElement.textContent = ""; // Limpa a resposta ao trocar de imagem
    showRandomImage();
});
