/* ========================================= */
/* CONTROLE DE LUZ + ACESSIBILIDADE */
/* ========================================= */

let nivelLuz = 2; // começa no modo médio (mais seguro)
let scannerAtivo = false;

function atualizarLuz() {
    const body = document.body;

    body.classList.remove("luz-baixa", "luz-media", "luz-alta");

    if (nivelLuz === 1) {
        body.classList.add("luz-baixa");
    } else if (nivelLuz === 2) {
        body.classList.add("luz-media");
    } else if (nivelLuz === 3) {
        body.classList.add("luz-alta");
    }
}

function aumentarLuz() {
    if (nivelLuz < 3) {
        nivelLuz++;
        atualizarLuz();
    }
}

function diminuirLuz() {
    if (nivelLuz > 1) {
        nivelLuz--;
        atualizarLuz();
    }
}

function toggleScanner() {
    const body = document.body;

    scannerAtivo = !scannerAtivo;

    if (scannerAtivo) {
        body.classList.add("scanner");
    } else {
        body.classList.remove("scanner");
    }
}

/* Inicializa estado correto ao carregar */
document.addEventListener("DOMContentLoaded", () => {
    atualizarLuz();
});

/* ========================================= */
/* BOTÃO "SAIBA MAIS" */
/* ========================================= */

const botaoSaibaMais = document.getElementById("saibaMais");

if (botaoSaibaMais) {
    botaoSaibaMais.addEventListener("click", function () {
        alert(
            "A agricultura sustentável busca aumentar a produção de alimentos sem prejudicar o solo, a água e o meio ambiente. Práticas como rotação de culturas, controle biológico de pragas e uso consciente da água ajudam a reduzir a necessidade de produtos químicos e melhoram a qualidade das plantações."
        );
    });
}
