// produtos.js - Dados e funções compartilhadas

const produtos = [
    { 
        id: 1,
        nome: 'Notebook Gamer Acer Nitro V15 Anv15-52-52vn Intel® Core™ i5-13420h 13ªg 512 Gb SSD 16 Gb Ram RTX 4060 15.6” - NH.U1UAL.001', 
        preco: 5999, 
        img: 'https://i.imgur.com/zN7JH9l.png',
        descricao: 'Notebook Gamer Acer Nitro V15 Anv15-52-52vn Intel® Core™ i5-13420h 13ªg 512 Gb SSD 16 Gb Ram RTX 4060 15.6” - NH.U1UAL.001',
        especificacoes: [
           'Processador: AMD Ryzen™ 7 7735HS (8 núcleos, 16 threads, até 4.75 GHz)',
        'Memória RAM: 16 GB DDR5 (expansível até 32 GB)',
        'Tela: 15.6" LED IPS Full HD, 165 Hz, antirreflexo',
        'Placa de Vídeo: NVIDIA RTX 4050 6 GB GDDR6 + AMD Radeon 680M',
        'Armazenamento: SSD 512 GB NVMe PCIe 4.0 (slot extra M.2)',
        'Conectividade: Wi-Fi 6, Bluetooth 5.1, Gigabit Ethernet',
        'Teclado: Retroiluminado ABNT2 com teclado numérico',
        'Webcam: HD 720p com redução de ruído (TNR)',
        'Áudio: Alto-falantes estéreo, microfones duplos',
        'Bateria: 4 células (57 Wh) – até 5 horas',
        'Peso: 2.11 kg'
        ]
    },
    { 
        id: 2,
        nome: 'iApple iPhone 15 Pro Max (256 GB) - Titânio Azul', 
        preco: 8499, 
        img: 'https://i.imgur.com/54scLZ1.png',
        descricao: 'Apple iPhone 15 Pro Max com tela Super Retina XDR de 6.7", chip A17 Pro, câmera de 48MP e bateria para o dia todo. Design em titânio.',
        especificacoes: [
            'Chip: A17 Pro',
            'Tela: 6.7" Super Retina XDR',
            'Câmera: 48MP + 12MP + 12MP',
            'Bateria: Até 29h de vídeo',
            'Armazenamento: 256GB'
        ]
    },
    { 
        id: 3,
        nome: 'PC Gamer Aquario Branco Ryzen 7 5700x, RTX 5060, 32gb Ram, SSD 1TB, Water Cooler RGB, Design Impecável', 
        preco: 9900, 
        img: 'https://i.imgur.com/CfqkOHK.png',
        descricao: 'PC Gamer Full White com gabinete Aquário branco e visual clean. Equipado com processador Ryzen 7 5700X (8 núcleos, 16 threads), oferece performance superior em jogos, edição de vídeo, lives e multitarefas pesadas. Placa de vídeo NVIDIA GeForce RTX 5060 8GB GDDR7 com Ray Tracing e DLSS 3, entregando gráficos realistas e alta taxa de FPS em Full HD e Quad HD. 32GB de memória DDR4 e SSD NVMe de 1TB garantem inicializações rápidas e fluidez total. Gabinete Aquário branco com vidro temperado, 5 ventoinhas ARGB (controle remoto) e water cooler de 240mm para refrigeração eficiente e silenciosa. Fonte de 600W reais com PFC ativo e certificação 80 Plus. Cabos sleeved brancos e organização profissional. Enviado pronto para uso, com Windows 11 Pro Original instalado e ativado.sktop gamer completo com Ryzen 7 7800X3D, RTX 4070 Ti, 32GB RAM, water cooler e gabinete com RGB personalizável.',
        especificacoes: [
               'Processador: AMD Ryzen 7 5700X (8 núcleos / 16 threads)',
        'Placa-mãe: B550M AM4',
        'Memória RAM: 32GB DDR4',
        'Armazenamento: SSD NVMe 1TB',
        'Placa de vídeo: NVIDIA GeForce RTX 5060 8GB GDDR7',
        'Gabinete: Aquário branco com vidro temperado e 5 fans ARGB (controle remoto incluso)',
        'Refrigeração: Water Cooler ARGB 240mm com 2 ventoinhas',
        'Fonte: 600W reais, PFC ativo, 80 Plus Bronze, bivolt automático',
        'Cabos: Sleeved brancos',
        'Sistema operacional: Windows 11 Pro Original ativado'
        ]
    },
    { 
        id: 4,
        nome: 'Placa de Video GALAX GeForce RTX 5070 2X 1-CLICK OC 12GB GDDR7 192BITS - 57NON7MDBROC', 
        preco: 4299, 
        img: 'https://i.imgur.com/X8BQWO8.jpeg',
        descricao: 'Placa de vídeo NVIDIA GeForce RTX 5070 com 16GB GDDR7, oferecendo desempenho extremo para jogos em 4K, criação de conteúdo e streaming. Equipada com as tecnologias mais recentes: Ray Tracing de 4ª geração, DLSS 4, NVIDIA Reflex 2 e Encoder AV1 duplo. Sistema de refrigeração avançado com câmara de vapor e múltiplas ventoinhas. Recurso 1-Click OC via software Galax para overclock fácil. Design robusto e elegante, ideal para setups gamers de alto nível.',
        especificacoes: [
            '🧠 Memória: 16GB GDDR7 – velocidade e largura de banda superiores',
        '🎮 Arquitetura NVIDIA Blackwell: desempenho máximo para games AAA e 4K',
        '⚡ Tecnologias: Ray Tracing 4ª geração, DLSS 4, NVIDIA Reflex 2, Encoder AV1',
        '🧊 Refrigeração: câmara de vapor + ventoinhas otimizadas',
        '🛠️ 1-Click OC: overclock instantâneo via software Galax',
        '🖤 Design robusto e elegante: combina com qualquer setup premium',
        '📦 Modelo: 57NON8MDBROC | Produto Original Galax'
        ]
    },
    { 
        id: 5,
        nome: 'Monitor Gamer Curvo Samsung Odyssey 34’’, Ultra WQHD, 165Hz, 1ms, tela ultrawide Gamer Curvo Samsung Odyssey 34’’, ', 
        preco: 2299, 
        img: 'https://i.imgur.com/F4JpDG5.jpeg',
        descricao: 'Monitor Gamer Curvo Samsung Odyssey 34’’, Ultra WQHD, 165Hz, 1ms, tela ultrawide, HDMI, Display Port, Freesync Premium, preto, série G5',
        especificacoes: [
            'Tamanho: 27" Curvo',
            'Resolução: 2560x1440 QHD',
            'Taxa: 240Hz',
            'Tempo de Resposta: 1ms',
            'Tecnologia: FreeSync Premium'
        ]
    },
    { 
        id: 6,
        nome: 'Apple 2024 iMac (de 24 polegadas, Chip M4 da Apple com CPU de 8 núcleos e GPU de 8 núcleos, 16GB Memória unificada, de 256 GB)', 
        preco: 15499, 
        img: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=1200&auto=format&fit=crop',
        descricao: 'Teclado mecânico switch blue, layout ABNT2, retroiluminação RGB individual, estrutura em alumínio e descanso de pulso magnético.',
        especificacoes: [
            'Switch: Blue (clicável)',
            'Layout: ABNT2',
            'Iluminação: RGB por tecla',
            'Estrutura: Alumínio',
            'Conexão: USB-C removível'
        ]
    },
    { 
        id: 7,
        nome: 'Mouse Gamer Sem Fio Logitech G703 LIGHTSPEED com RGB LIGHTSYNC, 6 Botões Programáveis, Sensor HERO 25K e Bateria Recarregável', 
        preco: 349, 
        img: 'https://i.imgur.com/Cibj5QB.png',
        descricao: 'Mouse óptico com sensor de 16.000 DPI, 8 botões programáveis, iluminação RGB e cabo paracord ultraleve.',
        especificacoes: [
            'Sensor: Óptico 16.000 DPI',
            'Botões: 8 programáveis',
            'Iluminação: RGB 16.8M cores',
            'Cabo: Paracord 1.8m',
            'Peso: 85g'
        ]
    },
    { 
        id: 8,
        nome: 'Fone Ouvido Haylou S40 Headphone Bluetooth 6.0 Sem Fio Preto Preto.', 
        preco: 699, 
        img: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=1200&auto=format&fit=crop',
        descricao: 'Headset gamer com som surround 7.1, drivers de 50mm, microfone retrátil com cancelamento de ruído e espuma memory foam.',
        especificacoes: [
            'Drivers: 50mm',
            'Surround: 7.1 Virtual',
            'Microfone: Retrátil c/ Cancelamento',
            'Conexão: USB / P2',
            'Peso: 320g'
        ]
    },
    { 
        id: 9,
        nome: 'Console Sony PlayStation 5, SSD 825GB, Controle Sem Fio DualSense ', 
        preco: 4299, 
        img: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?q=80&w=1200&auto=format&fit=crop',
        descricao: 'PlayStation 5 com SSD ultrarrápido, controle DualSense, suporte a jogos em 4K e retrocompatibilidade com PS4.',
        especificacoes: [
            'CPU: 8 núcleos Zen 2',
            'GPU: RDNA 2 10.3 TFLOPs',
            'Armazenamento: SSD 825GB',
            'Resolução: Até 8K',
            'Controle: DualSense'
        ]
    },
    { 
        id: 10,
        nome: 'Cadeira Gamer Husky Tempest 700, Até 145kg, Almofadas, Reclinável 150º, PU, Descanso para Pés, Branca', 
        preco: 659, 
        img: 'https://i.imgur.com/gXi6mWN.png',
        descricao: 'Cadeira gamer ergonômica com revestimento em couro sintético, apoio lombar ajustável, encosto reclinável 180° e almofadas.',
        especificacoes: [
            'Revestimento: Couro Sintético',
            'Encosto: Reclinável 180°',
            'Apoio Lombar: Ajustável',
            'Almofadas: Pescoço + Lombar',
            'Peso Suportado: 150kg'
        ]
    },
    { 
        id: 11,
        nome: 'Webcam Trust Teza 4K Ultra HD com Tripé, Microfones Duplos, Filtro de Privacidade, USB, Preto', 
        preco: 499, 
        img: 'https://i.imgur.com/uCiN6gQ.png',
        descricao: 'Webcam com resolução 4K, foco automático, campo de visão de 90° e microfone estéreo integrado para streaming.',
        especificacoes: [
            'Resolução: 4K 30fps',
            'Campo de Visão: 90°',
            'Foco: Automático',
            'Microfone: Estéreo',
            'Conexão: USB 3.0'
        ]
    },
    { 
        id: 12,
        nome: 'Roteador Wireless Mercusys AC1200 ', 
        preco: 899, 
        img: 'https://i.imgur.com/qdYgL3f.jpeg',
        descricao: 'Roteador mesh dual-band Wi-Fi 6 (AX5400) com cobertura para até 200m², MU-MIMO e segurança WPA3.',
        especificacoes: [
            'Padrão: Wi-Fi 6 AX5400',
            'Bandas: Dual-Band 2.4GHz + 5GHz',
            'Cobertura: Até 200m²',
            'Tecnologia: MU-MIMO + OFDMA',
            'Segurança: WPA3'
        ]
    }
];

 //Funções do carrinho
