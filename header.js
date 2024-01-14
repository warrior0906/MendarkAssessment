class HeaderPage1 extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="header row-flex">
    <h3 class="logo">LOGO</h3>
    <div class="header-tab row-flex">
      <p class="tab-item">Feature</p>
      <p class="tab-item">Pricing</p>
      <p class="tab-item">Process</p>
      <p class="tab-item">Discover</p>
      <p class="tab-item">Feedback</p>
    </div>
    <div class="header-right row-flex">
      <p class="filled-button">Log in</p>
    </div>
  </div>
    `;
  }
}

class HeaderPage2 extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="header row-flex">
      <h3 class="logo">LOGO</h3>
      <div class="header-tab row-flex">
        <p class="tab-item">Feature</p>
        <p class="tab-item">Pricing</p>
        <p class="tab-item">Contact</p>
      </div>
      <div class="header-right row-flex">
        <p class="button-chip">Log in</p>
        <p class="filled-button">Start now</p>
      </div>
    </div>
    `;
  }
}


customElements.define("header-page1", HeaderPage1);
customElements.define("header-page2", HeaderPage2);

