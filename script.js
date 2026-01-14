const btnAbrir = document.querySelector(".btn-header");
const btnHero = document.querySelector(".hero .btn");

function minutos(hora) {
    const [h, m] = hora.split(":").map(Number);
    return h * 60 + m;
}

const diasAbertos = [1, 2, 3, 4, 5, 6];
const datasBloqueadas = [];

/* ================= MODAL ================= */

const modal = document.querySelector("#modal-agendar");
const fechar = modal.querySelector(".close");

btnAbrir.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "flex";
    atualizarServicoEProfissionais(); // <<< linha-chave
});



function abrirModalAgendamento() {
    modal.style.display = "flex";
}


// Fechar no X
fechar.addEventListener("click", () => {
    modal.style.display = "none";
});

// Fechar clicando fora
window.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
});

/* ================= CALENDÁRIO ================= */

const calendarioContainer = document.getElementById("calendario");
const inputServico = document.getElementById("input-servico");
const selectProfissional = document.getElementById("select-profissional");

let profissionalSelecionada = null;
let horariosOcupados = [];

// 🔧 Ajuste de proteção
async function carregarAgenda(data) {
    try {
        const res = await fetch(`https://adminhannah-backend.onrender.com/api/public/agenda?data=${data}`);
        const dados = await res.json();
        horariosOcupados = Array.isArray(dados) ? dados : [];
    } catch {
        horariosOcupados = [];
    }
}

let mesAtual = new Date().getMonth();
let anoAtual = new Date().getFullYear();
let diaSelecionado = null;

function gerarCalendario(ano = anoAtual, mes = mesAtual) {
    calendarioContainer.innerHTML = "";

    const data = new Date(ano, mes, 1);
    const ultimoDia = new Date(ano, mes + 1, 0).getDate();
    const primeiroDiaSemana = data.getDay();

    const header = document.createElement("div");
    header.classList.add("calendario-header");
    header.innerHTML = `
        <button id="prev">&lt;</button>
        <h3>${data.toLocaleString("pt-BR", { month: "long" })} ${ano}</h3>
        <button id="next">&gt;</button>
    `;
    calendarioContainer.appendChild(header);

    const semana = document.createElement("div");
    semana.classList.add("calendario-grid");
    ["D","S","T","Q","Q","S","S"].forEach(d => {
        const el = document.createElement("div");
        el.textContent = d;
        el.classList.add("semana");
        semana.appendChild(el);
    });
    calendarioContainer.appendChild(semana);

    const grid = document.createElement("div");
    grid.classList.add("calendario-grid");

    for (let i = 0; i < primeiroDiaSemana; i++) grid.appendChild(document.createElement("div"));

    for (let dia = 1; dia <= ultimoDia; dia++) {
        const el = document.createElement("div");
        el.classList.add("dia");
        el.textContent = dia;

        const diaSemana = new Date(ano, mes, dia).getDay();
        const dataString = `${ano}-${String(mes+1).padStart(2,"0")}-${String(dia).padStart(2,"0")}`;

        if (!diasAbertos.includes(diaSemana) || datasBloqueadas.includes(dataString)) {
            el.classList.add("bloqueado");
        } else {
            el.classList.add("disponivel");
            el.onclick = async () => {
                document.querySelectorAll(".dia").forEach(d => d.classList.remove("selecionado"));
                el.classList.add("selecionado");
                diaSelecionado = dataString;
                await carregarAgenda(dataString);
                gerarHorarios();
            };
        }
        grid.appendChild(el);
    }

    calendarioContainer.appendChild(grid);

    document.getElementById("prev").onclick = () => {
        mesAtual = mesAtual === 0 ? 11 : mesAtual - 1;
        if (mesAtual === 11) anoAtual--;
        gerarCalendario();
    };

    document.getElementById("next").onclick = () => {
        mesAtual = mesAtual === 11 ? 0 : mesAtual + 1;
        if (mesAtual === 0) anoAtual++;
        gerarCalendario();
    };
}

gerarCalendario();

/* ================= HORÁRIOS ================= */

const horarioContainer = document.getElementById("horario");
let horarioSelecionado = null;

function gerarHorarios() {
    if (!profissionalSelecionada) {
        horarioContainer.innerHTML = "<p>Selecione uma profissional.</p>";
        return;
    }

    if (!window.servicoSelecionado) {
        horarioContainer.innerHTML = "<p>Selecione um serviço primeiro.</p>";
        return;
    }

    horarioContainer.innerHTML = "";
    horarioContainer.style.display = "flex";

    const duracaoServico = minutos(window.servicoSelecionado.duration);

    for (let h = 9; h <= 18; h++) {
        for (let m = 0; m < 60; m += 15) {
            const hora = `${String(h).padStart(2,"0")}:${String(m).padStart(2,"0")}`;
            const inicio = minutos(hora);
            const fim = inicio + duracaoServico;

            const conflito = horariosOcupados.some(a => inicio < a.fim && fim > a.inicio);

            const btn = document.createElement("div");
            btn.classList.add("hora-item");
            btn.textContent = hora;

            if (conflito) btn.classList.add("bloqueado");
            else btn.onclick = () => {
                document.querySelectorAll(".hora-item").forEach(h => h.classList.remove("hora-selecionada"));
                btn.classList.add("hora-selecionada");
                horarioSelecionado = hora;
            };

            horarioContainer.appendChild(btn);
        }
    }
}

/* ================= FORMULÁRIO ================= */

const form = document.getElementById("form-agendar");
const numeroWhats = "5511982765108";

form.addEventListener("submit", async e => {
    e.preventDefault();

    const nome = input("input-nome");
    const whatsapp = input("input-whatsapp");
    const cpf = input("input-cpf");
    const email = input("input-email");

    if (!window.servicoSelecionado || !profissionalSelecionada || !diaSelecionado || !horarioSelecionado)
        return alert("Preencha todos os dados.");

    const dados = { nome, telefone: whatsapp, cpf, email, servico: window.servicoSelecionado.title, profissional: profissionalSelecionada, data: diaSelecionado, horario: horarioSelecionado, duration: window.servicoSelecionado.duration };

    await fetch("https://adminhannah-backend.onrender.com/api/public/agendar", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(dados) });

    window.open(`https://wa.me/${numeroWhats}?text=${encodeURIComponent(`Olá, meu nome é ${nome}. Agendei ${dados.servico} dia ${dados.data} às ${dados.horario}`)}`, "_blank");
    alert("Agendamento confirmado!");
    modal.style.display = "none";
});

function input(id) { return document.getElementById(id).value.trim(); }

/* ================= SERVIÇOS ================= */

function atualizarServicoEProfissionais() {
    if (!window.servicoSelecionado) return;

    modal.style.display = "flex";
    inputServico.value = window.servicoSelecionado.title;

    selectProfissional.innerHTML = `<option value="">Selecione a profissional</option>`;
    window.servicoSelecionado.professionals.forEach(nome => {
        const option = document.createElement("option");
        option.value = nome;
        option.textContent = nome;
        selectProfissional.appendChild(option);
    });

    profissionalSelecionada = null;
    horarioContainer.innerHTML = "<p>Escolha uma profissional.</p>";
}

selectProfissional.onchange = () => {
    profissionalSelecionada = selectProfissional.value;
    if (diaSelecionado) gerarHorarios();
};

/* ================= SCROLL DOS BOTÕES ================= */

document.querySelectorAll(".js-agendar-scroll").forEach(botao => {
    botao.onclick = e => {
        e.preventDefault();
        document.querySelector("#servicos").scrollIntoView({ behavior: "smooth" });
    };
});
