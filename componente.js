class Componente extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const div = document.createElement("div");
    const text = this.getAttribute("text");
    div.innerHTML = `
    <a
        href="${this.getAttribute("href")}"
        class="card-link"
    >
        <div class="card">
        <img src = "${this.getAttribute("src")}"
            class="card-img-top custom-img"
            alt="Produto"
        />
        <div class="card-body">
            <h5 class="card-title">${this.getAttribute("card-title")}</h5>
            <p class="card-text">${this.getAttribute("card-text")}</p>
        </div>
        </div>
    </a>
      `;
    this.appendChild(div);
  }
}

customElements.define("componente-novo", Componente);
