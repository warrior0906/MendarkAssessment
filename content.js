const renderImageContainer = (title) => `<div class="container column-flex">
    <p class="img">img</p>
    <p class="container-title">${title}</p>
    <p class="container-desc">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
      qui in doloremque.
    </p>
    <p class="button-chip">Discover</p>
  </div>`;

class Page1Content extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="footer">
      <p class="footer-title text-center">We offer a complete range of features</p>
      <div class="footer-containers row-flex">
        ${renderImageContainer("Store Integration")}
        ${renderImageContainer("Data Protection")}
        ${renderImageContainer("Invoice Generator")}
      </div>
      <div class="footer-containers row-flex">
        ${renderImageContainer("Auto Responder")}
        ${renderImageContainer("Social Plugins")}
        ${renderImageContainer("Data Backup")}
      </div>
    </div>
      `;
  }
}

class Page2Content extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="footer">
      <p class="footer-title text-center">Grow your business with better shipping</p>
      <p class="desc text-center">
        We help the world's leading organizations follow their shipping
      </p>
      <div class="footer-containers row-flex">
        ${renderImageContainer("Shipping communication")}
        ${renderImageContainer("Marketing")}
        ${renderImageContainer("Logistics performance")}
      </div>
    </div>
      `;
  }
}

class OtherDetailsContainer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="row-flex">
      <div class="column-flex">
        <div class="img">img</div>
        <div class="desc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam
          obcaecati distinctio alias praesentium minima.
        </div>
      </div>
      <div class="column-flex">
        <div class="img">img</div>
        <div class="desc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam
          obcaecati distinctio alias praesentium minima.
        </div>
      </div>
    </div>
      `;
  }
}

customElements.define("content-page1", Page1Content);
customElements.define("content-page2", Page2Content);
customElements.define("other-details-container", OtherDetailsContainer);
