const servicesHair = [
  {
    id: 1,
    category: "cabelo",
    title: "Aplicação de Coloração",
    duration: "1h 30min",
    price: "A partir de R$180",
    short: "Aplicação de coloração.",
    desc: "O banho de petróleo é um tratamento capilar indicado para cabelos escuros. Ele hidrata profundamente, realça a cor natural dos fios, dá brilho intenso, alinha as madeixas e reduz o frizz. Também ajuda a restaurar a maciez e a saúde dos cabelos danificados, deixando-os mais sedosos, nutridos e com aparência saudável. Ideal para devolver vida aos fios opacos e ressecados.",
    img: "./mediaHair/aplicacao-coloracao.jpg"
  },
  {
    id: 2,
    category: "cabelo",
    title: "Banho de Petróleo",
    duration: "1h20min",
    price: "A partir de R$170",
    short: "Tratamento para cabelos escuros.",
    desc: "Tratamento capilar indicado para cabelos escuros. Hidrata profundamente, realça a cor natural, reduz frizz e devolve brilho e maciez aos fios.",
    img: "./mediaHair/banho-petroleo.jpg"
  },
  {
    id: 3,
    category: "cabelo",
    title: "Botox Orgânico",
    duration: "2h30min",
    price: "A partir de R$200",
    short: "Tratamento de alinhamento capilar.",
    desc: "Tratamento que reduz volume, hidrata profundamente e devolve vitalidade aos fios.",
    img: "./mediaHair/botox-organico.jpg"
  },
  {
    id: 4,
    category: "cabelo",
    title: "Coloração Tinta da Cliente",
    duration: "1h",
    price: "A partir de R$90",
    short: "Tintura com produto da cliente.",
    desc: "Tintura dos Cabelos com produto da cliente.",
    img: "./mediaHair/tinta-cliente.jpg"
  },
  {
    id: 5,
    category: "cabelo",
    title: "Corte",
    duration: "30min",
    price: "A partir de R$95",
    short: "Corte com ou sem finalização.",
    desc: "Corte com finalização ou sem finalização *",
    img: "./mediaHair/corte.jpg"
  },
  {
    id: 6,
    category: "cabelo",
    title: "Corte – Franja",
    duration: "30min",
    price: "R$45",
    short: "Corte apenas da franja.",
    desc: "Corte exclusivo da franja para manutenção ou mudança de visual.",
    img: "./mediaHair/corte-franja.jpg"
  },
  {
    id: 7,
    category: "cabelo",
    title: "Corte Bordado",
    duration: "1h",
    price: "A partir de R$120",
    short: "Corte Bordado",
    desc: "Corte Bordado",
    img: "./mediaHair/corte-bordado.jpg"
  },
  {
    id: 8,
    category: "cabelo",
    title: "Corte Infantil",
    duration: "30min",
    price: "R$70",
    short: "Corte infantil.",
    desc: "Corte pensado para crianças, com cuidado e conforto.",
    img: "./mediaHair/corte-infantil.jpg"
  },
  {
    id: 9,
    category: "cabelo",
    title: "Corte Masculino",
    duration: "30min",
    price: "R$50",
    short: "Higienização e secagem.",
    desc: "Corte masculino com higienização e secagem.",
    img: "./mediaHair/corte-masculino.jpg"
  },
  {
    id: 10,
    category: "cabelo",
    title: "Escova Fotônica sem Formol",
    duration: "3h",
    price: "A partir de R$270",
    short: "Alinhamento sem formol.",
    desc: "Curto: R$270,00 Médio: R$300,00 Comprido: R$400,00 Longo: R$500,00",
    img: "./mediaHair/escova.jpg"
  },
  {
    id: 11,
    category: "cabelo",
    title: "Escova Modelada",
    duration: "1h",
    price: "A partir de R$95",
    short: "Escova modelada.",
    desc: "Curto: R$85,00 Médio: R$95,00 Comprido: R$125,00 Longos: R$140,00",
    img: "./mediaHair/escova-modelada.jpg"
  },
  {
    id: 12,
    category: "cabelo",
    title: "Escova Progressiva",
    duration: "3h 10min",
    price: "A partir de R$270",
    short: "Progressiva.",
    desc: "R$270,00 Médio: R$300,00 Comprido: R$350,00 Longos: R$500,00",
    img: "./mediaHair/escova-progressiva.jpg"
  },
  {
    id: 13,
    category: "cabelo",
    title: "Escova Simples",
    duration: "50min",
    price: "A partir de R$95",
    short: "Escova simples.",
    desc: "Curto: R$80,00 Médio: R$90,00 Comprido: R$100,00 Longos: R$140,00",
    img: "./mediaHair/escova-simples.jpg"
  },
  {
    id: 14,
    category: "cabelo",
    title: "Hidratação",
    duration: "1h",
    price: "A partir de R$120",
    short: "Hidratação capilar.",
    desc: "Tratamento de hidratação para devolver maciez e brilho aos fios.",
    img: "./mediaHair/hidratacao.jpg"
  },
  {
    id: 15,
    category: "cabelo",
    title: "Hidratação + Escova",
    duration: "1h",
    price: "A partir de R$150",
    short: "Combo hidratação + escova.",
    desc: "Hidratação seguida de escova promocional.",
    img: "./mediaHair/hidratacao.jpg"
  },
  {
    id: 16,
    category: "cabelo",
    title: "Lavagem",
    duration: "20min",
    price: "A partir de R$50",
    short: "Lavagem e secagem.",
    desc: "Lavagem dos cabelos com secagem.",
    img: "./mediaHair/lavagem.jpg"
  },
  {
    id: 17,
    category: "cabelo",
    title: "Luzes",
    duration: "4h 20min",
    price: "A partir de R$590",
    short: "Luzes no cabelo.",
    desc: "Na touca: a partir de R$490,00 No papel: a partir de R$590,00",
    img: "./mediaHair/luzes.jpg"
  },
  {
    id: 18,
    category: "cabelo",
    title: "Reconstrução",
    duration: "1h 30min",
    price: "A partir de R$210",
    short: "Reconstrução capilar.",
    desc: "Tratamento para recuperação profunda dos fios danificados.",
    img: "./mediaHair/hidratacao.jpg"
  },
  {
    id: 19,
    category: "cabelo",
    title: "Retoque de Coloração",
    duration: "1h",
    price: "A partir de R$180",
    short: "Retoque de raiz.",
    desc: "Retoque de coloração utilizando produtos do salão.",
    img: "./mediaHair/aplicacao-coloracao.jpg"
  }
];


