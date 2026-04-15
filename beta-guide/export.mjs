import { chromium } from 'playwright';
import { fileURLToPath, pathToFileURL } from 'url';
import path from 'path';
import fs from 'fs/promises';
import QRCode from 'qrcode';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const htmlPath = path.join(__dirname, 'index.html');
const distDir = path.join(__dirname, 'dist');

const CARDS = [
  { id: 'ios', file: 'ios.png' },
  { id: 'and', file: 'android.png' },
];
const CARD_W = 1080;
const CARD_H = 1920;

await fs.mkdir(distDir, { recursive: true });

const browser = await chromium.launch();
const ctx = await browser.newContext({
  viewport: { width: CARD_W, height: CARD_H * CARDS.length + 200 },
  deviceScaleFactor: 2,
});
const page = await ctx.newPage();

await page.goto(pathToFileURL(htmlPath).toString(), { waitUntil: 'networkidle' });

const imgs = await page.$$('img[data-qr]');
for (const img of imgs) {
  const url = await img.getAttribute('data-qr');
  const dataUri = await QRCode.toDataURL(url, {
    width: 840,
    margin: 1,
    color: { dark: '#0B1020', light: '#FFFFFF' },
    errorCorrectionLevel: 'M',
  });
  await img.evaluate((el, src) => { el.setAttribute('src', src); }, dataUri);
}

for (const c of CARDS) {
  const el = await page.$(`#${c.id}`);
  const out = path.join(distDir, c.file);
  await el.screenshot({ path: out });
  console.log('✓', path.relative(process.cwd(), out));
}

// PDF: two pages, one per card.
await page.addStyleTag({
  content: `
    @page { size: ${CARD_W}px ${CARD_H}px; margin: 0; }
    html, body { background: #fff !important; padding: 0 !important; }
    .stage { gap: 0 !important; }
    .card { page-break-after: always; break-after: page; }
    .card:last-child { page-break-after: auto; break-after: auto; }
  `,
});

const pdfOut = path.join(distDir, 'lanka-beta-guide.pdf');
await page.pdf({
  path: pdfOut,
  width: `${CARD_W}px`,
  height: `${CARD_H}px`,
  printBackground: true,
  margin: { top: 0, right: 0, bottom: 0, left: 0 },
  pageRanges: `1-${CARDS.length}`,
});
console.log('✓', path.relative(process.cwd(), pdfOut));

await browser.close();
console.log('\ndone →', path.relative(process.cwd(), distDir));
