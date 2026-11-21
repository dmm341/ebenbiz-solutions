import fs from 'node:fs';
import path from 'node:path';

const SITE_URL = 'https://ebenbiz.vercel.app';
const TODAY = new Date().toISOString().split('T')[0];

export const SEO_PAGES = [
  {
    slug: 'erp-software-kenya',
    title: 'ERP & POS Software in Kenya with M-Pesa & Offline Sync | Ebenbiz Solutions',
    h1: 'Ebenbiz ERP & Point of Sale (POS) Software in Kenya',
    description:
      'Best cloud and offline-ready ERP & POS software in Kenya for retail, wholesale, supermarkets, pharmacies, and manufacturers. Includes M-Pesa split payments, multi-branch inventory, and 52+ Chart of Accounts.',
    keywords:
      'ERP software Kenya, POS software Kenya, point of sale system Nairobi, M-Pesa POS system Kenya, accounting software Kenya, multi-branch inventory software Kenya, Ebenbiz ERP',
    section: '#erp',
    pillar: 'erp',
    bullets: [
      'Smart POS with Cash, M-Pesa, Bank, Card & Store Credit split payments + 100% offline continuity',
      'Automated Double-Entry Accounting with 52+ Chart of Accounts, Trial Balance, P&L & Balance Sheet',
      'Multi-Branch & Warehouse Inventory with Goods-in-Transit and reorder alerts',
      'Bill of Materials (BOM), Work Orders, Supplier Invoicing & Recurring Billing',
    ],
  },
  {
    slug: 'pos-hardware-kenya',
    title: 'POS Hardware, Thermal Receipt Printers, Barcode Scanners & Laptops in Kenya | Ebenbiz',
    h1: 'Computers, Laptops, Thermal Receipt Printers & POS Hardware in Kenya',
    description:
      'Buy genuine POS hardware kits, 80mm thermal receipt printers, 1D/2D barcode scanners, cash drawers, touch POS terminals, UPS power backups, and HP/Dell/Lenovo laptops in Nairobi & across Kenya.',
    keywords:
      'POS hardware Kenya, thermal receipt printer Nairobi, barcode scanner Kenya, cash drawer Kenya, touch POS terminal Kenya, business laptops HP Dell Lenovo Kenya, Ebenbiz hardware',
    section: '#hardware',
    pillar: 'hardware',
    bullets: [
      '80mm Auto-Cutter Thermal Receipt Printers (USB / Ethernet / Bluetooth) & Barcode Label Printers',
      '1D & 2D Wireless and Omnidirectional Countertop Barcode Scanners + Heavy-Duty RJ11 Cash Drawers',
      'Business Laptops & Desktop PC Sets (HP, Dell, Lenovo Core i5/i7, 16GB RAM, NVMe SSD)',
      'High-Volume Office Laser/InkTank Printers, Line-Interactive UPS Backup Units & Networking',
    ],
  },
  {
    slug: 'stock-taking-services-kenya',
    title: 'Physical Stock-Taking, Inventory Audit & Shrinkage Control Services in Kenya | Ebenbiz',
    h1: 'Professional Physical Stock-Taking & Contract Inventory Management in Kenya',
    description:
      'Independent physical stock-taking audits, outsourced inventory management contracts, barcode tagging, variance reconciliation, and shrinkage control for supermarkets, pharmacies, hardware stores & warehouses in Kenya.',
    keywords:
      'stock taking services Kenya, inventory audit company Nairobi, physical stock count Kenya, outsourced inventory management Kenya, stock shrinkage control Kenya, supermarket stock taking Kenya',
    section: '#inventory',
    pillar: 'inventory',
    bullets: [
      'Independent Physical Stock Counts & Verification executed overnight or on weekends with zero sales disruption',
      'Monthly & Quarterly Contract Inventory Management with random spot checks and GRN audits',
      'SKU Categorization, Barcode Generation, Shelf Labeling & Master Catalog Clean-Up',
      'Signed Executive Valuation, Variance & Shrinkage Reconciliation Reports (Physical vs Book Stock)',
    ],
  },
  {
    slug: 'computer-maintenance-kenya',
    title: 'Computer Cleaning, Printer Repair & Annual IT Maintenance (AMC) in Kenya | Ebenbiz',
    h1: 'Computer Cleaning, Thermal Printer Servicing & Annual IT Maintenance Contracts in Kenya',
    description:
      'Preventive computer cleaning, ultrasonic dust blowing, thermal paste renewal, POS & office printer repair, SSD/RAM upgrades, and Annual Maintenance Contracts (AMC) for businesses across Kenya.',
    keywords:
      'computer maintenance Kenya, Annual Maintenance Contract AMC IT Kenya, computer dust cleaning Nairobi, thermal printer repair Kenya, laptop servicing SSD upgrade Kenya, IT support Kenya',
    section: '#maintenance',
    pillar: 'maintenance',
    bullets: [
      'Deep Ultrasonic & Air-Blower Desktop/Laptop Cleaning, Fan Servicing & Thermal Paste Renewal',
      'POS Thermal Receipt Printer & Office Printer Head, Roller & Cutter Servicing',
      'Annual Maintenance Contracts (AMC) with scheduled quarterly preventive visits & emergency callouts',
      'SSD & RAM Performance Upgrades, OS Tune-Ups, Antivirus Protection & Network Cabling Audits',
    ],
  },
  {
    slug: 'supermarket-pos-system-kenya',
    title: 'Supermarket & Mini-Mart POS System, Hardware & Stock Audits in Kenya | Ebenbiz',
    h1: 'Complete Supermarket & Mini-Mart POS Software, Hardware & Stock-Taking in Kenya',
    description:
      'End-to-end supermarket and mini-mart technology in Kenya: fast offline-ready multi-till POS software with M-Pesa, barcode scanners, thermal receipt printers, cash drawers, and overnight physical stock audits.',
    keywords:
      'supermarket POS system Kenya, mini-mart POS software Nairobi, retail POS hardware Kenya, supermarket stock taking Kenya, barcode system for supermarket Kenya',
    section: '#industries',
    industry: 'retail',
    bullets: [
      'Fast multi-till POS checkout with M-Pesa + Cash split payments and offline sync',
      'Complete counter hardware kits: touch terminals, 2D omnidirectional scanners, 80mm printers & cash drawers',
      'Overnight physical stock-taking audits and shelf barcode labeling with zero downtime',
      'Automated supplier invoice cost/retail price updates and daily cashier reconciliation',
    ],
  },
  {
    slug: 'pharmacy-pos-software-kenya',
    title: 'Pharmacy & Chemist POS Software, Inventory & Barcode Systems in Kenya | Ebenbiz',
    h1: 'Pharmacy & Chemist ERP, POS Hardware & Stock Audit Solutions in Kenya',
    description:
      'Manage your pharmacy or chemist in Kenya with Ebenbiz ERP: pack/unit inventory control, profit margin tracking, M-Pesa POS checkout, compact barcode hardware kits, and independent stock audits.',
    keywords:
      'pharmacy POS software Kenya, chemist inventory system Nairobi, pharmacy stock taking Kenya, POS system for pharmacy Kenya',
    section: '#industries',
    industry: 'pharmacy',
    bullets: [
      'Unit and pack stock tracking with real-time margin visibility and daily cashier reconciliation',
      'Compact all-in-one counter PCs, wireless barcode scanners, label printers & UPS backup',
      'Independent physical stock audits to eliminate missing stock and book discrepancies',
      'Automated double-entry accounting, P&L statements, and supplier bill tracking',
    ],
  },
  {
    slug: 'hardware-store-pos-erp-kenya',
    title: 'Hardware Store, Agrovet & Wholesale ERP, POS & Stock-Taking in Kenya | Ebenbiz',
    h1: 'Hardware Store, Agrovet & Wholesale ERP Software and Inventory Audits in Kenya',
    description:
      'Built for Kenyan hardware stores, agrovets, and wholesalers: manage bulk & loose items, B2B customer credit statements, quotations, multi-warehouse stock transfers, and physical inventory counts.',
    keywords:
      'hardware store POS system Kenya, wholesale ERP software Kenya, agrovet POS software Kenya, B2B credit management ERP Kenya, warehouse stock taking Kenya',
    section: '#industries',
    industry: 'hardware-store',
    bullets: [
      'B2B customer credit statements, quotations, bulk invoice allocations & multi-branch pricing',
      'Multi-warehouse inventory control with Goods-in-Transit transfers and GRN verification',
      'Heavy-duty desktop workstations, rugged barcode scanners & A4 duplex invoice printers',
      'Quarterly ultrasonic computer dust-cleaning (ideal for dusty yards) and physical stock audits',
    ],
  },
];

