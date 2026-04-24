---
icon: lucide/compass
---

# Azimute e Rumo

Em topografia, a direção de uma linha é expressa em relação ao Norte geográfico ou magnético por meio de duas notações equivalentes:

**Azimute (Az)** — ângulo medido no **sentido horário** a partir do Norte, variando de **0° a 360°**.

**Rumo (Rm)** — ângulo medido a partir do meridiano mais próximo (N ou S) em direção ao Leste (L) ou Oeste (O), sempre entre **0° e 90°**, acompanhado da indicação do quadrante.

## Conversão Azimute → Rumo

| Quadrante | Azimute          | Fórmula                    | Exemplo            |
|-----------|------------------|----------------------------|--------------------|
| NL (1°)   | 0° ≤ Az < 90°    | Rm = **N** Az **L**        | Az=40° → N 40° L   |
| SL (2°)   | 90° ≤ Az < 180°  | Rm = **S** (180°−Az) **L** | Az=130° → S 50° L  |
| SO (3°)   | 180° ≤ Az < 270° | Rm = **S** (Az−180°) **O** | Az=220° → S 40° O  |
| NO (4°)   | 270° ≤ Az ≤ 360° | Rm = **N** (360°−Az) **O** | Az=310° → N 50° O  |

## Explorador Interativo

O arco <span style="color:#1565C0; font-weight:600;">azul externo</span> mede o **azimute** a partir do Norte; o arco <span style="color:#2e7d32; font-weight:600;">laranja interno</span> mede o **rumo** a partir do meridiano mais próximo.

