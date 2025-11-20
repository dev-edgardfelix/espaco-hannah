/* ============================
   MODAL
============================ */
const btnAbrir = document.querySelector(".btn-header");
const modal = document.querySelector("#modal-agendar");
const fechar = modal.querySelector(".close");

// Abrir modal
btnAbrir.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "flex";
});

// Fechar no X
fechar.addEventListener("click", () => {
    modal.style.display = "none";
});

// Fechar clicando fora da caixa
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});


/* ============================
   CALENDÁRIO
============================ */

// Container onde o calendário aparece
const calendarioContainer = document.getElementById("calendario");

// Dias bloqueados manualmente
const datasBloqueadas = ["2025-02-15", "2025-02-20"];

// Dias de funcionamento (0 = Domingo, 6 = Sábado)
const diasAbertos = [2, 3, 4, 5, 6]; 
// Terça a Sábado

// Estado atual
let mesAtual = new Date().getMonth();
let anoAtual = new Date().getFullYear();

// Guarda o dia selecionado
let diaSelecionado = null;


function gerarCalendario(ano = anoAtual, mes = mesAtual) {

    calendarioContainer.innerHTML = "";

    const data = new Date(ano, mes, 1);
    const ultimoDia = new Date(ano, mes + 1, 0).getDate();
    const primeiroDiaSemana = data.getDay();


    /* ----- HEADER ----- */
    const header = document.createElement("div");
    header.classList.add("calendario-header");

    header.innerHTML = `
        <button id="prev">&lt;</button>
        <h3>${data.toLocaleString("pt-BR", { month: "long" })} ${ano}</h3>
        <button id="next">&gt;</button>
    `;

    calendarioContainer.appendChild(header);


    /* ----- DIAS DA SEMANA ----- */
    const semana = document.createElement("div");
    semana.classList.add("calendario-grid");

    ["D","S","T","Q","Q","S","S"].forEach(d => {
        const el = document.createElement("div");
        el.textContent = d;
        el.classList.add("semana");
        semana.appendChild(el);
    });

    calendarioContainer.appendChild(semana);


    /* ----- GRID DOS DIAS ----- */
    const grid = document.createElement("div");
    grid.classList.add("calendario-grid");

    // Espaços vazios até o primeiro dia do mês
    for (let i = 0; i < primeiroDiaSemana; i++) {
        const vazio = document.createElement("div");
        grid.appendChild(vazio);
    }

    // Dias do mês
    for (let dia = 1; dia <= ultimoDia; dia++) {
        const el = document.createElement("div");
        el.classList.add("dia");
        el.textContent = dia;

        const diaSemana = new Date(ano, mes, dia).getDay();
        const dataString = `${ano}-${String(mes+1).padStart(2,'0')}-${String(dia).padStart(2,'0')}`;

        const aberto = diasAbertos.includes(diaSemana);
        const bloqueado = datasBloqueadas.includes(dataString);

        if (!aberto || bloqueado) {
            el.classList.add("bloqueado");
        } else {
            el.classList.add("disponivel");

            // Selecionar dia
            el.addEventListener("click", () => {
                document.querySelectorAll(".dia").forEach(d => d.classList.remove("selecionado"));
                el.classList.add("selecionado");
                diaSelecionado = dataString;

                gerarHorarios();
            });
        }

        grid.appendChild(el);
    }

    calendarioContainer.appendChild(grid);


    /* ----- BOTÕES DE NAVEGAÇÃO ----- */
    document.getElementById("prev").onclick = () => {
        mesAtual--;
        if (mesAtual < 0) {
            mesAtual = 11;
            anoAtual--;
        }
        gerarCalendario(anoAtual, mesAtual);
    };

    document.getElementById("next").onclick = () => {
        mesAtual++;
        if (mesAtual > 11) {
            mesAtual = 0;
            anoAtual++;
        }
        gerarCalendario(anoAtual, mesAtual);
    };
}


/* Rodar o calendário na abertura */
gerarCalendario();

/* ============================
   HORÁRIOS
============================ */

const horarioContainer = document.getElementById("horario");
let horarioSelecionado = null;

// tabela de horários do dia (você pode mudar quando quiser)
const horariosDia = [
  ["09:45", "10:30", "11:15"],
  ["12:40", "13:30", "14:15", "15:00"],
  ["15:45", "16:30", "17:15"],
  ["18:00", "18:45"]
];

function gerarHorarios() {
    horarioContainer.innerHTML = "";
    horarioContainer.style.display = "flex";

    horariosDia.forEach(grupo => {
        const linha = document.createElement("div");
        linha.classList.add("linha-horarios");

        grupo.forEach(hora => {
            const btn = document.createElement("div");
            btn.classList.add("hora-item");
            btn.textContent = hora;

            btn.onclick = () => {
                document.querySelectorAll(".hora-item")
                    .forEach(h => h.classList.remove("hora-selecionada"));

                btn.classList.add("hora-selecionada");
                horarioSelecionado = hora;
            };

            linha.appendChild(btn);
        });

        horarioContainer.appendChild(linha);
    });
}
