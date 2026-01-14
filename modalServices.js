document.addEventListener("DOMContentLoaded", () => {

  const modalContainer = document.querySelector(".modal-services");
  const botaoMais = document.querySelector(".maisServicos");

  if (!modalContainer || !botaoMais) return;

  /* ========= BASE DO MODAL ========= */
  function createModal(html) {
    modalContainer.innerHTML = `
      <div class="ms-overlay">
        <div class="ms-modal">
          <button class="ms-close">✕</button>
          ${html}
        </div>
      </div>
    `;

    modalContainer.querySelector(".ms-close").onclick = closeModal;

    modalContainer.querySelector(".ms-overlay").onclick = (e) => {
      if (e.target.classList.contains("ms-overlay")) {
        closeModal();
      }
    };

    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modalContainer.innerHTML = "";
    document.body.style.overflow = "";
  }

  /* ========= NIVEL 1 — CATEGORIAS (servicesData.js) ========= */
  function openMainServices() {
    const items = services.map(s => `
      <li class="ms-item">
        <img class="ms-thumb" src="${s.img}" alt="${s.title}">
        <div class="ms-item-body">
          <h3>${s.title}</h3>
          <p class="ms-short">${s.short}</p>
        </div>
        <div class="ms-item-actions">
          <button class="ms-btn-ver" data-id="${s.id}">
            Ver detalhes
          </button>
        </div>
      </li>
    `).join("");

    createModal(`
      <div class="ms-header">
        <h2>Nossos Serviços</h2>
        <p>Escolha uma categoria</p>
      </div>
      <ul class="ms-list">${items}</ul>
    `);

    modalContainer.querySelectorAll(".ms-btn-ver").forEach(btn => {
      btn.onclick = () => {
        const id = Number(btn.dataset.id);
        if (id === 0) openHairServices(); // CABELO
        if (id === 1) openHandsFeetServices();
        if (id === 2) openHairTreatmentsServices();
        if (id === 3) openHairstylesServices();
        if (id === 4) openManicureNationalServices();
        if (id === 5) openHairTherapyServices();
      };
    });
  }

  /* ========= NIVEL 2 — SERVIÇOS DE CABELO (servicesDetails.js) ========= */
  function openHairServices() {
    const hairServices = servicesHair.filter(s => s.category === "cabelo");

    const items = hairServices.map(s => `
      <li class="ms-item">
        <div class="ms-item-body">
          <h3>${s.title}</h3>
          <p class="ms-short">${s.short}</p>
        </div>
        <div class="ms-item-actions">
          <button class="ms-btn-ver" data-id="${s.id}">
            Ver detalhes
          </button>
        </div>
      </li>
    `).join("");

    createModal(`
      <div class="ms-header">
        <h2>Serviços de Cabelo</h2>
        <p>Escolha um serviço</p>
      </div>
      <ul class="ms-list">${items}</ul>
    `);

    modalContainer.querySelectorAll(".ms-btn-ver").forEach(btn => {
      btn.onclick = () => {
        openHairDetails(Number(btn.dataset.id));
      };
    });
  }


  function openHandsFeetServices() {
    const list = servicesHandsFeet;

    const items = list.map(s => `
    <li class="ms-item">
      <div class="ms-item-body">
        <h3>${s.title}</h3>
        <p class="ms-short">${s.short}</p>
      </div>
      <div class="ms-item-actions">
        <button class="ms-btn-ver" data-id="${s.id}">
          Ver detalhes
        </button>
      </div>
    </li>
  `).join("");

    createModal(`
    <div class="ms-header">
      <h2>Mãos e Pés</h2>
      <p>Escolha um serviço</p>
    </div>
    <ul class="ms-list">${items}</ul>
  `);

    modalContainer.querySelectorAll(".ms-btn-ver").forEach(btn => {
      btn.onclick = () => {
        openHandsFeetDetails(Number(btn.dataset.id));
      };
    });
  }


  function openHairTreatmentsServices() {
    const items = servicesHairTreatments.map(s => `
    <li class="ms-item">
      <div class="ms-item-body">
        <h3>${s.title}</h3>
        <p class="ms-short">${s.short}</p>
      </div>
      <div class="ms-item-actions">
        <button class="ms-btn-ver" data-id="${s.id}">
          Ver detalhes
        </button>
      </div>
    </li>
  `).join("");

    createModal(`
    <div class="ms-header">
      <h2>Tratamentos Capilares</h2>
      <p>Escolha um tratamento</p>
    </div>
    <ul class="ms-list">${items}</ul>
  `);

    modalContainer.querySelectorAll(".ms-btn-ver").forEach(btn => {
      btn.onclick = () => {
        openHairTreatmentsDetails(Number(btn.dataset.id));
      };
    });
  }




  function openHairstylesServices() {
    const items = servicesHairstyles.map(s => `
    <li class="ms-item">
      <div class="ms-item-body">
        <h3>${s.title}</h3>
        <p class="ms-short">${s.short}</p>
      </div>
      <div class="ms-item-actions">
        <button class="ms-btn-ver" data-id="${s.id}">
          Ver detalhes
        </button>
      </div>
    </li>
  `).join("");

    createModal(`
    <div class="ms-header">
      <h2>Penteados</h2>
      <p>Escolha um estilo</p>
    </div>
    <ul class="ms-list">${items}</ul>
  `);

    modalContainer.querySelectorAll(".ms-btn-ver").forEach(btn => {
      btn.onclick = () => {
        openHairstylesDetails(Number(btn.dataset.id));
      };
    });
  }


  function openManicureNationalServices() {
    const items = servicesManicureNational.map(s => `
    <li class="ms-item">
      <div class="ms-item-body">
        <h3>${s.title}</h3>
        <p class="ms-short">${s.short}</p>
      </div>
      <div class="ms-item-actions">
        <button class="ms-btn-ver" data-id="${s.id}">
          Ver detalhes
        </button>
      </div>
    </li>
  `).join("");

    createModal(`
    <div class="ms-header">
      <h2>Manicure Nacional</h2>
      <p>Serviços disponíveis</p>
    </div>
    <ul class="ms-list">${items}</ul>
  `);

    modalContainer.querySelectorAll(".ms-btn-ver").forEach(btn => {
      btn.onclick = () => {
        openManicureNationalDetails(Number(btn.dataset.id));
      };
    });
  }



  function openHairTherapyServices() {
    const items = servicesHairTherapy.map(s => `
    <li class="ms-item">
      <div class="ms-item-body">
        <h3>${s.title}</h3>
        <p class="ms-short">${s.short}</p>
      </div>
      <div class="ms-item-actions">
        <button class="ms-btn-ver" data-id="${s.id}">
          Ver detalhes
        </button>
      </div>
    </li>
  `).join("");

    createModal(`
    <div class="ms-header">
      <h2>Terapia Capilar</h2>
      <p>Serviço disponível</p>
    </div>
    <ul class="ms-list">${items}</ul>
  `);

    modalContainer.querySelectorAll(".ms-btn-ver").forEach(btn => {
      btn.onclick = () => {
        openHairTherapyDetails(Number(btn.dataset.id));
      };
    });
  }



  /* ========= NIVEL 3 — DETALHE DO SERVIÇO ========= */
  function openHairDetails(id) {
    const s = servicesHair.find(item => item.id === id);
    if (!s) return;

    createModal(`
  <div class="ms-service-detail">

    <div class="ms-service-image">
      <img src="${s.img}" alt="${s.title}">
    </div>

    <div class="ms-service-info">
      <h2>${s.title}</h2>

      <p><strong>Duração:</strong> ${s.duration}</p>
      <p><strong>Valor:</strong> ${s.price}</p>

      <p class="ms-desc">${s.desc}</p>

      <div class="ms-actions">
        <button class="ms-voltar">Voltar</button>
        <button class="ms-agendar">Agendar</button>
      </div>
    </div>

  </div>
`);


    modalContainer.querySelector(".ms-voltar").onclick = openHairServices;

    modalContainer.querySelector(".ms-agendar").onclick = () => {
      window.servicoSelecionado = s;   // <<< linha nova e fundamental
      closeModal();
      document.querySelector(".btn-header").click();
    };

  }



  function openHandsFeetDetails(id) {
    const s = servicesHandsFeet.find(item => item.id === id);
    if (!s) return;

    createModal(`
    <div class="ms-service-detail">
      <div class="ms-service-image">
        <img src="${s.img}" alt="${s.title}">
      </div>

      <div class="ms-service-info">
        <h2>${s.title}</h2>
        <p><strong>Duração:</strong> ${s.duration}</p>
        <p><strong>Valor:</strong> ${s.price}</p>
        <p class="ms-desc">${s.desc}</p>

        <div class="ms-actions">
          <button class="ms-voltar">Voltar</button>
          <button class="ms-agendar">Agendar</button>
        </div>
      </div>
    </div>
  `);

    modalContainer.querySelector(".ms-voltar").onclick = openHandsFeetServices;

    modalContainer.querySelector(".ms-agendar").onclick = () => {
      window.servicoSelecionado = s;
      closeModal();
      document.querySelector(".btn-header").click();
    };
  }


  function openHairTreatmentsDetails(id) {
    const s = servicesHairTreatments.find(item => item.id === id);
    if (!s) return;

    createModal(`
    <div class="ms-service-detail">
      <div class="ms-service-image">
        <img src="${s.img}" alt="${s.title}">
      </div>

      <div class="ms-service-info">
        <h2>${s.title}</h2>
        <p><strong>Duração:</strong> ${s.duration}</p>
        <p><strong>Valor:</strong> ${s.price}</p>
        <p class="ms-desc">${s.desc}</p>

        <div class="ms-actions">
          <button class="ms-voltar">Voltar</button>
          <button class="ms-agendar">Agendar</button>
        </div>
      </div>
    </div>
  `);

    modalContainer.querySelector(".ms-voltar").onclick = openHairTreatmentsServices;

    modalContainer.querySelector(".ms-agendar").onclick = () => {
      window.servicoSelecionado = s;
      closeModal();
      document.querySelector(".btn-header").click();
    };
  }



  function openHairstylesDetails(id) {
    const s = servicesHairstyles.find(item => item.id === id);
    if (!s) return;

    createModal(`
    <div class="ms-service-detail">
      <div class="ms-service-image">
        <img src="${s.img}" alt="${s.title}">
      </div>

      <div class="ms-service-info">
        <h2>${s.title}</h2>
        <p><strong>Duração:</strong> ${s.duration}</p>
        <p><strong>Valor:</strong> ${s.price}</p>
        <p class="ms-desc">${s.desc}</p>

        <div class="ms-actions">
          <button class="ms-voltar">Voltar</button>
          <button class="ms-agendar">Agendar</button>
        </div>
      </div>
    </div>
  `);

    modalContainer.querySelector(".ms-voltar").onclick = openHairstylesServices;

    modalContainer.querySelector(".ms-agendar").onclick = () => {
      window.servicoSelecionado = s;
      closeModal();
      document.querySelector(".btn-header").click();
    };
  }


  function openManicureNationalDetails(id) {
    const s = servicesManicureNational.find(item => item.id === id);
    if (!s) return;

    createModal(`
    <div class="ms-service-detail">
      <div class="ms-service-image">
        <img src="${s.img}" alt="${s.title}">
      </div>

      <div class="ms-service-info">
        <h2>${s.title}</h2>
        <p><strong>Duração:</strong> ${s.duration}</p>
        <p><strong>Valor:</strong> ${s.price}</p>
        <p class="ms-desc">${s.desc}</p>

        <div class="ms-actions">
          <button class="ms-voltar">Voltar</button>
          <button class="ms-agendar">Agendar</button>
        </div>
      </div>
    </div>
  `);

    modalContainer.querySelector(".ms-voltar").onclick =
      openManicureNationalServices;

    modalContainer.querySelector(".ms-agendar").onclick = () => {
      window.servicoSelecionado = s;
      closeModal();
      document.querySelector(".btn-header").click();
    };
  }


  function openHairTherapyDetails(id) {
    const s = servicesHairTherapy.find(item => item.id === id);
    if (!s) return;

    createModal(`
    <div class="ms-service-detail">
      <div class="ms-service-image">
        <img src="${s.img}" alt="${s.title}">
      </div>

      <div class="ms-service-info">
        <h2>${s.title}</h2>
        <p><strong>Duração:</strong> ${s.duration}</p>
        <p><strong>Valor:</strong> ${s.price}</p>
        <p class="ms-desc">${s.desc}</p>

        <div class="ms-actions">
          <button class="ms-voltar">Voltar</button>
          <button class="ms-agendar">Agendar</button>
        </div>
      </div>
    </div>
  `);

    modalContainer.querySelector(".ms-voltar").onclick =
      openHairTherapyServices;

    modalContainer.querySelector(".ms-agendar").onclick = () => {
      window.servicoSelecionado = s;
      closeModal();
      document.querySelector(".btn-header").click();
    };
  }



  /* ========= BOTÃO PRINCIPAL ========= */
  botaoMais.addEventListener("click", (e) => {
    e.preventDefault();
    openMainServices();
  });

});
