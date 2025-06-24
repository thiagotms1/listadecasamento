
import React from 'react';
import ReactDOM from 'react-dom/client';

// Constantes (anteriormente em constants.ts)
const INITIAL_GIFTS = [
  {
    id: '1',
    name: 'Passeio de Barco ao Pôr do Sol',
    description: 'Um romântico passeio de barco para apreciar o pôr do sol e celebrar nosso amor.',
    price: 550,
    image: 'https://picsum.photos/seed/barco/600/400?image=1018',
    category: 'Passeios Românticos',
    isGifted: false,
  },
  {
    id: '2',
    name: 'Café da Manhã Especial na Varanda',
    description: 'Um delicioso café da manhã servido em nossa varanda privativa com vista para o mar.',
    price: 280,
    image: 'https://picsum.photos/seed/cafe/600/400?image=30',
    category: 'Gastronomia',
    isGifted: false,
  },
  {
    id: '3',
    name: 'Jantar à Luz de Velas na Praia',
    description: 'Uma experiência gastronômica inesquecível, com um jantar exclusivo à beira-mar.',
    price: 750,
    image: 'https://picsum.photos/seed/jantar/600/400?image=1060',
    category: 'Gastronomia',
    isGifted: false,
  },
  {
    id: '4',
    name: 'Massagem Relaxante para Casal',
    description: 'Um momento de puro relaxamento e bem-estar com uma massagem especial para nós dois.',
    price: 450,
    image: 'https://picsum.photos/seed/massagem/600/400?image=103',
    category: 'Bem-Estar',
    isGifted: false,
  },
  {
    id: '5',
    name: 'Aula de Culinária Local',
    description: 'Aprender os segredos da culinária local juntos e levar novas receitas para casa.',
    price: 320,
    image: 'https://picsum.photos/seed/culinaria/600/400?image=225',
    category: 'Experiências Culturais',
    isGifted: false,
  },
  {
    id: '6',
    name: 'Mergulho em Águas Cristalinas',
    description: 'Explorar a vida marinha e as belezas subaquáticas em um mergulho guiado.',
    price: 600,
    image: 'https://picsum.photos/seed/mergulho/600/400?image=1074',
    category: 'Aventura',
    isGifted: false,
  },
  {
    id: '7',
    name: 'Noite de Observação de Estrelas',
    description: 'Uma noite mágica observando as estrelas em um local privilegiado, longe das luzes da cidade.',
    price: 200,
    image: 'https://picsum.photos/seed/estrelas/600/400?image=990',
    category: 'Passeios Românticos',
    isGifted: false,
  },
  {
    id: '8',
    name: 'Aluguel de Scooter para Explorar a Ilha',
    description: 'Liberdade para explorar os cantinhos escondidos e as paisagens da ilha ao nosso ritmo.',
    price: 180,
    image: 'https://picsum.photos/seed/scooter/600/400?image=823',
    category: 'Aventura',
    isGifted: false,
  }
];

// Funções Utilitárias (anteriormente em App.tsx)
const formatCurrency = (amount) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(amount);
};

// Componentes (anteriormente em components/)

const HeartIcon = ({ className }) => {
  return React.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      className: `w-6 h-6 ${className || ''}`,
    },
    React.createElement("path", {
      d: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
    })
  );
};

const GiftIcon = ({ className }) => {
  return React.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: 1.5,
      stroke: "currentColor",
      className: `w-6 h-6 ${className || ''}`,
    },
    React.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A3.375 3.375 0 006.375 8.25H17.625A3.375 3.375 0 0012 4.875z",
    }),
    React.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M12 9.75V21M7.5 12H12M12 12H16.5",
    }),
    React.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M3.75 12H7.5M16.5 12H20.25",
    })
  );
};

const Header = () => {
  return React.createElement(
    "header",
    { className: "bg-[#F9F0E6] text-[#524136] py-10 shadow-md" },
    React.createElement(
      "div",
      { className: "container mx-auto px-6 text-center" },
      React.createElement(
        "h1",
        { className: "text-4xl md:text-5xl font-bold mb-2 font-playfair" },
        "Nossa Lua de Mel dos Sonhos"
      ),
      React.createElement(
        "p",
        { className: "text-lg md:text-xl" },
        "Ajude-nos a criar memórias inesquecíveis!"
      ),
      React.createElement(
        "div",
        { className: "flex justify-center mt-4" },
        React.createElement(HeartIcon, { className: "text-[#C28B4D] w-8 h-8 animate-pulse" })
      )
    )
  );
};

const Footer = () => {
  return React.createElement(
    "footer",
    { className: "bg-[#F9F0E6] text-[#524136] py-8 mt-16" },
    React.createElement(
      "div",
      { className: "container mx-auto px-6 text-center" },
      React.createElement(
        "p",
        { className: "flex items-center justify-center" },
        "Feito com ",
        React.createElement(HeartIcon, { className: "w-5 h-5 mx-1.5 text-[#C28B4D]" }),
        " para nossa jornada juntos."
      ),
      React.createElement(
        "p",
        { className: "text-sm mt-1 text-[#524136] opacity-75" },
        `Thiago & Juliana © ${new Date().getFullYear()}`
      )
    )
  );
};

