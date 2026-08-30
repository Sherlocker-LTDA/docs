import { ICONS, SCENES, documentCard, entityList, entityNode, grid, icon, panel } from "./sketch-system.mjs";

Object.assign(ICONS, {
  house: [["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }]],
  car: [["path", { d: "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2M9 17h6" }], ["circle", { cx: "7", cy: "17", r: "2" }], ["circle", { cx: "17", cy: "17", r: "2" }]],
  plane: [["path", { d: "M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" }]],
  tractor: [["path", { d: "m10 11 11 .9a1 1 0 0 1 .8 1.1l-.665 4.158A1 1 0 0 1 20 18h-2M16 18h-5M18 5a1 1 0 0 0-1 1v5.573M3 4h8.129a1 1 0 0 1 .99.863L13 11.246M4 11V4M8 10.1V4" }], ["circle", { cx: "18", cy: "18", r: "2" }], ["circle", { cx: "7", cy: "15", r: "5" }]],
  trees: [["path", { d: "M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0ZM7 16v6M13 19v3M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5" }]],
  landmark: [["path", { d: "M10 18v-7M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949zM14 18v-7M18 18v-7M3 22h18M6 18v-7" }]],
  banknote: [["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2" }], ["circle", { cx: "12", cy: "12", r: "2" }], ["path", { d: "M6 12h.01M18 12h.01" }]],
  benefit: [["path", { d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" }]],
  trophy: [["path", { d: "M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978M18 9h1.5a1 1 0 0 0 0-5H18M4 22h16M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zM6 9H4.5a1 1 0 0 1 0-5H6" }]],
  gavel: [
    ["path", { d: "m14 13-8.381 8.38a1 1 0 0 1-3.001-3l8.384-8.381" }],
    ["path", { d: "m16 16 6-6" }],
    ["path", { d: "m21.5 10.5-8-8" }],
    ["path", { d: "m8 8 6-6" }],
    ["path", { d: "m8.5 7.5 8 8" }],
  ],
  users: [["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87" }], ["circle", { cx: "9", cy: "7", r: "4" }]],
  network: [["rect", { x: "16", y: "16", width: "6", height: "6", rx: "1" }], ["rect", { x: "2", y: "16", width: "6", height: "6", rx: "1" }], ["rect", { x: "9", y: "2", width: "6", height: "6", rx: "1" }], ["path", { d: "M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3M12 12V8" }]],
  database: [["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3" }], ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5M3 12A9 3 0 0 0 21 12" }]],
  refresh: [["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8M21 3v5h-5M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16M8 16H3v5" }]],
  search: [["path", { d: "m21 21-4.34-4.34" }], ["circle", { cx: "11", cy: "11", r: "8" }]],
  checklist: [["path", { d: "M13 5h8M13 12h8M13 19h8m-18-2 2 2 4-4M3 7l2 2 4-4" }]],
  image: [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["circle", { cx: "9", cy: "9", r: "2" }], ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" }]],
  map: [["path", { d: "M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0zM15 5.764v15M9 3.236v15" }]],
  route: [["circle", { cx: "6", cy: "19", r: "3" }], ["path", { d: "M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" }], ["circle", { cx: "18", cy: "5", r: "3" }]],
  chart: [["path", { d: "M5 21v-6M12 21V9M19 21V3" }]],
  id: [["path", { d: "M16 10h2M16 14h2M6.17 15a3 3 0 0 1 5.66 0" }], ["circle", { cx: "9", cy: "11", r: "2" }], ["rect", { x: "2", y: "5", width: "20", height: "14", rx: "2" }]],
  at: [["circle", { cx: "12", cy: "12", r: "4" }], ["path", { d: "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" }]],
  contact: [["path", { d: "M16 2v2M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2M8 2v2" }], ["circle", { cx: "12", cy: "11", r: "3" }], ["rect", { x: "3", y: "4", width: "18", height: "18", rx: "2" }]],
  wallet: [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21" }]],
  receipt: [["path", { d: "M13 16H8M14 8H8M16 12H8M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6A1.3 1.3 0 0 1 4 21z" }]],
  briefcase: [["path", { d: "M12 12h.01M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2M22 13a18.15 18.15 0 0 1-20 0" }], ["rect", { width: "20", height: "14", x: "2", y: "6", rx: "2" }]],
  "scan-face": [["path", { d: "M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" }]],
});

const stage = (iconName, x, y, width = 126, height = 76, className = "") => `<g class="sk-stage ${className}" transform="translate(${x} ${y})">${panel(0, 0, width, height, 10)}${icon(iconName, 16, 22, 30)}<path class="sk-line" d="M62 28h${width - 82}M62 46h${Math.max(28, width - 108)}" /></g>`;
const compactResult = (x, y, iconName = "shield") => `<g class="sk-result" transform="translate(${x} ${y})">${panel(0, 0, 132, 112, 12)}${icon(iconName, 42, 18, 48)}<path class="sk-line" d="M24 84h84" /></g>`;
const connectionDot = (path, duration = "4.8s", begin = "0s") => `<circle class="sk-hot" r="3"><animateMotion dur="${duration}" begin="${begin}" repeatCount="indefinite" path="${path}" /></circle>`;
const assetNode = (iconName, x, y) => `<g transform="translate(${x} ${y})"><circle class="sk-node-ring" r="29" />${icon(iconName, -12, -12, 24)}</g>`;
const scanner = (x, y, width = 116, height = 236) => `<g class="sk-scanner" transform="translate(${x} ${y})">${panel(0, 0, width, height, 13)}<path class="sk-line" d="M17 44V17h27M${width - 17} 44V17h-27M17 ${height - 44}v27h27M${width - 17} ${height - 44}v27h-27" /><path class="sk-hair" d="M${width / 2} 17v${height - 34}M17 ${height / 2}h${width - 34}" /><rect class="catalog-scan" x="18" y="46" width="${width - 36}" height="14" /></g>`;
const sharedSceneAnimation = `<style>.catalog-scan{fill:#f0a121;opacity:.05;animation:catalog-scan 5.8s ease-in-out infinite}.catalog-focus{animation:catalog-focus 5.8s ease-in-out infinite}.catalog-arrive{opacity:.25;animation:catalog-arrive 5.8s ease-in-out infinite}@keyframes catalog-scan{0%,24%,76%,100%{transform:translateY(0);opacity:.04}42%{opacity:.28}66%{transform:translateY(126px);opacity:.14}}@keyframes catalog-focus{0%,25%,100%{opacity:.28}42%,78%{opacity:1}}@keyframes catalog-arrive{0%,60%,100%{opacity:.25}76%,90%{opacity:1}}</style>`;

function ecosystemScene() {
  return `${grid("ecosystem-grid")}<path class="sk-ghost" d="M96 108l108 72 92-94M96 108l-8 190 116-118 75 133M204 180l92-94M204 180l75 133" />${entityNode({ x: 96, y: 108, kind: "user" })}${entityNode({ x: 204, y: 180, kind: "company", active: true })}${entityNode({ x: 88, y: 298, kind: "user" })}${entityNode({ x: 296, y: 86, kind: "company" })}${entityNode({ x: 279, y: 313, kind: "user" })}<path class="sk-flow" d="M236 180C330 180 340 93 414 93M236 180C342 180 345 215 414 215M236 180C340 180 340 337 414 337" />${stage("contact", 414, 54, 270, 78)}${stage("wallet", 414, 176, 270, 78)}${stage("gavel", 414, 298, 270, 78)}${connectionDot("M236 180C330 180 340 93 414 93")}${connectionDot("M236 180C342 180 345 215 414 215", "4.8s", "1.6s")}${connectionDot("M236 180C340 180 340 337 414 337", "4.8s", "3.2s")}`;
}

function profileScene(kind) {
  if (kind === "contacts") return `${grid("contacts-grid")}<path class="sk-ghost" d="M150 215h120M270 215C380 215 392 82 506 82M270 215C400 215 412 174 604 174M270 215C400 215 410 286 506 286M270 215C390 215 412 354 604 354" />${entityNode({ x: 150, y: 215, kind: "user", active: true })}${entityNode({ x: 270, y: 215, kind: "company" })}${assetNode("phone", 506, 82)}${assetNode("mail", 604, 174)}${assetNode("location", 506, 286)}${assetNode("briefcase", 604, 354)}${connectionDot("M270 215C400 215 410 286 506 286")}`;
  if (kind === "assets") return `${grid("assets-grid")}<path class="sk-ghost" d="M106 184l126 62M106 184l126-62M232 246C355 246 358 74 500 74M232 246C355 246 370 166 620 166M232 246C355 246 368 276 500 276M232 246C355 246 365 358 620 358" />${entityNode({ x: 106, y: 184, kind: "user" })}${entityNode({ x: 232, y: 246, kind: "company", active: true })}${assetNode("house", 500, 74)}${assetNode("tractor", 620, 166)}${assetNode("car", 500, 276)}${assetNode("plane", 620, 358)}${connectionDot("M232 246C355 246 368 276 500 276")}`;
  return `${grid("legal-grid")}${entityList({ x: 42, y: 70, width: 294, entities: [{ kind: "company", line: 114, detail: 72 }, { kind: "user", line: 98, detail: 64 }, { kind: "company", line: 126, detail: 82 }, { kind: "user", line: 105, detail: 70 }] })}<path class="sk-flow" d="M336 212h64M516 212h44" />${scanner(400, 94, 116, 236)}<g transform="translate(560 54)">${panel(0, 0, 158, 320, 12)}<path class="sk-hair" d="M36 42v238" />${[0, 1, 2, 3].map((i) => `<g transform="translate(0 ${54 + i * 70})"><circle class="sk-timeline-dot" cx="36" r="6" />${icon(i === 2 ? "alert" : "gavel", 58, -13, 26)}<path class="sk-line" d="M98-4h38M98 12h24" /></g>`).join("")}</g>${sharedSceneAnimation}`;
}

function sourceComparisonScene(mode = "freshness") {
  const resultIcon = mode === "process" ? "gavel" : "shield";
  return `${grid(`source-${mode}`)}${stage("database", 48, 76, 256, 112)}${stage("refresh", 48, 244, 256, 112)}<path class="sk-flow" d="M304 132C390 132 392 183 484 183M304 300C390 300 392 247 484 247" />${connectionDot("M304 300C390 300 392 247 484 247", "4.6s")}${compactResult(484, 159, resultIcon)}<g class="catalog-arrive">${icon("check", 640, 189, 42)}</g>${sharedSceneAnimation}`;
}

function certificateScene() {
  return `${grid("certificate-grid")}${entityNode({ x: 78, y: 215, kind: "company", active: true })}<path class="sk-flow" d="M110 215C184 215 188 94 286 94M110 215h176M110 215C184 215 188 336 286 336M412 94C452 94 446 114 484 114M412 215h72M412 336C452 336 446 316 484 316" />${stage("landmark", 286, 56, 126, 76)}${stage("gavel", 286, 177, 126, 76)}${stage("database", 286, 298, 126, 76)}${documentCard(484, 43, 228, 344)}${connectionDot("M110 215C184 215 188 94 286 94")}${connectionDot("M412 336C452 336 446 316 484 316", "4.8s", "2.4s")}`;
}

function stagedDecisionScene(input = "user", steps = ["id", "gavel", "banknote"], output = "shield") {
  const points = [142, 286, 430];
  return `${grid(`decision-${input}-${steps.join("-")}`)}${entityNode({ x: 62, y: 215, kind: input, active: true })}<path class="sk-flow" d="M94 215h48M260 215h26M404 215h26M548 215h30" />${steps.map((name, index) => stage(name, points[index], 177, 118, 76, index === 1 ? "catalog-focus" : "")).join("")}${compactResult(578, 159, output)}${connectionDot("M94 215h48")}${sharedSceneAnimation}`;
}

function leadEnrichmentScene() {
  return `${grid("lead-grid")}${stage("phone", 42, 52, 146, 78)}${stage("mail", 42, 176, 146, 78)}${stage("id", 42, 300, 146, 78)}<path class="sk-flow" d="M188 91C292 91 286 215 388 215M188 215h200M188 339C292 339 286 215 388 215" />${connectionDot("M188 339C292 339 286 215 388 215")}${panel(388, 76, 308, 278, 14)}${entityNode({ x: 466, y: 154, kind: "user", active: true })}<path class="sk-line" d="M528 135h128M528 154h92M424 235h228M424 265h164M424 295h194" />${icon("network", 610, 292, 36)}`;
}

function segmentationScene() {
  return `${grid("segment-grid")}${entityList({ x: 38, y: 70, width: 270, entities: [{ kind: "user", line: 112, detail: 65 }, { kind: "user", line: 95, detail: 72 }, { kind: "user", line: 124, detail: 80 }, { kind: "user", line: 104, detail: 68 }] })}<path class="sk-flow" d="M308 212h54M480 212h42" />${scanner(362, 94, 118, 236)}<g transform="translate(522 72)">${panel(0, 0, 198, 286, 13)}${[0, 1, 2].map((i) => `<g transform="translate(20 ${34 + i * 82})"><rect class="sk-row-bg" width="158" height="62" rx="8" />${icon(i === 0 ? "chart" : "user", 13, 19, 24)}<path class="sk-line" d="M52 23h${88 - i * 16}M52 40h${48 + i * 14}" />${icon("check", 132, 19, 24)}</g>`).join("")}</g>${sharedSceneAnimation}`;
}

function dueDiligenceScene() {
  return `${grid("due-grid")}<path class="sk-ghost" d="M88 88l104 90 104-90M88 318l104-140 104 140" />${entityNode({ x: 88, y: 88, kind: "user" })}${entityNode({ x: 192, y: 178, kind: "company", active: true })}${entityNode({ x: 296, y: 88, kind: "user" })}${entityNode({ x: 88, y: 318, kind: "company" })}${entityNode({ x: 296, y: 318, kind: "user" })}<path class="sk-flow" d="M224 178h78M428 92C470 92 466 153 508 153M428 215h80M428 338C470 338 466 277 508 277" />${stage("gavel", 302, 54, 126, 76)}${stage("banknote", 302, 177, 126, 76)}${stage("landmark", 302, 300, 126, 76)}${documentCard(508, 43, 204, 344)}${connectionDot("M224 178h78")}`;
}

function assetInvestigationScene() {
  return `${grid("asset-investigation-grid")}<path class="sk-ghost" d="M64 110l112 92 112-92M64 320l112-118 112 118" />${entityNode({ x: 64, y: 110, kind: "user" })}${entityNode({ x: 176, y: 202, kind: "company", active: true })}${entityNode({ x: 288, y: 110, kind: "user" })}${entityNode({ x: 64, y: 320, kind: "user" })}${entityNode({ x: 288, y: 320, kind: "company" })}<path class="sk-flow" d="M208 202C326 202 326 88 410 88M208 202h202M208 202C326 202 326 316 410 316M468 88C500 88 504 138 528 138M468 202h60M468 316C500 316 504 276 528 276" />${assetNode("house", 439, 88)}${assetNode("car", 439, 202)}${assetNode("tractor", 439, 316)}${documentCard(528, 43, 184, 344)}${connectionDot("M208 202h202")}`;
}

function locationScene() {
  return `${grid("location-grid")}${entityNode({ x: 88, y: 215, kind: "user", active: true })}<path class="sk-ghost" d="M120 215C210 215 214 92 314 92M120 215h194M120 215C210 215 214 338 314 338M372 92C438 92 438 135 494 135M372 215h122M372 338C438 338 438 295 494 295" />${assetNode("phone", 343, 92)}${assetNode("company", 343, 215)}${assetNode("mail", 343, 338)}<g transform="translate(494 62)">${panel(0, 0, 218, 306, 14)}<path class="sk-hair" d="M0 76h218M0 152h218M0 228h218M55 0v306M109 0v306M164 0v306M0 258l218-176" />${icon("location", 83, 116, 54)}<circle class="sk-hot" cx="110" cy="142" r="5" /></g>${connectionDot("M120 215C210 215 214 92 314 92")}`;
}

function degreeScene() {
  return `${grid("degree-grid")}<circle class="sk-ghost catalog-ring ring-1" cx="380" cy="215" r="82" /><circle class="sk-ghost catalog-ring ring-2" cx="380" cy="215" r="154" /><path class="sk-ghost" d="M380 215L380 84M380 215l128-72M380 215l132 92M380 215l-126 88M380 215L244 126M380 84l128 59M508 143l4 164M512 307l-258-4M254 303l-10-177M244 126l136-42" />${entityNode({ x: 380, y: 215, kind: "company", active: true })}${entityNode({ x: 380, y: 84, kind: "user" })}${entityNode({ x: 508, y: 143, kind: "company" })}${entityNode({ x: 512, y: 307, kind: "user" })}${entityNode({ x: 254, y: 303, kind: "company" })}${entityNode({ x: 244, y: 126, kind: "user" })}<style>.catalog-ring{transform-box:fill-box;transform-origin:center;animation:ring-grow 5.5s ease-in-out infinite}.ring-2{animation-delay:.8s}@keyframes ring-grow{0%,18%,100%{opacity:.12;transform:scale(.88)}42%,76%{opacity:.55;transform:scale(1)}}</style>`;
}

function identityMatchScene() {
  return `${grid("identity-match-grid")}${entityNode({ x: 84, y: 215, kind: "user", active: true })}${stage("id", 210, 62, 170, 92)}${stage("users", 210, 276, 170, 92)}<path class="sk-line" d="M116 215C170 215 166 108 210 108" /><path class="sk-ghost" d="M116 215C170 215 166 322 210 322M380 322C454 322 452 262 534 262M380 322h154M380 322C454 322 452 382 534 382" />${assetNode("check", 568, 108)}${entityNode({ x: 568, y: 262, kind: "user" })}${entityNode({ x: 568, y: 322, kind: "user" })}${entityNode({ x: 568, y: 382, kind: "user" })}<circle class="sk-hot" r="3"><animateMotion dur="4.6s" repeatCount="indefinite" path="M116 215C170 215 166 108 210 108" /></circle>`;
}

function motorsOverviewScene() {
  return `${grid("motors-grid")}${stage("users", 36, 60, 210, 116)}${stage("receipt", 36, 254, 210, 116)}<path class="sk-flow" d="M246 118h70M444 118h64M246 312h70M444 312h64" />${scanner(316, 35, 128, 166)}${scanner(316, 229, 128, 166)}${compactResult(508, 62, "shield")}${compactResult(508, 256, "check")}${sharedSceneAnimation}`;
}

function creditScene() {
  return `${grid("credit-grid")}<g transform="translate(42 54)">${[0, 1, 2].map((i) => `<g transform="translate(0 ${i * 92})">${stage("receipt", 0, 0, 170, 72)}<path class="sk-flow" d="M170 36h54" />${stage("file", 224, 0, 150, 72)}</g>`).join("")}</g><path class="sk-flow" d="M416 90C472 90 470 215 504 215M416 182C472 182 470 215 504 215M416 274C472 274 470 215 504 215" />${scanner(504, 97, 112, 236)}<g class="catalog-arrive" transform="translate(650 122)">${icon("check", 0, 0, 42)}${icon("check", 0, 84, 42)}${icon("check", 0, 168, 42)}</g>${sharedSceneAnimation}`;
}

function platformScene() {
  const capabilities = [
    ["file", "DOSSIÊ", "CONSOLIDAÇÃO"],
    ["search", "RASTRO", "SINAIS DIGITAIS"],
    ["map", "BOARD E MAPA", "RELAÇÕES E CONTEXTO"],
    ["image", "LENTE", "EVIDÊNCIA VISUAL"],
  ];

  return `${grid("platform-grid")}${panel(62, 46, 636, 338, 14)}${icon("network", 90, 72, 34)}<text class="sk-label" x="140" y="88">PLATAFORMA</text><text class="sk-small-label" x="140" y="109">TODAS AS CAPACIDADES, UMA BASE</text><path class="sk-hair" d="M82 130h596" />${capabilities.map(([iconName, label, detail], index) => `<g transform="translate(92 ${142 + index * 54})">${icon(iconName, 0, 5, 28)}<text class="sk-label" x="46" y="24">${label}</text><text class="sk-small-label" x="286" y="22">${detail}</text><circle class="sk-hot" cx="568" cy="18" r="2.5" />${index < capabilities.length - 1 ? '<path class="sk-hair" d="M0 43h586" />' : ""}</g>`).join("")}<text class="sk-small-label" x="92" y="370">UMA OPERAÇÃO · UMA INTEGRAÇÃO · UMA GOVERNANÇA</text>`;
}

function boardScene() {
  return `${grid("board-grid")}<g transform="translate(96 70) skewX(-12)"><path class="sk-plane" d="M0 48L414 0l146 240-414 48z" /><path class="sk-hair" d="M46 42l138 238M116 34l138 238M186 26l138 238M256 18l138 238M326 10l138 238M396 2l138 238M24 92l414-48M48 134l414-48M72 176l414-48M96 218l414-48" /></g><path class="sk-ghost" d="M158 192l126-82 114 70 106-64M284 110l-18 158 132-88 50 105M158 192l108 76 182 17" />${entityNode({ x: 158, y: 192, kind: "user" })}${entityNode({ x: 284, y: 110, kind: "company" })}${entityNode({ x: 398, y: 180, kind: "user" })}${entityNode({ x: 504, y: 116, kind: "company" })}${entityNode({ x: 266, y: 268, kind: "user" })}${assetNode("location", 448, 285)}${connectionDot("M158 192l126-82 114 70 106-64", "5.2s")}`;
}

function lensScene() {
  return `${grid("lens-grid")}<g transform="translate(50 93)">${panel(0, 0, 218, 244, 8)}${icon("image", 64, 46, 90)}<path class="sk-line" d="M20 198h178" /></g><path class="sk-flow" d="M268 215h76M344 215C394 215 390 112 438 112M344 215C394 215 390 318 438 318" />${connectionDot("M268 215h76")}<g transform="translate(438 48)">${panel(0, 0, 264, 132, 12)}${icon("map", 24, 36, 60)}${icon("location", 136, 35, 58)}<circle class="sk-hot" cx="165" cy="66" r="4" /></g><g transform="translate(438 250)">${panel(0, 0, 264, 132, 12)}${icon("scan-face", 26, 35, 62)}<circle class="sk-node-ring" cx="158" cy="66" r="30" />${icon("user", 144, 48, 28)}${icon("check", 210, 50, 32)}</g>`;
}

function integrationScene(channel = "globe") {
  return `${grid(`integration-${channel}`)}${stage(channel, 54, 159, 176, 112)}<path class="sk-flow" d="M230 215h90M440 215h90" />${stage("network", 320, 159, 120, 112, "catalog-focus")}${stage("file", 530, 159, 176, 112)}${connectionDot("M230 215h90")}${sharedSceneAnimation}`;
}

function asyncScene() {
  return `${grid("async-grid")}${stage("send", 52, 159, 160, 112)}<path class="sk-flow" d="M212 215h68M474 215h68" /><g transform="translate(280 64)">${panel(0, 0, 194, 302, 13)}<path class="sk-hair" d="M42 48v206" />${[0, 1, 2, 3].map((i) => `<g class="${i === 2 ? "catalog-focus" : ""}" transform="translate(0 ${48 + i * 66})"><circle class="sk-timeline-dot" cx="42" r="6" />${icon(i === 3 ? "check" : i === 2 ? "refresh" : "file", 68, -14, 28)}<path class="sk-line" d="M110-4h58M110 12h36" /></g>`).join("")}</g>${compactResult(542, 159, "shield")}${sharedSceneAnimation}`;
}

function typedDataScene() {
  return `${grid("typed-data-grid")}${entityNode({ x: 380, y: 215, kind: "company", active: true })}<path class="sk-ghost" d="M348 215C270 215 270 86 182 86M348 215C270 215 270 344 182 344M412 215C490 215 490 86 578 86M412 215C490 215 490 344 578 344" />${stage("id", 52, 47, 260, 78)}${stage("contact", 52, 305, 260, 78)}${stage("wallet", 448, 47, 260, 78)}${stage("gavel", 448, 305, 260, 78)}${connectionDot("M412 215C490 215 490 86 578 86")}`;
}

function entityReferenceScene(mainIcon, related = ["user", "company", "file", "network"]) {
  const coords = [[190, 82], [568, 82], [190, 348], [568, 348]];
  return `${grid(`entity-${mainIcon}-${related.join("-")}`)}<circle class="sk-node-ring" cx="380" cy="215" r="68" />${icon(mainIcon, 350, 185, 60)}${related.map((name, index) => `<path class="sk-ghost" d="M380 215L${coords[index][0]} ${coords[index][1]}" />${assetNode(name, coords[index][0], coords[index][1])}`).join("")}${connectionDot(`M380 215L${coords[0][0]} ${coords[0][1]}`, "4.8s")}`;
}

function statusScene(kind = "job") {
  const endIcon = kind === "monitor" ? "alert" : kind === "platform" ? "file" : "check";
  return `${grid(`status-${kind}`)}<path class="sk-hair" d="M86 215h588" />${[0, 1, 2, 3, 4].map((i) => `<g class="${i === 2 ? "catalog-focus" : ""}" transform="translate(${98 + i * 142} 215)"><circle class="sk-node-ring" r="28" />${icon(i === 0 ? "send" : i === 1 ? "refresh" : i === 2 ? "search" : i === 3 ? endIcon : "shield", -12, -12, 24)}<path class="sk-line" d="M-32 58h64M-22 74h44" /></g>`).join("")}${sharedSceneAnimation}`;
}

function engineScene() {
  return `${grid("engine-grid")}${entityList({ x: 42, y: 70, width: 286, entities: [{ kind: "company", line: 110, detail: 72, status: "check" }, { kind: "company", line: 96, detail: 64, status: "alert" }, { kind: "company", line: 122, detail: 78, status: "check" }, { kind: "company", line: 104, detail: 68, status: "check" }] })}<path class="sk-flow" d="M328 212h58M504 212h48" />${scanner(386, 94, 118, 236)}${compactResult(552, 159, "check")}${sharedSceneAnimation}`;
}

function legalCategoryScene(activeIndex = 0) {
  return `${grid(`legal-category-${activeIndex}`)}${stage("gavel", 44, 159, 176, 112)}<path class="sk-flow" d="M220 215h100" /><g transform="translate(320 53)">${panel(0, 0, 386, 324, 13)}${Array.from({ length: 7 }, (_, i) => `<g class="${i === activeIndex ? "catalog-focus" : ""}" transform="translate(18 ${18 + i * 42})"><rect class="sk-row-bg" width="350" height="34" rx="7" />${icon(i === activeIndex ? "check" : "file", 8, 6, 22)}<path class="sk-line" d="M46 13h${118 + (i % 3) * 28}M46 24h${76 + (i % 2) * 24}" /></g>`).join("")}</g>${connectionDot("M220 215h100")}${sharedSceneAnimation}`;
}

function behaviorScene() {
  return `${grid("behavior-grid")}${entityNode({ x: 170, y: 215, kind: "user", active: true })}<path class="sk-ghost" d="M202 215C318 215 316 82 454 82M202 215C332 215 334 215 602 215M202 215C318 215 316 348 454 348" />${stage("network", 454, 43, 236, 78)}${stage("chart", 454, 176, 236, 78)}${stage("route", 454, 309, 236, 78)}${connectionDot("M202 215C332 215 334 215 602 215")}`;
}

function financialScene() {
  return `${grid("financial-grid")}${entityNode({ x: 134, y: 176, kind: "user" })}${entityNode({ x: 226, y: 256, kind: "company", active: true })}<path class="sk-ghost" d="M166 176l60 80M258 256C352 256 354 82 492 82M258 256C360 256 364 215 602 215M258 256C352 256 354 348 492 348" />${assetNode("banknote", 492, 82)}${assetNode("landmark", 602, 215)}${assetNode("wallet", 492, 348)}${connectionDot("M258 256C352 256 354 82 492 82")}`;
}

function register(id, title, description, render) {
  SCENES[id] = { title, description, render };
}

register("docs-home", "Ecossistema Sherlocker", "Pessoas e empresas se conectam a perfis cadastral, patrimonial e jurídico.", ecosystemScene);
register("profile-cadastral", "Perfil cadastral", "Pessoas e empresas conectadas aos seus meios de contato e vínculos.", () => profileScene("contacts"));
register("profile-patrimonial", "Perfil patrimonial", "Pessoas e empresas conectadas a imóveis, veículos, áreas rurais e aeronaves.", () => profileScene("assets"));
register("profile-juridico", "Perfil jurídico", "Pessoas e empresas entram em processos cuja evolução aparece numa timeline.", () => profileScene("legal"));
register("freshness", "Base e confirmação atual", "Uma fonte consolidada e uma fonte atual convergem para a confirmação do dado.", () => sourceComparisonScene("freshness"));
register("certidoes", "Certidões", "Uma entidade é consultada em fontes oficiais e forma um documento verificável.", certificateScene);
register("background-check", "Background check", "Uma pessoa atravessa verificações cadastrais, jurídicas e financeiras.", () => stagedDecisionScene("user", ["id", "gavel", "banknote"]));
register("lead-enrichment", "Enriquecimento de leads", "Um identificador inicial se expande para um perfil conectado.", leadEnrichmentScene);
register("asset-segmentation", "Segmentação patrimonial", "Uma lista de pessoas é analisada e reduzida a grupos priorizados.", segmentationScene);
register("due-diligence", "Due diligence", "Uma empresa, seus sócios e sinais de risco formam um documento de análise.", dueDiligenceScene);
register("asset-investigation", "Levantamento patrimonial", "Um grafo familiar e empresarial se conecta a ativos e forma um relatório.", assetInvestigationScene);
register("locate-party", "Localização de partes", "Pistas cadastrais convergem para uma localização provável.", locationScene);
register("connection-degrees", "Graus de conexão", "Uma rede cresce do vínculo direto para relações de segundo grau.", degreeScene);
register("process-sources", "Base processual e tempo real", "Duas fontes processuais convergem para um mesmo resultado jurídico.", () => sourceComparisonScene("process"));
register("identity-match", "Documento e nome", "O documento cria um vínculo exato; o nome produz correspondências possíveis.", identityMatchScene);
register("motors-overview", "Motores de Análise", "Pessoas, empresas e borderôs seguem por triagens diferentes até seus resultados.", motorsOverviewScene);
register("credit-bordero", "Motor de Borderô", "Títulos e notas fiscais são pareados e atravessam a validação.", creditScene);
register("platform-overview", "Plataforma", "Dossiê, Rastro, Board e Mapa e Lente fazem parte de uma única Plataforma, com operação, integração e governança compartilhadas.", platformScene);
register("board-map", "Board e Mapa", "Pessoas e empresas são organizadas num canvas investigativo sobre uma planta.", boardScene);
register("lente", "Lente", "Uma imagem pode originar uma estimativa de localização ou uma comparação facial.", lensScene);
register("integration-rest", "Integração via API", "Uma aplicação envia uma solicitação e recebe um resultado estruturado.", () => integrationScene("globe"));
register("integration-postman", "Postman", "O Postman funciona como canal de entrada para a mesma API.", () => integrationScene("send"));
register("integration-mcp", "MCP", "Um assistente usa o MCP como canal para chegar às funcionalidades Sherlocker.", () => integrationScene("message"));
register("integration-sdk", "SDK", "O SDK organiza a passagem entre aplicação e API.", () => integrationScene("briefcase"));
register("typed-data", "Padrão de dados", "Uma entidade tipada se conecta a identidade, contato, patrimônio e jurídico.", typedDataScene);
register("async-job", "Trabalho assíncrono", "Uma solicitação percorre estados até disponibilizar o resultado.", asyncScene);
register("behavior-profile", "Perfil comportamental", "Uma pessoa se conecta a presença digital, padrões e deslocamentos.", behaviorScene);
register("financial-profile", "Perfil financeiro", "Pessoas e empresas se conectam a registros financeiros e obrigações.", financialScene);
register("engine-rules", "Regras de análise", "Empresas atravessam regras e apenas os resultados aprovados seguem adiante.", engineScene);
register("job-lifecycle", "Ciclo de vida", "Um trabalho percorre criação, processamento e conclusão.", () => statusScene("job"));
register("monitor-lifecycle", "Ciclo do monitoramento", "Um acompanhamento percorre estados e produz alertas.", () => statusScene("monitor"));
register("platform-states", "Estados da Plataforma", "Os recursos da Plataforma compartilham uma sequência coerente de estados.", () => statusScene("platform"));

const entityDefinitions = [
  ["pessoa", "Pessoa", "user", ["company", "phone", "mail", "location"]],
  ["empresa", "Empresa", "company", ["user", "briefcase", "location", "gavel"]],
  ["linha-do-tempo", "Linha do tempo", "route", ["company", "user", "gavel", "refresh"]],
  ["telefone", "Telefone", "phone", ["user", "company", "location", "network"]],
  ["email", "Email", "mail", ["user", "company", "at", "network"]],
  ["endereco", "Endereço", "location", ["user", "company", "house", "map"]],
  ["divida", "Dívida", "banknote", ["user", "company", "landmark", "file"]],
  ["beneficio", "Benefício social", "benefit", ["user", "landmark", "banknote", "file"]],
  ["licitacao", "Licitação", "trophy", ["company", "landmark", "receipt", "user"]],
  ["doacao-politica", "Doação política", "landmark", ["user", "company", "banknote", "receipt"]],
  ["propriedade-urbana", "Propriedade urbana", "house", ["user", "company", "location", "file"]],
  ["propriedade-rural", "Propriedade rural", "tractor", ["user", "company", "trees", "location"]],
  ["veiculo", "Veículo", "car", ["user", "company", "id", "location"]],
  ["aeronave", "Aeronave", "plane", ["user", "company", "id", "location"]],
  ["patente", "Propriedade intelectual", "file", ["user", "company", "id", "landmark"]],
  ["processo", "Processo", "gavel", ["user", "company", "scale", "route"]],
  ["parte", "Parte", "users", ["user", "company", "gavel", "scale"]],
  ["advogado", "Advogado", "scale", ["user", "company", "gavel", "file"]],
  ["documento", "Documento", "file", ["user", "company", "search", "database"]],
  ["dominio", "Domínio", "globe", ["company", "mail", "network", "id"]],
  ["registro-bancario", "Registro bancário", "landmark", ["user", "company", "banknote", "id"]],
  ["registro-comercial", "Registro comercial", "receipt", ["user", "company", "network", "id"]],
  ["registro-digital", "Registro digital", "network", ["user", "company", "globe", "at"]],
  ["imovel", "Imóvel", "house", ["user", "company", "location", "file"]],
  ["rural", "Rural", "trees", ["user", "company", "tractor", "location"]],
  ["patrimonio", "Patrimônio", "wallet", ["house", "car", "tractor", "plane"]],
  ["nfe", "Nota fiscal eletrônica", "receipt", ["company", "file", "banknote", "id"]],
  ["operacao-credito", "Operação de crédito", "banknote", ["company", "receipt", "refresh", "check"]],
  ["engine-credito", "Engine de crédito", "checklist", ["company", "scanner", "banknote", "check"]],
];

for (const [slug, title, mainIcon, related] of entityDefinitions) register(`entity-${slug}`, title, `${title} e suas principais relações.`, () => entityReferenceScene(mainIcon === "scanner" ? "search" : mainIcon, related.map((name) => name === "scanner" ? "search" : name)));

const legalCategories = ["recuperacao-judicial", "falencia", "execucao-fiscal", "execucao-civel", "trabalhista", "criminal", "familia-sucessoes"];
for (const [index, slug] of legalCategories.entries()) register(`legal-${slug}`, slug.replaceAll("-", " "), "Um processo é classificado e a categoria correspondente é destacada.", () => legalCategoryScene(index));
register("legal-recovery-guide", "Recuperações e falências", "Duas categorias jurídicas são destacadas na mesma triagem.", () => legalCategoryScene(0));

const primaryPages = [
  ["introduction.mdx", "Introdução", "docs-home"], ["areas/contatos.mdx", "Perfil cadastral", "profile-cadastral"], ["areas/patrimonio.mdx", "Perfil patrimonial", "profile-patrimonial"], ["areas/juridico.mdx", "Perfil jurídico", "profile-juridico"],
  ["cadastro/performance-acuracia.mdx", "Consultas D+0", "freshness"], ["cadastro/certidoes.mdx", "Certidões", "certidoes"],
  ["casos-de-uso/background-check.mdx", "Background check", "background-check"], ["casos-de-uso/enriquecimento-leads.mdx", "Enriquecimento de leads", "lead-enrichment"], ["casos-de-uso/segmentacao-patrimonial.mdx", "Segmentação patrimonial", "asset-segmentation"], ["casos-de-uso/due-diligence.mdx", "Due diligence", "due-diligence"], ["casos-de-uso/levantamento-patrimonial.mdx", "Levantamento patrimonial", "asset-investigation"], ["casos-de-uso/localizacao-partes.mdx", "Localização de partes", "locate-party"], ["casos-de-uso/graus-de-conexao.mdx", "Graus de conexão", "connection-degrees"],
  ["processos/base-vs-tempo-real.mdx", "Base x tempo real", "process-sources"], ["processos/vinculo-nome-documento.mdx", "Documento x nome", "identity-match"],
  ["motores/introducao.mdx", "Motores de Análise", "motors-overview"], ["motor-analise/introducao.mdx", "Motor de CPF/CNPJ", "motor"], ["credito/introducao.mdx", "Motor de Borderô", "credit-bordero"], ["monitoramento/introducao.mdx", "Monitoramento", "monitoramento"],
  ["plataforma/introducao.mdx", "Plataforma", "platform-overview"], ["plataforma/dossie.mdx", "Dossiê", "dossie"], ["plataforma/rastro.mdx", "Rastro", "rastro"], ["plataforma/board-mapa.mdx", "Board e Mapa", "board-map"], ["plataforma/lente.mdx", "Lente", "lente"],
].map(([path, title, scene]) => ({ path, title, scene, group: "Cenas principais", reuse: false }));

const reusedPages = [
  ["guias/integracao-api.mdx", "Integração via API", "integration-rest", "Integração"], ["guias/postman.mdx", "Postman", "integration-postman", "Integração"], ["guias/mcp.mdx", "MCP Server", "integration-mcp", "Integração"], ["guias/sdk.mdx", "SDK TypeScript", "integration-sdk", "Fora da navegação"], ["padrao-de-dados.mdx", "Padrão de dados", "typed-data", "Integração"], ["async-jobs.mdx", "Jobs assíncronos", "async-job", "Fora da navegação"],
  ["areas/comportamento.mdx", "Perfil comportamental", "behavior-profile", "Fora da navegação"], ["areas/credito.mdx", "Motor de Borderô", "credit-bordero", "Fora da navegação"], ["areas/financeiro.mdx", "Perfil financeiro", "financial-profile", "Fora da navegação"], ["perfis/rh-candidato.mdx", "Candidato RH", "background-check", "Fora da navegação"],
  ...entityDefinitions.map(([slug, title]) => [`entidades/${slug}.mdx`, title, `entity-${slug}`, "Entidades"]),
  ...legalCategories.map((slug) => [`categorias/${slug}.mdx`, slug.replaceAll("-", " "), `legal-${slug}`, "Categorias jurídicas"]),
  ["guias/recuperacoes-falencias.mdx", "Recuperações e falências", "legal-recovery-guide", "Fora da navegação"],
  ["motores/ciclo-de-vida.mdx", "Ciclo de vida dos motores", "job-lifecycle", "Motores"], ["motores/engines.mdx", "Engines", "engine-rules", "Motores"], ["motor-analise/blocos.mdx", "Catálogo de blocos", "engine-rules", "Motores"], ["motor-analise/quickstart.mdx", "Quickstart CPF/CNPJ", "motor", "Motores"], ["credito/quickstart.mdx", "Quickstart Borderô", "credit-bordero", "Motores"], ["credito/titulos-e-nfe.mdx", "Títulos e NFe", "credit-bordero", "Motores"],
  ["monitoramento/quickstart.mdx", "Quickstart Monitoramento", "monitoramento", "Monitoramento"], ["monitoramento/ciclo-de-vida.mdx", "Ciclo do monitoramento", "monitor-lifecycle", "Monitoramento"], ["monitoramento/temas-monitorados.mdx", "Temas monitorados", "monitoramento", "Monitoramento"],
  ["plataforma/quickstart.mdx", "Quickstart Plataforma", "dossie", "Plataforma"], ["plataforma/estados-resultados.mdx", "Estados e resultados", "platform-states", "Plataforma"],
].map(([path, title, scene, group]) => ({ path, title, scene, group, reuse: true }));

export const PAGE_SCENES = [...primaryPages, ...reusedPages];