/*_________________________________________________*/


const servicesHandsFeet = [
  {
    id: 201,
    category: "maos-pes",
    title: "Banho de Gel na Unha",
    duration: "1h 30min",
    price: "A partir de R$180",
    short: "Fortalecimento e brilho intenso.",
    desc: "Ao receber o banho de gel as unhas param de ficar quebradiças e não lascam, proporcionando grande brilho.",
    img: "./mediaHandsFeet/banho-gel.jpg"
  },
  {
    id: 202,
    category: "maos-pes",
    title: "Esmaltação – Mãos",
    duration: "30min",
    price: "R$22",
    short: "Esmaltação simples.",
    desc: "Apenas passar ou trocar o esmalte das unhas das mãos.",
    img: "./mediaHandsFeet/esmalte-maos.jpg"
  },
  {
    id: 203,
    category: "maos-pes",
    title: "Esmaltação – Pés",
    duration: "30min",
    price: "R$23",
    short: "Esmaltação simples.",
    desc: "Apenas passar ou trocar o esmalte das unhas dos pés.",
    img: "./mediaHandsFeet/esmalte-pes.jpg"
  },
  {
    id: 204,
    category: "maos-pes",
    title: "Esmaltação em Gel",
    duration: "1h",
    price: "A partir de R$100",
    short: "Esmaltação duradoura.",
    desc: "Esmaltação em gel com maior durabilidade e acabamento profissional.",
    img: "./mediaHandsFeet/esmalte-gel.jpg"
  },
  {
    id: 205,
    category: "maos-pes",
    title: "Esmaltação Pé e Mão",
    duration: "40min",
    price: "R$40",
    short: "Sem cuticulagem.",
    desc: "Esmaltação das unhas das mãos e dos pés sem cuticulagem.",
    img: "./mediaHandsFeet/esmalte-mao-pe.jpg"
  },
  {
    id: 206,
    category: "maos-pes",
    title: "Manicure – Esmalte Nacional",
    duration: "45min",
    price: "R$40",
    short: "Manicure tradicional.",
    desc: "Cutilação e esmaltação das unhas das mãos com esmalte nacional.",
    img: "./mediaHandsFeet/manicure-nacional.jpg"
  },
  {
    id: 207,
    category: "maos-pes",
    title: "Manicure – Francesinha",
    duration: "45min",
    price: "R$45",
    short: "Estilo clássico.",
    desc: "Cutilação e esmaltação das unhas das mãos no estilo francesinha.",
    img: "./mediaHandsFeet/manicure-francesinha.jpg"
  },
  {
    id: 208,
    category: "maos-pes",
    title: "Manicure Decorada",
    duration: "1h",
    price: "R$45",
    short: "Com desenhos.",
    desc: "Cutilação e esmaltação com desenhos.",
    img: "./mediaHandsFeet/manicure-decorada.jpg"
  },
  {
    id: 209,
    category: "maos-pes",
    title: "Manicure e Pedicure – Francesinha",
    duration: "1h",
    price: "R$85",
    short: "Mãos e pés.",
    desc: "Cutilação e esmaltação das unhas das mãos e dos pés no estilo francesinha.",
    img: "./mediaHandsFeet/manicure-pedicure-francesinha.jpg"
  },
  {
    id: 210,
    category: "maos-pes",
    title: "Manicure e Pedicure Decoradas",
    duration: "1h 30min",
    price: "R$85",
    short: "Decoradas.",
    desc: "Cutilação e esmaltação com desenhos, strass ou adesivos.",
    img: "./mediaHandsFeet/manicure-pedicure-decorada.jpg"
  },
  {
    id: 211,
    category: "maos-pes",
    title: "Manicure e Pedicure Nacional",
    duration: "1h 30min",
    price: "R$75",
    short: "Completo.",
    desc: "Cutilação e esmaltação das unhas das mãos e dos pés.",
    img: "./mediaHandsFeet/manicure-pedicure.jpg"
  },
  {
    id: 212,
    category: "maos-pes",
    title: "Pedicure – Esmalte Nacional",
    duration: "45min",
    price: "R$45",
    short: "Pedicure tradicional.",
    desc: "Cutilação e esmaltação das unhas dos pés.",
    img: "./mediaHandsFeet/pedicure-nacional.jpg"
  },
  {
    id: 213,
    category: "maos-pes",
    title: "Pedicure – Francesinha",
    duration: "45min",
    price: "R$50",
    short: "Clássico.",
    desc: "Cutilação e esmaltação das unhas dos pés no estilo francesinha.",
    img: "./mediaHandsFeet/pedicure-francesinha.jpg"
  },
  {
    id: 214,
    category: "maos-pes",
    title: "Pedicure Decorada",
    duration: "50min",
    price: "R$50",
    short: "Com desenhos.",
    desc: "Cutilação e esmaltação com desenhos.",
    img: "./mediaHandsFeet/pedicure-decorada.jpg"
  },
  {
    id: 215,
    category: "maos-pes",
    title: "Pedicure Nacional",
    duration: "45min",
    price: "R$45",
    short: "Pedicure completo.",
    desc: "Cutilação e esmaltação das unhas dos pés.",
    img: "./mediaHandsFeet/pedicure.jpg"
  },
  {
    id: 216,
    category: "maos-pes",
    title: "Spa dos Pés",
    duration: "1h 30min",
    price: "A consultar",
    short: "Relaxamento e hidratação.",
    desc: "Promove hidratação, tonificação e relaxamento dos pés.",
    img: "./mediaHandsFeet/spa-pes.jpg"
  }
];