const Modal = ({ isOpen, onClose, onConfirm, gift, confirmedActionMessage }) => {
  const [showContent, setShowContent] = React.useState(false);

  React.useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setShowContent(true);
      }, 10);
      return () => clearTimeout(timer);
    } else {
      setShowContent(false);
    }
  }, [isOpen]);

  if (!isOpen || !gift) return null;

  return React.createElement(
    "div",
    { className: "fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center z-50 p-4" },
    React.createElement(
      "div",
      {
        className: `
          bg-white p-6 md:p-8 rounded-xl shadow-2xl w-full max-w-md transform transition-all duration-300 ease-out
          ${showContent ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}
        `,
      },
      confirmedActionMessage
        ? React.createElement(
            React.Fragment,
            null,
            React.createElement(
              "h3",
              { className: "text-2xl font-semibold mb-6 text-center text-[#C28B4D] font-playfair" },
              `${confirmedActionMessage.split('!')[0]}!`
            ),
            React.createElement(
              "p",
              { className: "text-center text-[#524136] mb-6" },
              "Você presenteou ",
              React.createElement("span", { className: "font-semibold text-[#C28B4D]" }, gift.name),
              ".",
              React.createElement("br"),
              "Seu carinho será lembrado para sempre!"
            ),
            React.createElement(
              "button",
              {
                onClick: onClose,
                className: "w-full bg-[#C28B4D] hover:bg-[#E8A9A5] text-white font-semibold py-3 px-4 rounded-lg transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#E8A9A5] focus:ring-opacity-75",
              },
              "Fechar"
            )
          )
        : React.createElement(
            React.Fragment,
            null,
            React.createElement(
              "h3",
              { className: "text-2xl font-semibold mb-2 text-center text-[#524136] font-playfair" },
              "Confirmar Presente"
            ),
            React.createElement(
              "p",
              { className: "text-center text-[#524136] mb-6" },
              "Você gostaria de presentear ",
              React.createElement("span", { className: "font-semibold text-[#C28B4D]" }, gift.name),
              " por ",
              React.createElement("span", { className: "font-semibold text-[#C28B4D]" }, formatCurrency(gift.price)),
              "?"
            ),
            React.createElement(
              "div",
              { className: "flex justify-around space-x-4" },
              React.createElement(
                "button",
                {
                  onClick: onClose,
                  className: "w-1/2 bg-[#EFE0CF] hover:bg-[#decfc0] text-[#524136] font-semibold py-3 px-4 rounded-lg transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#C28B4D] focus:ring-opacity-75",
                },
                "Cancelar"
              ),
              React.createElement(
                "button",
                {
                  onClick: onConfirm,
                  className: "w-1/2 bg-[#C28B4D] hover:bg-[#E8A9A5] text-white font-semibold py-3 px-4 rounded-lg transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#E8A9A5] focus:ring-opacity-75",
                },
                "Confirmar"
              )
            )
          )
    )
  );
};

const getCategoryStyles = (category) => {
  switch (category) {
    case 'Passeios Românticos':
      return 'bg-[#E8A9A5] text-white';
    case 'Gastronomia':
      return 'bg-[#C28B4D] text-white';
    case 'Bem-Estar':
      return 'bg-[#EFE0CF] text-[#524136] border border-[#C28B4D]';
    case 'Experiências Culturais':
      return 'bg-[#EFE0CF] text-[#C28B4D] border border-[#C28B4D]';
    case 'Aventura':
      return 'bg-[#524136] text-white';
    default:
      return 'bg-gray-100 text-gray-700 border border-gray-200';
  }
};