const distDir = path.resolve('dist');
const publicDir = path.resolve('public');

// 1. Generate sitemap.xml and robots.txt in both public/ and dist/
const urls = [
  { loc: `${SITE_URL}/`, priority: '1.0', changefreq: 'weekly' },
  ...SEO_PAGES.map((p) => ({
    loc: `${SITE_URL}/${p.slug}`,
    priority: '0.9',
    changefreq: 'weekly',
  })),
];

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;

for (const dir of [publicDir, distDir]) {
  if (fs.existsSync(dir)) {
    fs.writeFileSync(path.join(dir, 'sitemap.xml'), sitemapXml, 'utf8');
    fs.writeFileSync(path.join(dir, 'robots.txt'), robotsTxt, 'utf8');
  }
}

// 2. If dist/index.html exists, generate static pre-rendered HTML for each SEO landing route
const baseHtmlPath = path.join(distDir, 'index.html');
if (fs.existsSync(baseHtmlPath)) {
  const baseHtml = fs.readFileSync(baseHtmlPath, 'utf8');

  for (const page of SEO_PAGES) {
    const pageUrl = `${SITE_URL}/${page.slug}`;
    let html = baseHtml
      .replace(/<title>[\s\S]*?<\/title>/, `<title>${page.title}</title>`)
      .replace(
        /<meta name="description" content="[^"]*"\s*\/?>/,
        `<meta name="description" content="${page.description}" />`
      )
      .replace(
        /<meta name="keywords" content="[^"]*"\s*\/?>/,
        `<meta name="keywords" content="${page.keywords}" />`
      )
      .replace(
        /<link rel="canonical" href="[^"]*"\s*\/?>/,
        `<link rel="canonical" href="${pageUrl}" />`
      )
      .replace(
        /<meta property="og:title" content="[^"]*"\s*\/?>/,
        `<meta property="og:title" content="${page.title}" />`
      )
      .replace(
        /<meta property="og:description" content="[^"]*"\s*\/?>/,
        `<meta property="og:description" content="${page.description}" />`
      )
      .replace(
        /<meta property="og:url" content="[^"]*"\s*\/?>/,
        `<meta property="og:url" content="${pageUrl}" />`
      );

    // Inject crawlable pre-rendered semantic HTML inside <div id="root">...</div>
    const semanticContent = `<div id="root"><main><h1>${page.h1}</h1><p>${page.description}</p><ul>${page.bullets
      .map((b) => `<li>${b}</li>`)
      .join('')}</ul><p>Contact Ebenbiz Solutions in Kenya: +254 719 620 443 | sales@ebenbiz.co.ke | support@ebenbiz.co.ke | info@ebenbiz.co.ke</p></main></div>`;

    html = html.replace(/<div id="root">[\s\S]*?<\/div>/, semanticContent);

    const outDir = path.join(distDir, page.slug);
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, 'index.html'), html, 'utf8');
  }
  console.log(`Generated ${SEO_PAGES.length} pre-rendered SEO landing pages + sitemap.xml + robots.txt`);
}
