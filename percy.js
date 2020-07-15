let { run } = require("@percy/script");
let scrollToBottom = require("scroll-to-bottomjs");

const PercyScript = require('@percy/script');


// A script to navigate our app and take snapshots with Percy.
PercyScript.run(async (page, percySnapshot) => {
  

  await page.goto('https://handy-new.webflow.io/');
  await page.evaluate(scrollToBottom, { frequency: 99, timing: 30 });
  await percySnapshot('Home');

  
  await page.goto('https://handy-new.webflow.io/funcionalidades');
  await page.evaluate(scrollToBottom, { frequency: 99, timing: 30 });
  await percySnapshot('funcionalidades');

  await page.goto('https://handy-new.webflow.io/preventa');
  await page.evaluate(scrollToBottom);
  await page.evaluate(scrollToBottom, { frequency: 98, timing: 30 });
  await percySnapshot('preventa');

  await page.goto('https://handy-new.webflow.io/promotoria');
  await page.evaluate(scrollToBottom);
  await page.evaluate(scrollToBottom, { frequency: 99, timing: 30 });
  await percySnapshot('promotoria');

  await page.goto('https://handy-new.webflow.io/venta-en-ruta');
  await page.evaluate(scrollToBottom);
  await page.evaluate(scrollToBottom, { frequency: 99, timing: 30 });
  await percySnapshot('VentaRuta');

  let urls = ['https://handy-new.webflow.io/precios'];
  for (let url of urls) {
    await page.goto(url);
    await page.evaluate(scrollToBottom, { frequency: 99, timing: 30 });
    await percySnapshot('Precios');
  }
  
  await page.goto('https://handy-new.webflow.io/reparto-preventa');
  await page.evaluate(scrollToBottom);
  await page.evaluate(scrollToBottom, { frequency: 99, timing: 30 });
  await percySnapshot('reparto-preventa');
  
  
  await page.goto('https://handy-new.webflow.io/academia-handy');
  await page.evaluate(scrollToBottom);
  await page.evaluate(scrollToBottom, { frequency: 99, timing: 30 });
  await percySnapshot('Academia Handy');

  
});
