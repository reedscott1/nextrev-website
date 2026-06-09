// SHA-256 hash of the access code
// To generate a new hash: run in browser console:
//   crypto.subtle.digest('SHA-256', new TextEncoder().encode('YOUR_CODE')).then(b => console.log(Array.from(new Uint8Array(b)).map(function(x){return x.toString(16).padStart(2,'0')}).join('')))
const ACCESS_CODE_HASH = "b6eb9e2f2e9ea89070fa70a22bedb2e2f7937526735a2289ca095e3abe9a9ae6"; // hash of "HIL2026"

const STORAGE_KEY = "nxtrev_training_auth";
let gateActive = false;

function isProtectedPage() {
  const path = window.location.pathname;
  // Home page is public — everything else requires access code.
  // Accommodate every install location we deploy to.
  if (path === "/" || path === "/index.html") return false;
  if (path === "/clover-training/" || path === "/clover-training/index.html") return false;
  if (path === "/clover-training" ) return false;
  if (path.endsWith("/nextrev-clovertraining/") || path.endsWith("/nextrev-clovertraining/index.html")) return false;
  return true;
}

function isAuthenticated() {
  return localStorage.getItem(STORAGE_KEY) === ACCESS_CODE_HASH;
}

async function hashCode(code) {
  const encoder = new TextEncoder();
  const data = encoder.encode(code);
  const buffer = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(buffer))
    .map(function(b) { return b.toString(16).padStart(2, "0"); })
    .join("");
}

function createGate() {
  if (gateActive) return;
  gateActive = true;

  // Hide page content
  const content = document.querySelector(".md-content");
  if (content) content.style.display = "none";

  // Also hide the sidebar nav to prevent leaking page titles
  const sidebar = document.querySelector(".md-sidebar--primary");
  if (sidebar) sidebar.style.display = "none";

  // Create overlay
  const overlay = document.createElement("div");
  overlay.className = "auth-gate-overlay";
  overlay.innerHTML =
    '<div class="auth-gate-box">' +
      '<h2>Protected Content</h2>' +
      '<p>Enter the access code to view this section.</p>' +
      '<input type="password" id="auth-gate-input" placeholder="Access code" autocomplete="off" />' +
      '<button id="auth-gate-submit">Submit</button>' +
      '<div class="auth-gate-error" id="auth-gate-error">Incorrect access code. Please try again.</div>' +
    '</div>';
  document.body.appendChild(overlay);

  var input = document.getElementById("auth-gate-input");
  var submit = document.getElementById("auth-gate-submit");
  var error = document.getElementById("auth-gate-error");

  function attemptAuth() {
    var code = input.value.trim();
    if (!code) return;

    hashCode(code).then(function(hash) {
      if (hash === ACCESS_CODE_HASH) {
        localStorage.setItem(STORAGE_KEY, ACCESS_CODE_HASH);
        overlay.remove();
        gateActive = false;
        if (content) content.style.display = "";
        if (sidebar) sidebar.style.display = "";
      } else {
        error.style.display = "block";
        input.value = "";
        input.focus();
      }
    });
  }

  submit.addEventListener("click", attemptAuth);
  input.addEventListener("keydown", function(e) {
    if (e.key === "Enter") attemptAuth();
  });

  input.focus();
}

// Run on page load and on navigation (MkDocs Material uses instant loading)
function checkAuth() {
  // mkdocs-exporter renders pages over file:// during PDF build — never gate those.
  if (window.location.protocol === "file:") return;
  if (isProtectedPage() && !isAuthenticated()) {
    createGate();
  } else {
    gateActive = false;
  }
}

document.addEventListener("DOMContentLoaded", checkAuth);

// Handle MkDocs Material instant navigation
if (typeof document$ !== "undefined") {
  document$.subscribe(checkAuth);
}
