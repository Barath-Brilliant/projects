  const root = document.documentElement;
  const pad = document.getElementById('pad');
  const bor = document.getElementById('bor');
  const mar = document.getElementById('mar');
  const padVal = document.getElementById('padVal');
  const borVal = document.getElementById('borVal');
  const marVal = document.getElementById('marVal');
  const box = document.getElementById('box');
  const outer = document.getElementById('outer');
  const sizeOut = document.getElementById('sizeOut');

  function update(){
    padVal.textContent = pad.value;
    borVal.textContent = bor.value;
    marVal.textContent = mar.value;

    root.style.setProperty('--pad', pad.value);
    root.style.setProperty('--bor', bor.value);
    root.style.setProperty('--mar', mar.value);

    // Read computed sizes
    const cs = getComputedStyle(box);
    const contentWidth = box.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
    const contentHeight = box.clientHeight - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom);
    const paddingX = parseFloat(cs.paddingLeft) + parseFloat(cs.paddingRight);
    const paddingY = parseFloat(cs.paddingTop) + parseFloat(cs.paddingBottom);
    const borderX = parseFloat(cs.borderLeftWidth) + parseFloat(cs.borderRightWidth);
    const borderY = parseFloat(cs.borderTopWidth) + parseFloat(cs.borderBottomWidth);

    const margin = parseFloat(getComputedStyle(outer).marginLeft) + parseFloat(getComputedStyle(outer).marginRight);

    const borderBoxW = box.offsetWidth;   // content + padding + border
    const borderBoxH = box.offsetHeight;

    sizeOut.innerHTML = `
      <span>Content: <b>${Math.round(contentWidth)} × ${Math.round(contentHeight)}</b></span>
      <span>Padding (X): <b>${Math.round(paddingX)}px</b></span>
      <span>Border (X): <b>${Math.round(borderX)}px</b></span>
      <span>Border‑box: <b>${borderBoxW} × ${borderBoxH}</b></span>
      <span>Horizontal margin total: <b>${Math.round(margin)}px</b></span>
    `;
  }

  [pad, bor, mar].forEach(el => el.addEventListener('input', update));
  update();