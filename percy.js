let { run } = require("@percy/script");
let scrollToBottom = require("scroll-to-bottomjs");

const PercyScript = require('@percy/script');

// A script to navigate our app and take snapshots with Percy.
PercyScript.run(async (page, percySnapshot) => {
  
  await page.goto('https://www.handy.la/');
  await page.evaluate(scrollToBottom, { frequency: 100, timing: 70 });
  await percySnapshot('Home');

  
  await page.goto('https://www.handy.la/funcionalidades');
  await page.evaluate(scrollToBottom, { frequency: 100, timing: 70 });
  await percySnapshot('funcionalidades');

  await page.goto('https://www.handy.la/preventa');
  await page.evaluate(scrollToBottom);
  await page.evaluate(scrollToBottom, { frequency: 100, timing: 70 });
  await percySnapshot('preventa');

  await page.goto('https://www.handy.la/venta-en-ruta');
  await page.evaluate(scrollToBottom);
  await page.evaluate(scrollToBottom, { frequency: 100, timing: 70 });
  await percySnapshot('VentaRuta');

  await page.goto('https://www.handy.la/reparto-preventa');
  await page.evaluate(scrollToBottom);
  await page.evaluate(scrollToBottom, { frequency: 100, timing: 70 });
  await percySnapshot('Reparto');

  await page.goto('https://www.handy.la/integraciones');
  await page.evaluate(scrollToBottom);
  await page.evaluate(scrollToBottom, { frequency: 100, timing: 70 });
  await percySnapshot('Integraciones');

  await page.goto('https://www.handy.la/academia-handy');
  await page.evaluate(scrollToBottom);
  await page.evaluate(scrollToBottom, { frequency: 100, timing: 70 });
  await percySnapshot('Academia');

  await page.goto('https://www.handy.la/taller-arranque');
  await page.evaluate(scrollToBottom);
  await page.evaluate(scrollToBottom, { frequency: 100, timing: 70 });
  await percySnapshot('Taller');

  let urls = ['https://www.handy.la/precios'];
  for (let url of urls) {
    await page.goto(url);
    await page.evaluate(scrollToBottom, { frequency: 100, timing: 70 });
    await percySnapshot('Precios');
  }
  
});

