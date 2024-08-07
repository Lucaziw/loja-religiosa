class Componente extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const div = document.createElement("div");
    const href = this.getAttribute("href") || "#";
    const src = this.getAttribute("src") || "default-image.jpg";
    const cardTitle = this.getAttribute("card-title") || "Título não disponível";
    const cardText = this.getAttribute("card-text") || "Descrição não disponível";
    const newsId = this.getAttribute("news") || "0";

    div.innerHTML = `
      <a href="${href}" class="card-link">
        <div class="card">
          <img src="${src}" class="card-img-top custom-img" alt="Produto" />
          <div class="card-body">
            <h5 class="card-title">${cardTitle}</h5>
            <p class="card-text">${cardText}</p>
            <a href="view.html?id=${newsId}">Veja mais</a>
          </div>
        </div>
      </a>
    `;
    this.appendChild(div);
  }
}

customElements.define("componente-novo", Componente);