/*__________________________________*/


const servicesHairstyles = [
  {
    id: 301,
    category: "penteados",
    title: "Baby Liss / Cachos",
    duration: "1h",
    price: "A partir de R$90",
    short: "Cachos modernos.",
    desc: "Cachos nos cabelos. Técnica pode ser realizada manualmente ou com babyliss. Os cachos estão em alta e dão um ar informal ao visual.",
    img: "./mediaPenteados/babyliss.jpg"
  },
  {
    id: 302,
    category: "penteados",
    title: "Coques",
    duration: "1h",
    price: "R$200",
    short: "Clássico e elegante.",
    desc: "Diversos estilos de coques podem ser escolhidos pelo cliente. Os coques são penteados clássicos que podem ser usados tanto no dia a dia como em eventos formais.",
    img: "./mediaPenteados/coques.jpg"
  },
  {
    id: 303,
    category: "penteados",
    title: "Penteado",
    duration: "1h",
    price: "A partir de R$200",
    short: "Penteado personalizado.",
    desc: "Penteado desenvolvido de acordo com o estilo e ocasião.",
    img: "./mediaPenteados/penteado.jpg"
  },
  {
    id: 304,
    category: "penteados",
    title: "Penteado de Noiva",
    duration: "1h",
    price: "A partir de R$370",
    short: "Especial para noivas.",
    desc: "Penteado de noiva desenvolvido com cuidado especial para um dos dias mais importantes.",
    img: "./mediaPenteados/noiva.jpg"
  },
  {
    id: 305,
    category: "penteados",
    title: "Penteado Preso",
    duration: "1h",
    price: "A partir de R$200",
    short: "Ideal para eventos.",
    desc: "Diversos estilos de penteado preso. Ideal para casamentos, formaturas e bailes de debutantes.",
    img: "./mediaPenteados/preso.jpg"
  },
  {
    id: 306,
    category: "penteados",
    title: "Penteado Solto",
    duration: "1h",
    price: "A partir de R$200",
    short: "Leve e sofisticado.",
    desc: "Diversos estilos de penteado solto. Prender algumas mechas e deixar outras soltas é uma aposta certa para não errar no visual.",
    img: "./mediaPenteados/solto.jpg"
  },
  {
    id: 307,
    category: "penteados",
    title: "Tranças",
    duration: "1h",
    price: "A consultar",
    short: "Elegantes e versáteis.",
    desc: "Diversos estilos de tranças podem ser escolhidos. As tranças são chiques, elegantes e ideais para o dia a dia ou grandes eventos.",
    img: "./mediaPenteados/trancas.jpg"
  }
];