function getCarrinho() {
    return JSON.parse(localStorage.getItem('carrinhoTech')) || [];
}

function salvarCarrinho(carrinho) {
    localStorage.setItem('carrinhoTech', JSON.stringify(carrinho));
}

function adicionarAoCarrinho(id, nome, preco) {
    const carrinho = getCarrinho();
    carrinho.push({ id, nome, preco });
    salvarCarrinho(carrinho);
    atualizarContadorCarrinho();
    if (typeof atualizarMiniCarrinho === 'function') {
        atualizarMiniCarrinho();
    }
}

function removerDoCarrinho(index) {
    const carrinho = getCarrinho();
    carrinho.splice(index, 1);
    salvarCarrinho(carrinho);
    atualizarContadorCarrinho();
    if (typeof atualizarMiniCarrinho === 'function') {
        atualizarMiniCarrinho();
    }
}

function totalCarrinho() {
    return getCarrinho().reduce((acc, item) => acc + item.preco, 0);
}

function quantidadeCarrinho() {
    return getCarrinho().length;
}

function atualizarContadorCarrinho() {
    const contador = document.getElementById('carrinhoContador');
    if (contador) {
        const qtd = quantidadeCarrinho();
        contador.textContent = qtd;
        contador.style.display = qtd > 0 ? 'flex' : 'none';
    }
}

// Buscar produto por ID
function getProdutoPorId(id) {
    return produtos.find(p => p.id === parseInt(id));
}