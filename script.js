 /* ============================================
   SPA: mostrar apenas seção ativa
=============================================== */
function showSection(sectionId) {
  const sections = document.querySelectorAll(".section");
  sections.forEach(sec => {
    sec.classList.remove("active");
  });
  document.getElementById(sectionId).classList.add("active");
}

/* ============================================
   ANIMAÇÕES ScrollReveal
=============================================== */
ScrollReveal().reveal('.section', {
    distance: '60px',
    duration: 1200,
    easing: 'ease',
    origin: 'bottom',
    reset: false
});

/* ============================================
   ANIMAÇÃO 3D SUAVE NO HERO
=============================================== */
document.addEventListener("mousemove", (e) => {
    const hero = document.querySelector(".hero");
    if (hero) {
      let x = (window.innerWidth - e.pageX * 2) / 90;
      let y = (window.innerHeight - e.pageY * 2) / 90;
      hero.style.transform = `translateX(${x}px) translateY(${y}px)`;
    }
});

/* ============================================
   FORMULÁRIO – VALIDAÇÃO COMPLETA
=============================================== */
document.getElementById("formSaude").addEventListener("submit", function (e) {
    e.preventDefault();

    const campos = [
        "alimentacaoInput",
        "exercicioInput",
        "sonoInput",
        "aguaInput",
        "estresseInput",
        "viciosInput"
    ];

    let valido = true;

    campos.forEach(id => {
        const campo = document.getElementById(id);
        if (!campo.value || campo.value.trim() === "") {
            campo.style.borderColor = "red";
            valido = false;
        } else {
            campo.style.borderColor = "#1ebd99";
        }
    });

    const msg = document.getElementById("mensagem");

    if (!valido) {
        msg.style.color = "red";
        msg.innerHTML = "⚠️ Preencha todos os campos obrigatórios.";
        return;
    }

    msg.style.color = "green";
    msg.innerHTML = "✔️ Avaliação enviada com sucesso!";
});

/* ============================================
   PDF PROFISSIONAL – 2 páginas
=============================================== */
function gerarPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ unit: "pt", format: "a4" });

    // ----------------- CAPA -----------------
    doc.setFillColor(30, 189, 153);
    doc.rect(0, 0, 595, 150, "F");
    doc.setTextColor("#ffffff");
    doc.setFontSize(26);
    doc.setFont("helvetica", "bold");
    doc.text("GUIA PREMIUM DE VIDA SAUDÁVEL", 40, 80);
    doc.setFontSize(14);
    doc.text("Alimentação • Exercícios • Saúde Mental • Rotina", 40, 110);

    // ----------------- PÁGINA 1 -----------------
    doc.addPage();
    doc.setTextColor("#000000");
    doc.setFontSize(20);
    doc.setFont("helvetica", "bold");
    doc.text("1. Alimentação Saudável", 40, 40);

    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text([
        "• Inclua frutas e vegetais variados diariamente.",
        "• Consuma proteínas magras e grãos integrais.",
        "• Evite açúcar em excesso e alimentos ultraprocessados.",
        "• Beba pelo menos 2 litros de água por dia.",
        "• Planeje refeições equilibradas e coloridas."
    ], 40, 70);

    doc.setFontSize(20);
    doc.setFont("helvetica", "bold");
    doc.text("2. Exercícios Físicos", 40, 180);

    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text([
        "• Caminhadas ou corridas 3-5 vezes por semana.",
        "• Musculação 2-3 vezes por semana.",
        "• Yoga ou alongamento diário.",
        "• Combine treino cardiovascular e de força.",
        "• Reserve tempo para lazer ativo."
    ], 40, 210);

    // ----------------- PÁGINA 2 -----------------
    doc.addPage();
    doc.setFontSize(20);
    doc.setFont("helvetica", "bold");
    doc.text("3. Saúde Mental e Sono", 40, 40);

    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text([
        "• Durma entre 7 e 9 horas por noite.",
        "• Pratique meditação ou respiração profunda.",
        "• Reduza estresse com hobbies e lazer.",
        "• Evite álcool e tabaco em excesso.",
        "• Estabeleça uma rotina diária saudável."
    ], 40, 70);

    doc.setFontSize(20);
    doc.setFont("helvetica", "bold");
    doc.text("4. Plano Semanal Sugerido", 40, 180);

    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text([
        "Segunda: Treino leve + frutas.",
        "Terça: Hidratação + caminhada.",
        "Quarta: Treino médio + legumes.",
        "Quinta: Meditação + hidratação.",
        "Sexta: Treino forte + proteínas.",
        "Sábado: Lazer ativo (bike, praia).",
        "Domingo: Descanso + alongamento."
    ], 40, 210);

    // Salvar PDF
    doc.save("Guia_Premium_Vida_Saudavel.pdf");
}
