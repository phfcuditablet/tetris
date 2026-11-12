// Seta de voltar para a página principal. Uso em cada jogo, antes de </body>:
// <script src="https://phfcuditablet.github.io/jogos/voltar.js"></script>
(function () {
  if (document.getElementById('voltar-jogos')) return;
  var DESTINO = 'https://phfcuditablet.github.io/jogos/';

  var css = document.createElement('style');
  css.textContent =
    '#voltar-jogos{position:fixed;left:max(14px,env(safe-area-inset-left));bottom:max(14px,env(safe-area-inset-bottom));' +
    'z-index:2147483000;width:48px;height:48px;border-radius:50%;display:flex;align-items:center;justify-content:center;' +
    'background:rgba(20,24,43,.72);color:#fff;text-decoration:none;box-shadow:0 2px 10px rgba(0,0,0,.35);' +
    'opacity:.75;transition:opacity .2s,transform .2s;-webkit-tap-highlight-color:transparent}' +
    '#voltar-jogos:hover,#voltar-jogos:focus-visible{opacity:1;transform:scale(1.08);outline:3px solid #ffb703;outline-offset:2px}' +
    '#voltar-jogos svg{width:24px;height:24px;display:block}' +
    '@media (prefers-reduced-motion:reduce){#voltar-jogos{transition:none}}';
  document.head.appendChild(css);

  var a = document.createElement('a');
  a.id = 'voltar-jogos';
  a.href = DESTINO;
  a.title = 'Voltar para Meus Jogos';
  a.setAttribute('aria-label', 'Voltar para a página principal de jogos');
  a.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" ' +
    'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>';
  document.body.appendChild(a);
})();
