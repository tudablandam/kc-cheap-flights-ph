const deals = [
  {
    destination: "Siargao",
    route: "Manila → Siargao",
    price: "₱3,499",
    label: "Island escape",
    image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1000&q=80"
  },
  {
    destination: "Coron",
    route: "Manila → Busuanga",
    price: "₱3,199",
    label: "Beach getaway",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=80"
  },
  {
    destination: "Davao City",
    route: "Manila → Davao",
    price: "₱2,699",
    label: "City adventure",
    image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1000&q=80"
  },
  {
    destination: "Camiguin",
    route: "Manila → Camiguin",
    price: "₱3,999",
    label: "Nature trip",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1000&q=80"
  },
  {
    destination: "Butuan",
    route: "Manila → Butuan",
    price: "₱2,699",
    label: "Explore Mindanao",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=80"
  },
  {
    destination: "El Nido",
    route: "Manila → El Nido",
    price: "₱7,999",
    label: "Palawan favorite",
    image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=1000&q=80"
  }
];

const dealGrid = document.querySelector("#dealGrid");

function createDealCard(deal) {
  const card = document.createElement("article");
  card.className = "deal-card";
  card.innerHTML = `
    <div class="deal-image" style="background-image:url('${deal.image}')">
      <span class="deal-badge">${deal.label}</span>
    </div>
    <div class="deal-body">
      <div class="deal-route">${deal.route}</div>
      <h3>${deal.destination}</h3>
      <div class="deal-bottom">
        <div><span class="price-label">Promo fare · per person</span><span class="price">${deal.price}</span></div>
        <a class="deal-inquire" href="#contact" data-destination="${deal.destination}">Inquire ↗</a>
      </div>
    </div>`;
  return card;
}

deals.forEach(deal => dealGrid.appendChild(createDealCard(deal)));

document.querySelectorAll(".deal-inquire").forEach(link => {
  link.addEventListener("click", () => {
    const destination = link.dataset.destination;
    const message = `Hello KC Cheap Flights PH! I would like to inquire about flights to ${destination}. Please send available travel dates and the current total fare.`;
    const whatsappUrl = `https://wa.me/639462774650?text=${encodeURIComponent(message)}`;
    document.querySelector("#whatsappLink").href = whatsappUrl;
  });
});

const menuToggle = document.querySelector("#menuToggle");
const mainNav = document.querySelector("#mainNav");
menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
mainNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

const defaultMessage = "Hello KC Cheap Flights PH! I would like to inquire about domestic flights. My destination and travel date are:";
document.querySelector("#whatsappLink").href =
  `https://wa.me/639462774650?text=${encodeURIComponent(defaultMessage)}`;
document.querySelector("#year").textContent = new Date().getFullYear();