<div id="compass-widget" style="width:100%; max-width:580px; margin:0 auto;">
  <div id="az-plot"></div>
  <div style="padding:4px 12px 0 12px;">
    <div style="display:flex; align-items:center; gap:12px;">
      <span style="font-weight:600; white-space:nowrap;">Orientação:</span>
      <input type="range" id="az-slide" min="0" max="360" value="45"
             style="flex:1; cursor:pointer; accent-color:#8bc34a;">
      <span id="az-num" style="font-family:monospace; min-width:42px; text-align:right;">45°</span>
    </div>
  </div>
  <div id="az-info" style="margin:8px 12px 4px 12px; padding:10px 16px;
       background:var(--md-code-bg-color,#f0f0f0); border-radius:4px;
       border-left:4px solid #8bc34a; font-family:monospace;">
    <div style="display:grid; grid-template-columns:max-content 1fr; row-gap:4px; column-gap:16px;">
      <span style="color:#1565C0; opacity:.85;">Azimute</span>
      <b id="v-az" style="color:#1565C0;">045°00'00"</b>
      <span style="color:#2e7d32; opacity:.85;">Rumo</span>
      <b id="v-rumo" style="color:#2e7d32;">N 045°00'00" L</b>
      <span style="opacity:.7;">Quadrante</span>
      <b id="v-quad">NL — 1° quadrante</b>
    </div>
  </div>
</div>

<script>
(function () {
  var CDN    = 'https://cdn.plot.ly/plotly-2.35.2.min.js';
  var C_AZ   = '#1565C0';  // azimuth arc — blue
  var C_RUMO = '#2e7d32';  // rumo arc — green

  function pad(n, w) { return String(n).padStart(w, '0'); }

  function dms(deg) {
    if (deg < 0) deg = 0;
    var d  = Math.floor(deg);
    var mf = (deg - d) * 60;
    var m  = Math.floor(mf);
    var s  = Math.round((mf - m) * 60);
    if (s >= 60) { s -= 60; m += 1; }
    if (m >= 60) { m -= 60; d += 1; }
    return pad(d, 3) + '\xb0' + pad(m, 2) + "'" + pad(s, 2) + '"';
  }

  function azInfo(az) {
    az = ((az % 360) + 360) % 360;
    if (az <  90)  return { rumo: 'N ' + dms(az)       + ' L', quad: 'NL — 1\xb0 quadrante' };
    if (az < 180)  return { rumo: 'S ' + dms(180 - az) + ' L', quad: 'SL — 2\xb0 quadrante' };
    if (az < 270)  return { rumo: 'S ' + dms(az - 180) + ' O', quad: 'SO — 3\xb0 quadrante' };
                   return { rumo: 'N ' + dms(360 - az) + ' O', quad: 'NO — 4\xb0 quadrante' };
  }

  // arc from az1 to az2 (degrees clockwise from N) at given radius
  function makeArc(az1, az2, radius) {
    var n = 80, xs = [], ys = [];
    for (var i = 0; i <= n; i++) {
      var a = (az1 + (az2 - az1) * i / n) * Math.PI / 180;
      xs.push(Math.sin(a) * radius);
      ys.push(Math.cos(a) * radius);
    }
    return { x: xs, y: ys };
  }

  // azimuth arc: always from N (0°) clockwise to az
  function azArcPts(az) {
    return makeArc(0, az < 0.5 ? 0.5 : az, 0.65);
  }

  // rumo arc: from nearest meridian (N or S) to direction
  //   NL (0–90°):  N→az (clockwise)
  //   SL (90–180°): S→az (counter-clockwise, az decreasing from 180)
  //   SO (180–270°): S→az (clockwise, az increasing from 180)
  //   NO (270–360°): N→az (counter-clockwise, az decreasing from 360)
  function rumoArcPts(az) {
    az = ((az % 360) + 360) % 360;
    var a1, a2;
    if      (az <  90)  { a1 = 0;   a2 = az < 0.5   ? 0.5   : az; }
    else if (az < 180)  { a1 = 180; a2 = az > 179.5  ? 179.5 : az; }
    else if (az < 270)  { a1 = 180; a2 = az < 180.5  ? 180.5 : az; }
    else                { a1 = 360; a2 = az > 359.5  ? 359.5 : az; }
    return makeArc(a1, a2, 0.40);
  }

  function buildChart() {
    var el = document.getElementById('az-plot');
    if (!el) return;
    try { Plotly.purge(el); } catch (e) {}

    // circle outline
    var cx = [], cy = [];
    for (var i = 0; i <= 360; i++) {
      cx.push(Math.sin(i * Math.PI / 180));
      cy.push(Math.cos(i * Math.PI / 180));
    }

    // tick marks every 10°; longer ticks at cardinal directions
    var tx = [], ty = [];
    for (var i = 0; i < 36; i++) {
      var rr = i * 10 * Math.PI / 180;
      var r0 = (i % 9 === 0) ? 0.78 : 0.92;
      tx.push(Math.sin(rr) * r0, Math.sin(rr), null);
      ty.push(Math.cos(rr) * r0, Math.cos(rr), null);
    }

    // quadrant sector helper
    function sec(a1, a2, fill) {
      var xs = [0], ys = [0];
      for (var k = 0; k <= 90; k++) {
        var r = (a1 + (a2 - a1) * k / 90) * Math.PI / 180;
        xs.push(Math.sin(r)); ys.push(Math.cos(r));
      }
      xs.push(0); ys.push(0);
      return { x: xs, y: ys, fill: 'toself', fillcolor: fill,
               line: { color: 'rgba(0,0,0,0.1)', width: 0.5 },
               mode: 'lines', type: 'scatter', showlegend: false, hoverinfo: 'none' };
    }

    var az0   = +(document.getElementById('az-slide') || { value: 45 }).value;
    var r0    = az0 * Math.PI / 180;
    var azPts = azArcPts(az0);
    var rmPts = rumoArcPts(az0);

    var traces = [
      // 0–3: quadrant sectors
      sec(0,   90,  'rgba(220,60,60,0.12)'),
      sec(90,  180, 'rgba(60,180,60,0.12)'),
      sec(180, 270, 'rgba(60,60,220,0.12)'),
      sec(270, 360, 'rgba(200,180,0,0.12)'),
      // 4: circle
      { x: cx, y: cy, mode: 'lines', line: { color: '#444', width: 1.5 },
        type: 'scatter', showlegend: false, hoverinfo: 'none' },
      // 5: tick marks
      { x: tx, y: ty, mode: 'lines', line: { color: '#666', width: 1 },
        type: 'scatter', showlegend: false, hoverinfo: 'none' },
      // 6: azimuth arc (blue, outer) — updated dynamically
      { x: azPts.x, y: azPts.y, mode: 'lines',
        line: { color: C_AZ, width: 4 },
        type: 'scatter', showlegend: false, hoverinfo: 'none' },
      // 7: rumo arc (orange, inner) — updated dynamically
      { x: rmPts.x, y: rmPts.y, mode: 'lines',
        line: { color: C_RUMO, width: 4 },
        type: 'scatter', showlegend: false, hoverinfo: 'none' },
      // 8: direction line — updated dynamically
      { x: [0, Math.sin(r0)], y: [0, Math.cos(r0)],
        mode: 'lines+markers',
        line: { color: '#e53935', width: 3 },
        marker: { size: [6, 14], color: ['#222', '#e53935'] },
        type: 'scatter', showlegend: false, hoverinfo: 'none' }
    ];

    var layout = {
      margin: { t: 10, b: 10, l: 10, r: 10 },
      height: 420,
      xaxis: {
        range: [-1.65, 1.65], showgrid: false, zeroline: false,
        showticklabels: false, scaleanchor: 'y', fixedrange: true
      },
      yaxis: {
        range: [-1.65, 1.65], showgrid: false, zeroline: false,
        showticklabels: false, fixedrange: true
      },
      paper_bgcolor: 'rgba(255,255,255,0.92)',
      plot_bgcolor:  'rgba(255,255,255,0.92)',
      annotations: [
        { x: 0,     y:  1.52, text: '<b>N</b>', font: { size: 22, color: '#c62828' }, showarrow: false },
        { x: 1.52,  y:  0,    text: '<b>L</b>', font: { size: 22, color: '#444'    }, showarrow: false },
        { x: 0,     y: -1.52, text: '<b>S</b>', font: { size: 22, color: '#444'    }, showarrow: false },
        { x: -1.52, y:  0,    text: '<b>O</b>', font: { size: 22, color: '#444'    }, showarrow: false },
        { x: 0.07,  y:  1.12, text: '0°',   font: { size: 10 }, showarrow: false },
        { x: 1.12,  y:  0.07, text: '90°',  font: { size: 10 }, showarrow: false },
        { x: 0.10,  y: -1.12, text: '180°', font: { size: 10 }, showarrow: false },
        { x: -1.18, y:  0.07, text: '270°', font: { size: 10 }, showarrow: false }
      ]
    };

    Plotly.newPlot('az-plot', traces, layout, { displayModeBar: false, responsive: true });

    var slide   = document.getElementById('az-slide');
    var numEl   = document.getElementById('az-num');
    var vAzEl   = document.getElementById('v-az');
    var vRumoEl = document.getElementById('v-rumo');
    var vQuadEl = document.getElementById('v-quad');

    function update(az) {
      var norm  = az >= 360 ? 0 : az;
      var r     = az * Math.PI / 180;
      var azPts = azArcPts(az);
      var rmPts = rumoArcPts(az);
      Plotly.restyle('az-plot',
        { x: [azPts.x, rmPts.x, [0, Math.sin(r)]],
          y: [azPts.y, rmPts.y, [0, Math.cos(r)]] },
        [6, 7, 8]
      );
      numEl.textContent   = az + '\xb0';
      var info = azInfo(norm);
      vAzEl.textContent   = dms(norm);
      vRumoEl.textContent = info.rumo;
      vQuadEl.textContent = info.quad;
    }

    var newSlide = slide.cloneNode(true);
    slide.parentNode.replaceChild(newSlide, slide);
    newSlide.addEventListener('input', function (e) { update(+e.target.value); });
    update(az0);
  }

  function loadAndBuild() {
    if (typeof Plotly !== 'undefined') { buildChart(); return; }
    if (document.querySelector('script[src="' + CDN + '"]')) {
      var poll = setInterval(function () {
        if (typeof Plotly !== 'undefined') { clearInterval(poll); buildChart(); }
      }, 40);
      return;
    }
    var s = document.createElement('script');
    s.src = CDN;
    s.onload = buildChart;
    document.head.appendChild(s);
  }

  function init() {
    if (!document.getElementById('az-plot')) return;
    loadAndBuild();
  }

  if (typeof document$ !== 'undefined') {
    if (!window.__compassSubscribed) {
      window.__compassSubscribed = true;
      document$.subscribe(init);
    }
  } else {
    document.readyState === 'loading'
      ? document.addEventListener('DOMContentLoaded', init)
      : init();
  }
})();
</script>