const GiftCard = ({ gift, onSelectGift }) => {
  const cardBaseClasses = "bg-[#EFE0CF] rounded-xl shadow-lg overflow-hidden flex flex-col transition-all duration-300 ease-in-out";
  const cardHoverClasses = "hover:shadow-xl hover:transform hover:-translate-y-1 hover:scale-[1.01]";
  const giftedCardClasses = gift.isGifted ? 'opacity-85' : '';

  return React.createElement(
    "div",
    { className: `${cardBaseClasses} ${!gift.isGifted ? cardHoverClasses : ''} ${giftedCardClasses}` },
    React.createElement(
      "div",
      { className: "relative" },
      React.createElement("img", {
        src: gift.image,
        alt: gift.name,
        className: `w-full h-56 object-cover ${gift.isGifted ? 'filter grayscale' : ''}`,
      }),
      gift.isGifted &&
        React.createElement(
          "div",
          {
            className: "absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center",
            title: "Este item já foi presenteado com amor!",
          },
          React.createElement(
            "span",
            { className: "text-white text-2xl font-bold font-playfair transform -rotate-12 border-2 border-white py-2 px-4 rounded shadow-md" },
            "Presenteado!"
          )
        ),
      React.createElement(
        "div",
        { className: `absolute top-2 right-2 text-xs px-2.5 py-1 rounded-full font-semibold ${getCategoryStyles(gift.category)}` },
        gift.category
      )
    ),
    React.createElement(
      "div",
      { className: "p-5 flex flex-col flex-grow" },
      React.createElement(
        "h3",
        { className: "text-xl font-semibold text-[#524136] mb-2 font-playfair" },
        gift.name
      ),
      React.createElement(
        "p",
        { className: "text-[#524136] text-sm mb-4 flex-grow" },
        gift.description
      ),
      React.createElement(
        "div",
        { className: "flex items-center justify-between mt-auto" },
        React.createElement(
          "p",
          { className: "text-xl font-bold text-[#C28B4D]" },
          formatCurrency(gift.price)
        ),
        gift.isGifted
          ? React.createElement(
              "button",
              {
                disabled: true,
                title: "Este item já foi presenteado com amor!",
                className: "flex items-center bg-[#CFC1BA] text-[#524136]/70 font-semibold py-2 px-4 rounded-lg cursor-not-allowed border border-[#E8A9A5]",
              },
              React.createElement(HeartIcon, { className: "mr-2 fill-current" }),
              " Presenteado"
            )
          : React.createElement(
              "button",
              {
                onClick: () => onSelectGift(gift),
                className: "flex items-center bg-[#C28B4D] hover:bg-[#E8A9A5] text-white font-semibold py-2 px-4 rounded-lg transition duration-150 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#E8A9A5] focus:ring-opacity-75",
              },
              React.createElement(GiftIcon, { className: "mr-2" }),
              " Presentear"
            )
      )
    )
  );
};

// Componente Principal App (anteriormente App.tsx)
const App = () => {
  const [gifts, setGifts] = React.useState(INITIAL_GIFTS);
  const [selectedGiftForModal, setSelectedGiftForModal] = React.useState(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [modalConfirmationMessage, setModalConfirmationMessage] = React.useState(undefined);

  const handleSelectGift = React.useCallback((gift) => {
    if (!gift.isGifted) {
      setSelectedGiftForModal(gift);
      setModalConfirmationMessage(undefined);
      setIsModalOpen(true);
    }
  }, []);

  const handleConfirmGift = React.useCallback(() => {
    if (selectedGiftForModal) {
      setGifts(prevGifts =>
        prevGifts.map(g =>
          g.id === selectedGiftForModal.id ? { ...g, isGifted: true } : g
        )
      );
      setModalConfirmationMessage("Obrigado por seu presente!");
    }
  }, [selectedGiftForModal]);

  const handleCloseModal = React.useCallback(() => {
    setIsModalOpen(false);
    setSelectedGiftForModal(null);
    setModalConfirmationMessage(undefined);
  }, []);
  
  const allGiftsGifted = gifts.every(gift => gift.isGifted);

  React.useEffect(() => {
    if (allGiftsGifted) {
      console.log("Todos os presentes foram carinhosamente oferecidos! Obrigado!");
    }
  }, [allGiftsGifted]);

  return React.createElement(
    "div",
    { className: "min-h-screen flex flex-col bg-[#F9F0E6] text-[#524136]" },
    React.createElement(Header),
    React.createElement(
      "main",
      { className: "flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12" },
      React.createElement(
        "div",
        { className: "text-center mb-10 md:mb-12" },
        React.createElement(
          "h2",
          { className: "text-3xl font-semibold text-[#524136] mb-3 font-playfair" },
          "Nossa Lista de Experiências"
        ),
        React.createElement(
          "p",
          { className: "text-lg text-[#524136] max-w-2xl mx-auto" },
          "Cada presente é um pedacinho do nosso sonho se tornando realidade. Escolha uma experiência e faça parte da nossa história!"
        )
      ),
      allGiftsGifted
        ? React.createElement(
            "div",
            { className: "text-center py-12 px-6 bg-white rounded-lg shadow-xl" },
            React.createElement(
              "h3",
              { className: "text-3xl font-bold text-[#C28B4D] mb-4 font-playfair" },
              "Gratidão Infinita!"
            ),
            React.createElement(
              "p",
              { className: "text-xl text-[#524136]" },
              "Todos os presentes da nossa lista foram carinhosamente oferecidos!",
              React.createElement("br"),
              "Mal podemos esperar para viver cada momento e compartilhar tudo com vocês."
            ),
            React.createElement(
              "p",
              { className: "text-2xl mt-6" },
              "❤️"
            )
          )
        : React.createElement(
            "div",
            { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8" },
            gifts.map(gift =>
              React.createElement(GiftCard, { key: gift.id, gift: gift, onSelectGift: handleSelectGift })
            )
          )
    ),
    React.createElement(Footer),
    React.createElement(Modal, {
      isOpen: isModalOpen,
      onClose: handleCloseModal,
      onConfirm: handleConfirmGift,
      gift: selectedGiftForModal,
      confirmedActionMessage: modalConfirmationMessage,
    })
  );
};

// Lógica de Renderização (anteriormente em index.tsx)
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  React.createElement(React.StrictMode, null, React.createElement(App))
);
