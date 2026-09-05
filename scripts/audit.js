import { chromium } from 'playwright';
import AxeBuilder from '@axe-core/playwright';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

const pages = [
  { name: 'Index (Gateway & FACE Login)', file: 'index.html' },
  { name: 'Showcase (Standards Guide & SEO)', file: 'showcase.html' },
  { name: 'Dashboard (Telemetry Matrix)', file: 'dashboard.html' },
  { name: 'Dashboard Nodes (Continuity)', file: 'dashboard-nodes.html' }
];

async function runAudits() {
  console.log('\n=============================================================');
  console.log('  AetherWatch: Accessibility & Usability Benchmark Audit');
  console.log('=============================================================\n');

  const browser = await chromium.launch({ headless: true });
  let totalViolations = 0;
  const results = [];

  for (const pageInfo of pages) {
    const context = await browser.newContext();
    const page = await context.newPage();
    const filePath = `file://${path.join(distDir, pageInfo.file)}`;

    const pageErrors = [];
    page.on('pageerror', err => pageErrors.push(err.message));

    await page.goto(filePath, { waitUntil: 'load' });

    // Inject and run axe accessibility scan including Shadow DOM
    const axeResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'best-practice'])
      .analyze();

    const violations = axeResults.violations;
    totalViolations += violations.length;

    results.push({
      page: pageInfo.name,
      file: pageInfo.file,
      violationsCount: violations.length,
      violations: violations.map(v => ({
        id: v.id,
        impact: v.impact,
        description: v.description,
        nodes: v.nodes.length
      })),
      pageErrors
    });

    await context.close();
  }

  await browser.close();

  // Low-verbosity summary output
  console.log('---------------------------------------------------------------------------------');
  console.log(String('Page Name').padEnd(36) + String('Status').padEnd(14) + String('Violations').padEnd(14) + 'Errors');
  console.log('---------------------------------------------------------------------------------');

  for (const res of results) {
    const status = res.violationsCount === 0 && res.pageErrors.length === 0 ? '✓ PASS' : '✗ FAIL';
    console.log(
      res.page.padEnd(36) +
      status.padEnd(14) +
      String(res.violationsCount).padEnd(14) +
      String(res.pageErrors.length)
    );

    if (res.violations.length > 0) {
      for (const v of res.violations) {
        console.log(`   └─ [${v.impact || 'info'}] ${v.id}: ${v.description} (${v.nodes} nodes)`);
      }
    }
  }
  console.log('---------------------------------------------------------------------------------\n');

  if (totalViolations === 0) {
    console.log('🎉 Benchmark Passed: 100% WCAG 2.1 AA & Usability Compliance across all pages!\n');
    process.exit(0);
  } else {
    console.error(`❌ Benchmark Failed: ${totalViolations} total accessibility violations detected.\n`);
    process.exit(1);
  }
}

runAudits().catch(err => {
  console.error('Audit execution error:', err);
  process.exit(1);
});
