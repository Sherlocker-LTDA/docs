const ORANGE = "#f0a121";

const ICONS = {
  user: [
    ["circle", { cx: "12", cy: "8", r: "5" }],
    ["path", { d: "M20 21a8 8 0 0 0-16 0" }],
  ],
  company: [
    ["path", { d: "M10 12h4M10 8h4M14 21v-3a2 2 0 0 0-4 0v3" }],
    ["path", { d: "M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2" }],
    ["path", { d: "M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" }],
  ],
  scale: [
    ["path", { d: "M12 3v18M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1M7 21h10" }],
    ["path", { d: "m19 8 3 8a5 5 0 0 1-6 0zV7M5 8l3 8a5 5 0 0 1-6 0V7" }],
  ],
  location: [
    ["path", { d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" }],
    ["circle", { cx: "12", cy: "10", r: "3" }],
  ],
  phone: [["path", { d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" }]],
  mail: [
    ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" }],
    ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" }],
  ],
  globe: [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20M2 12h20" }],
  ],
  shield: [
    ["path", { d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" }],
    ["path", { d: "m9 12 2 2 4-4" }],
  ],
  check: [
    ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335" }],
    ["path", { d: "m9 11 3 3L22 4" }],
  ],
  alert: [
    ["path", { d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" }],
    ["path", { d: "M12 9v4M12 17h.01" }],
  ],
  camera: [
    ["path", { d: "M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z" }],
    ["circle", { cx: "12", cy: "13", r: "3" }],
  ],
  play: [["path", { d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" }]],
  send: [
    ["path", { d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" }],
    ["path", { d: "m21.854 2.147-10.94 10.939" }],
  ],
  music: [
    ["circle", { cx: "8", cy: "18", r: "4" }],
    ["path", { d: "M12 18V2l7 4" }],
  ],
  message: [["path", { d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" }]],
  share: [
    ["circle", { cx: "18", cy: "5", r: "3" }],
    ["circle", { cx: "6", cy: "12", r: "3" }],
    ["circle", { cx: "18", cy: "19", r: "3" }],
    ["path", { d: "M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" }],
  ],
  game: [
    ["path", { d: "M6 11h4M8 9v4M15 12h.01M18 10h.01" }],
    ["path", { d: "M17.32 5H6.68a4 4 0 0 0-3.978 3.59C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258A4 4 0 0 0 17.32 5z" }],
  ],
  file: [
    ["path", { d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" }],
    ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5M10 9H8M16 13H8M16 17H8" }],
  ],
};

const escapeXml = (value) => String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;" })[char]);

function attrs(values) {
  return Object.entries(values).map(([name, value]) => `${name}="${escapeXml(value)}"`).join(" ");
}

function icon(name, x, y, size = 24, className = "sk-icon") {
  const scale = size / 24;
  const nodes = ICONS[name].map(([tag, values]) => `<${tag} ${attrs(values)} />`).join("");
  return `<g class="${className}" transform="translate(${x} ${y}) scale(${scale})">${nodes}</g>`;
}

function panel(x, y, width, height, radius = 12, className = "sk-plane") {
  return `<rect class="${className}" x="${x}" y="${y}" width="${width}" height="${height}" rx="${radius}" />`;
}

function entityRow({ x, y, width, kind, line = 150, detail = 92, active = false, muted = false, status = null, statusClass = "" }) {
  return `
    <g class="sk-row${active ? " is-active" : ""}${muted ? " is-muted" : ""}" transform="translate(${x} ${y})">
      <rect class="sk-row-bg" width="${width}" height="54" rx="8" />
      <rect class="sk-icon-box" x="10" y="9" width="36" height="36" rx="8" />
      ${icon(kind, 18, 17, 20)}
      <path class="sk-line" d="M62 20h${line}M62 35h${detail}" />
      ${status ? icon(status, width - 36, 16, 22, `sk-icon sk-row-status ${statusClass}`) : ""}
    </g>`;
}

function entityList({ x, y, width, entities, activeIndex = -1, placeholderIndex = -1 }) {
  const height = 24 + entities.length * 58;
  return `<g class="sk-entity-list">
    ${panel(x, y, width, height, 13)}
    ${entities.map((entity, index) => entityRow({
      x: x + 12,
      y: y + 12 + index * 58,
      width: width - 24,
      kind: entity.kind,
      line: entity.line,
      detail: entity.detail,
      active: index === activeIndex,
      muted: index === placeholderIndex,
      status: entity.status,
      statusClass: entity.statusClass,
    })).join("")}
  </g>`;
}

function entityNode({ x, y, kind = "user", active = false }) {
  return `<g class="sk-entity-node${active ? " is-active" : ""}" transform="translate(${x} ${y})">
    <circle class="sk-node-ring" r="32" />
    ${icon(kind, -13, -13, 26)}
  </g>`;
}

function timeline({ x, y, width = 180, height = 314, events = 4, activeIndex = 2 }) {
  const top = 47;
  const gap = (height - 94) / (events - 1);
  const nodes = Array.from({ length: events }, (_, index) => {
    const cy = top + gap * index;
    const active = index === activeIndex;
    return `<g class="sk-timeline-event${active ? " is-active" : ""}" transform="translate(0 ${cy})">
      <circle class="sk-timeline-dot" cx="34" r="6" />
      <path class="sk-line" d="M58-7h${72 + (index % 2) * 18}M58 9h${46 + (index % 3) * 12}" />
      ${active ? icon("alert", width - 42, -11, 22, "sk-icon sk-timeline-alert") : ""}
    </g>`;
  }).join("");
  return `<g class="sk-timeline" transform="translate(${x} ${y})">
    ${panel(0, 0, width, height, 13)}
    <path class="sk-hair" d="M34 ${top}V${height - top}" />
    ${nodes}
  </g>`;
}

function documentCard(x, y, width = 260, height = 344) {
  return `<g class="sk-document" transform="translate(${x} ${y})">
    <path class="sk-plane" d="M0 0h${width - 38}l38 38v${height - 38}H0z" />
    <path class="sk-hair" d="M${width - 38} 0v38h38M24 88h${width - 48}M24 165h${width - 48}M24 242h${width - 48}M24 319h${width - 112}" />
    ${icon("file", 24, 24, 38)}
    <path class="sk-line" d="M80 36h${width - 112}M80 53h${width - 146}" />
    <g class="sk-document-section section-1">${icon("user", 26, 107, 28)}<path class="sk-line" d="M74 118h${width - 103}M74 136h${width - 141}" /></g>
    <g class="sk-document-section section-2">${icon("company", 26, 184, 28)}<path class="sk-line" d="M74 195h${width - 123}M74 213h${width - 94}" /></g>
    <g class="sk-document-section section-3">${icon("share", 26, 261, 28)}<path class="sk-line" d="M74 272h${width - 101}M74 290h${width - 156}" /></g>
    <g class="sk-document-complete">${icon("shield", width - 59, height - 58, 36)}</g>
  </g>`;
}

function alertBadge(x, y) {
  return `<g class="sk-alert" transform="translate(${x} ${y})"><circle class="sk-alert-ring" r="22" />${icon("alert", -11, -11, 22)}</g>`;
}

function socialTile(name, x, y) {
  return `<g class="sk-social" transform="translate(${x} ${y})"><rect class="sk-plane" width="58" height="58" rx="10" />${icon(name, 17, 17, 24)}</g>`;
}

function grid(id) {
  return `<defs>
    <pattern id="${id}" width="24" height="24" patternUnits="userSpaceOnUse"><path d="M24 0H0V24" class="sk-grid" /></pattern>
    <filter id="soft-glow"><feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  </defs><rect width="760" height="430" fill="url(#${id})" />`;
}

const sharedStyles = `
  :host{display:block;color:${ORANGE}}
  svg{display:block;width:100%;height:auto;aspect-ratio:16/9;background:#060605;overflow:hidden}
  .sk-grid{fill:none;stroke:${ORANGE};stroke-width:1;stroke-opacity:.07}
  .sk-line,.sk-icon,.sk-flow,.sk-hair,.sk-ghost{fill:none;stroke:${ORANGE};stroke-linecap:round;stroke-linejoin:round;vector-effect:non-scaling-stroke}
  .sk-line,.sk-icon{stroke-width:1.55}
  .sk-hair{stroke-width:.85;stroke-opacity:.3}
  .sk-ghost{stroke-width:1;stroke-opacity:.28;stroke-dasharray:5 7}
  .sk-flow{stroke-width:1.1;stroke-opacity:.42;stroke-dasharray:7 8;animation:flow 2.2s linear infinite}
  .sk-plane,.sk-row-bg,.sk-icon-box{fill:rgba(240,161,33,.024);stroke:${ORANGE};stroke-width:1.15;stroke-opacity:.68;vector-effect:non-scaling-stroke}
  .sk-row-bg{fill:#080806;stroke-opacity:.24}
  .sk-icon-box{stroke-opacity:.34}
  .sk-hot{fill:${ORANGE};filter:url(#soft-glow)}
  .sk-label{fill:${ORANGE};font:500 16px 'DM Mono',ui-monospace,monospace;letter-spacing:.08em}
  .sk-small-label{fill:${ORANGE};fill-opacity:.58;font:500 10px 'DM Mono',ui-monospace,monospace;letter-spacing:.13em}
  .is-muted{opacity:.45}
  .sk-corner{fill:none;stroke:${ORANGE};stroke-width:1;stroke-opacity:.35}
  .sk-node-ring,.sk-timeline-dot{fill:#080806;stroke:${ORANGE};stroke-width:1.4;vector-effect:non-scaling-stroke}
  .sk-timeline-dot{fill:${ORANGE};stroke-width:0;filter:url(#soft-glow)}
  @keyframes flow{to{stroke-dashoffset:-30}}
  @media(prefers-reduced-motion:reduce){*{animation:none!important}}
`;

function monitoringScene() {
  return `
    ${grid("monitor-grid")}
    ${entityList({ x: 48, y: 52, width: 430, entities: [
      { kind: "company", line: 172, detail: 104 },
      { kind: "user", line: 134, detail: 86 },
      { kind: "company", line: 194, detail: 116 },
      { kind: "user", line: 160, detail: 95 },
      { kind: "company", line: 146, detail: 121 },
    ], activeIndex: 2 })}
    ${timeline({ x: 510, y: 52, width: 202, height: 314, events: 4, activeIndex: 2 })}
    <path class="sk-event-connection" d="M466 209C500 209 496 238 544 238" />
    <circle class="sk-hot sk-event-particle" r="3"><animateMotion dur="5.5s" repeatCount="indefinite" path="M466 209C500 209 496 238 544 238" /></circle>
    <path class="sk-corner" d="M24 76h24M24 76v24M736 76h-24M736 76v24M24 354h24M24 354v-24M736 354h-24M736 354v-24" />
    <style>
      .is-active .sk-row-bg{animation:row-found 5.5s ease-in-out infinite}
      .sk-timeline-event.is-active,.sk-event-connection{opacity:.28;animation:alert-found 5.5s ease-in-out infinite;transform-box:fill-box;transform-origin:center}.sk-event-connection{fill:none;stroke:${ORANGE};stroke-width:1;stroke-dasharray:5 7}
      @keyframes row-found{0%,28%,100%{fill:#080806;stroke-opacity:.24}42%,76%{fill:rgba(240,161,33,.075);stroke-opacity:.9}}
      @keyframes alert-found{0%,28%,100%{opacity:.28}40%,78%{opacity:1}}
    </style>`;
}

function motorScene() {
  return `
    ${grid("motor-grid")}
    ${entityList({ x: 28, y: 74, width: 250, entities: [
      { kind: "company", line: 106, detail: 68 },
      { kind: "company", line: 126, detail: 82 },
      { kind: "company", line: 94, detail: 62 },
      { kind: "company", line: 112, detail: 76 },
    ], activeIndex: 1 })}
    ${entityList({ x: 482, y: 106, width: 250, entities: [
      { kind: "company", line: 104, detail: 70, status: "check" },
      { kind: "company", line: 92, detail: 61, status: "check" },
      { kind: "company", line: 108, detail: 72, status: "check", statusClass: "sk-check-arrival" },
    ], placeholderIndex: 2 })}
    <g transform="translate(314 92)">
      ${panel(0, 0, 132, 246, 14)}
      <path class="sk-line" d="M18 46V18h28M114 46V18H86M18 200v28h28M114 200v28H86" />
      <path class="sk-hair" d="M66 18v210M18 123h96" />
      <rect class="sk-scan" x="19" y="44" width="94" height="16" />
    </g>
    <path class="sk-flow" d="M278 161h36M446 263h36" />
    <g class="sk-candidate" transform="translate(40 144)">
      <rect class="sk-row-bg" width="226" height="54" rx="8" />
      <rect class="sk-icon-box" x="8" y="7" width="34" height="34" rx="8" />
      ${icon("company", 15, 14, 20)}
      <path class="sk-line" d="M56 20h126M56 35h82" />
    </g>
    <style>
      .sk-scan{fill:${ORANGE};opacity:.05;animation:scan 7s ease-in-out infinite}
      .sk-candidate{opacity:0;animation:candidate 7s ease-in-out infinite}
      .sk-row-status{stroke-width:1.8}.sk-check-arrival{opacity:0;animation:approved 7s ease-in-out infinite}
      @keyframes scan{0%,30%,68%,100%{transform:translateY(0);opacity:.04}42%{opacity:.32}60%{transform:translateY(146px);opacity:.18}}
      @keyframes candidate{0%,18%{opacity:0;transform:translate(40px,144px)}24%{opacity:1;transform:translate(40px,144px)}44%,57%{opacity:1;transform:translate(267px,190px)}76%,88%{opacity:1;transform:translate(494px,234px)}94%,100%{opacity:0;transform:translate(494px,234px)}}
      @keyframes approved{0%,69%,100%{opacity:0}78%,91%{opacity:1}}
    </style>`;
}

function dossierScene() {
  return `
    ${grid("dossier-grid")}
    <g class="sk-graph-links"><path class="sk-ghost" d="M90 112L220 76 334 134 235 214 108 278 282 332M90 112l145 102M220 76l15 138M334 134l-52 198M108 278l127-64" /></g>
    ${entityNode({ x: 90, y: 112, kind: "user" })}
    ${entityNode({ x: 220, y: 76, kind: "company" })}
    ${entityNode({ x: 334, y: 134, kind: "user" })}
    ${entityNode({ x: 235, y: 214, kind: "company", active: true })}
    ${entityNode({ x: 108, y: 278, kind: "user" })}
    ${entityNode({ x: 282, y: 332, kind: "user" })}
    <path class="sk-flow" d="M267 214C348 214 382 214 430 214" />
    <circle class="sk-hot" r="3"><animateMotion dur="4.8s" repeatCount="indefinite" path="M267 214C348 214 382 214 430 214" /></circle>
    ${documentCard(430, 42, 282, 344)}
    <style>
      .sk-entity-node.is-active .sk-node-ring{animation:graph-focus 4.8s ease-in-out infinite}.sk-document-section{opacity:.2;animation:section-arrive 4.8s ease-in-out infinite}.section-2{animation-delay:.9s}.section-3{animation-delay:1.8s}.sk-document-complete{opacity:.2;animation:complete 4.8s ease-in-out infinite}
      @keyframes graph-focus{0%,15%,100%{fill:#080806;stroke-opacity:.6}30%,68%{fill:rgba(240,161,33,.08);stroke-opacity:1}}
      @keyframes section-arrive{0%,14%,100%{opacity:.2}28%,82%{opacity:1}}
      @keyframes complete{0%,70%,100%{opacity:.2}82%,94%{opacity:1}}
    </style>`;
}

function rastroScene() {
  const networks = ["camera", "play", "send", "music", "message", "globe", "share", "game"];
  return `
    ${grid("rastro-grid")}
    ${panel(45, 69, 226, 292, 14)}
    <g transform="translate(111 106)"><circle class="sk-plane" cx="47" cy="47" r="47" />${icon("user", 23, 20, 48)}</g>
    <path class="sk-line" d="M83 241h150M104 268h108M120 295h76" />
    <circle class="sk-hot" cx="239" cy="98" r="4" />
    <path class="sk-flow" d="M271 215h52M323 215V99h34M323 215v116h34" />
    <g transform="translate(357 42)">
      ${networks.map((name, index) => socialTile(name, (index % 4) * 72, Math.floor(index / 4) * 72)).join("")}
    </g>
    <g transform="translate(357 210)">
      ${panel(0, 0, 346, 151, 12)}
      <g class="sk-mask phone-mask">${icon("phone", 23, 38, 34)}<text class="sk-mask-text" x="78" y="65">(**) *****-**42</text><path class="sk-hair" d="M23 101h296" /><text class="sk-mask-small" x="23" y="127">IP  ***.***.**.42</text></g>
      <g class="sk-mask mail-mask">${icon("mail", 23, 38, 34)}<text class="sk-mask-text" x="78" y="65">m***@e****.com</text><path class="sk-hair" d="M23 101h296" /><text class="sk-mask-small" x="23" y="127">ID  ****-****-**42</text></g>
    </g>
    <style>
      .sk-social{opacity:.42;animation:network-found 8s ease-in-out infinite}.sk-social:nth-child(2){animation-delay:.5s}.sk-social:nth-child(3){animation-delay:1s}.sk-social:nth-child(4){animation-delay:1.5s}.sk-social:nth-child(5){animation-delay:2s}.sk-social:nth-child(6){animation-delay:2.5s}.sk-social:nth-child(7){animation-delay:3s}.sk-social:nth-child(8){animation-delay:3.5s}
      .sk-mask-text,.sk-mask-small{fill:${ORANGE};font-family:'DM Mono',ui-monospace,monospace}.sk-mask-text{font-size:20px;letter-spacing:.08em}.sk-mask-small{font-size:13px;fill-opacity:.52;letter-spacing:.1em}.sk-mask{animation:mask-switch 8s ease-in-out infinite}.mail-mask{opacity:0;animation-delay:-4s}
      @keyframes network-found{0%,12%,100%{opacity:.42}20%,70%{opacity:1}}
      @keyframes mask-switch{0%,42%{opacity:1}50%,92%{opacity:0}100%{opacity:1}}
    </style>`;
}

const SCENES = {
  monitoramento: { title: "Monitoramento", description: "Uma lista de empresas e pessoas em que uma mudança é identificada e sinalizada no item correspondente.", render: monitoringScene },
  motor: { title: "Motor de Análise", description: "Uma lista de empresas antes e outra depois da análise, com uma empresa atravessando a triagem.", render: motorScene },
  dossie: { title: "Dossiê", description: "Um grafo de pessoas e empresas é consolidado em um documento estruturado.", render: dossierScene },
  rastro: { title: "Rastro", description: "Uma pessoa é associada às suas redes e a identificadores mascarados.", render: rastroScene },
};

function renderSceneSvg(name, { width = 760, height = 430 } = {}) {
  const scene = SCENES[name] || SCENES.monitoramento;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 760 430" role="img" aria-labelledby="title description"><title id="title">${escapeXml(scene.title)}</title><desc id="description">${escapeXml(scene.description)}</desc><style>${sharedStyles}</style>${scene.render()}</svg>`;
}

const HTMLElementBase = typeof HTMLElement === "undefined" ? class {} : HTMLElement;

class SherlockerSketch extends HTMLElementBase {
  static get observedAttributes() { return ["scene"]; }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() { this.render(); }
  attributeChangedCallback() { if (this.isConnected) this.render(); }

  render() {
    const name = this.getAttribute("scene") || "monitoramento";
    const scene = SCENES[name] || SCENES.monitoramento;
    this.shadowRoot.innerHTML = renderSceneSvg(name);
  }

  exportSvg(filename = `sherlocker-${this.getAttribute("scene") || "sketch"}.svg`) {
    const svg = this.shadowRoot.querySelector("svg").cloneNode(true);
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    const source = new XMLSerializer().serializeToString(svg);
    const url = URL.createObjectURL(new Blob([source], { type: "image/svg+xml" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  }
}

if (typeof customElements !== "undefined" && !customElements.get("sherlocker-sketch")) customElements.define("sherlocker-sketch", SherlockerSketch);

export { ICONS, SCENES, SherlockerSketch, alertBadge, documentCard, entityList, entityNode, entityRow, grid, icon, panel, renderSceneSvg, socialTile, timeline };