/*______________________________ */



const servicesHairTreatments = [
  {
    id: 401,
    category: "tratamento-capilar",
    title: "Hidratação Itallian Color com Escova",
    duration: "2h 10min",
    price: "A partir de R$120",
    short: "Hidratação profunda com escova.",
    desc: "Hidratação Itallian Color associada à escova, devolvendo maciez, brilho e saúde aos fios.",
    img: "./mediaTratamentoCapilar/hidratacao-itallian.jpg"
  },
  {
    id: 402,
    category: "tratamento-capilar",
    title: "Nutrição com Escova",
    duration: "1h",
    price: "A partir de R$170",
    short: "Reposição de nutrientes.",
    desc: "Tratamento de nutrição capilar com escova, indicado para fios ressecados e sem vida.",
    img: "./mediaTratamentoCapilar/nutricao.jpg"
  },
  {
    id: 403,
    category: "tratamento-capilar",
    title: "Ozonioterapia",
    duration: "2h",
    price: "A partir de R$210",
    short: "Tratamento terapêutico.",
    desc: "Ozonioterapia capilar auxilia no fortalecimento dos fios, controle da oleosidade e saúde do couro cabeludo.",
    img: "./mediaTratamentoCapilar/ozonioterapia.jpg"
  },
  {
    id: 404,
    category: "tratamento-capilar",
    title: "Reconstrução Joico com Escova",
    duration: "1h",
    price: "A partir de R$210",
    short: "Reconstrução intensiva.",
    desc: "Reconstrução Joico com escova. Valores variam conforme o comprimento: Curto R$210 | Médio R$250 | Comprido R$280 | Longo R$350.",
    img: "./mediaTratamentoCapilar/reconstrucao-joico.jpg"
  }
];


/*________________________________ */
const servicesManicureNational = [
  {
    id: 501,
    category: "manicure-nacional",
    title: "Top Coat em Gel",
    duration: "1h",
    price: "R$ 20",
    short: "Durabilidade extra para o esmalte.",
    desc: "Aumente a durabilidade do seu esmalte em até 1 mês com acabamento em gel, garantindo brilho intenso e maior resistência.",
    img: "./mediaManicure/top-coat-gel.jpg"
  }
];

/*________________________________ */

const servicesHairTherapy = [
  {
    id: 601,
    category: "terapia-capilar",
    title: "Terapia Capilar",
    duration: "2h 10min",
    price: "A partir de R$210",
    short: "Tratamento completo para o couro cabeludo.",
    desc: "Tratamento de terapia capilar realizado de forma avulsa, indicado para fortalecer os fios, equilibrar o couro cabeludo e promover saúde capilar.",
    img: "./mediaTerapiaCapilar/terapia-capilar.jpg"
  }
];
