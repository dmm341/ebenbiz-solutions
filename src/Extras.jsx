import React, { useState, useEffect, useRef } from 'react';
import {
  Star,
  Quote,
  Headphones,
  ShieldCheck,
  Clock,
  Award,
  CheckCircle2,
  ChevronDown,
  Phone,
  Gift,
  Truck,
  Users,
  ArrowRight,
  ArrowUp,
  Mail,
  MapPin,
  MessageCircle,
  Boxes,
  Wrench,
  ShoppingCart,
  BookOpen,
  Store,
  Pill,
  Hammer,
  Warehouse,
  Building2,
  Wifi,
  Smartphone,
  Banknote,
  CreditCard,
  ScanBarcode,
  TrendingUp,
  Laptop,
} from 'lucide-react';

const WA = 'https://wa.me/254719620443?text=';
const wa = (msg) => `${WA}${encodeURIComponent(msg)}`;

/* Unified section heading used across App.jsx and Extras.jsx */
export function SectionHeading({ eyebrow, dark, accent, align = 'center', children }) {
  const isLeft = align === 'left';
  return (
    <div className={isLeft ? 'max-w-2xl mb-10' : 'text-center max-w-3xl mx-auto mb-12'}>
      <span className="inline-block text-[11px] font-extrabold uppercase tracking-[0.22em] text-amber-600 mb-2.5">
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
        {dark}{' '}
        {accent && <span className="text-blue-600">{accent}</span>}
      </h2>
      {children && (
        <p className={`mt-3.5 text-sm sm:text-base text-slate-600 leading-relaxed ${isLeft ? '' : 'mx-auto'}`}>
          {children}
        </p>
      )}
    </div>
  );
}

/* Interactive Hero ERP & POS Live Preview */
const PREVIEW_TABS = [
  { id: 'pos', label: 'Smart POS', shortLabel: 'POS', icon: ShoppingCart },
  { id: 'stock', label: 'Multi-Branch Stock', shortLabel: 'Stock', icon: Boxes },
  { id: 'accounts', label: 'Accounting', shortLabel: 'Accounts', icon: BookOpen },
];

export function HeroErpPreview({ onSelectPillar }) {
  const [tab, setTab] = useState('pos');

  return (
    <div className="rounded-3xl bg-slate-950 text-white border border-slate-800 shadow-2xl shadow-blue-950/20 overflow-hidden">
      {/* Window Header Bar */}
      <div className="px-4 sm:px-5 py-3.5 bg-slate-900/90 border-b border-slate-800 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 shrink-0" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80 shrink-0" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80 shrink-0" />
          <span className="ml-1.5 text-[11px] font-semibold text-slate-400 truncate">
            Ebenbiz ERP <span className="hidden sm:inline">• Live Workspace Preview</span>
          </span>
        </div>
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-[10px] font-bold text-emerald-300 shrink-0">
          <Wifi className="w-3 h-3" /> Offline-Sync Ready
        </span>
      </div>

      {/* Interactive Module Switcher */}
      <div className="px-4 sm:px-5 pt-4 pb-3 border-b border-slate-800/80 grid grid-cols-3 gap-1.5 sm:gap-2">
        {PREVIEW_TABS.map(({ id, label, shortLabel, icon: Icon }) => {
          const active = tab === id;
          return (
            <button
              key={id}
              type="button"
              onClick={() => setTab(id)}
              className={`min-w-0 flex items-center justify-center gap-1.5 py-2 px-2 sm:px-2.5 rounded-xl text-xs font-bold cursor-pointer transition-colors ${
                active
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Icon className="w-3.5 h-3.5 shrink-0" />
              <span className="sm:hidden truncate">{shortLabel}</span>
              <span className="hidden sm:inline truncate">{label}</span>
            </button>
          );
        })}
      </div>

      {/* Preview Body */}
      <div className="p-5 min-h-[296px] flex flex-col justify-between">
        {tab === 'pos' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-slate-300 flex items-center gap-1.5">
                <ScanBarcode className="w-4 h-4 text-amber-400" /> Counter #02 • Receipt #EB-4092
              </span>
              <span className="text-[11px] text-emerald-400 font-semibold">Auto-Posts to Ledger</span>
            </div>

            <div className="rounded-2xl bg-slate-900 border border-slate-800 divide-y divide-slate-800 text-xs">
              {[
                { item: '2kg Pembe Maize Meal × 4', sku: 'SKU-1042', amt: 'KES 760' },
                { item: '2L Fresh Fri Cooking Oil × 2', sku: 'SKU-2218', amt: 'KES 1,180' },
                { item: 'Bar Soap Carton (24pcs) × 1', sku: 'SKU-3190', amt: 'KES 3,450' },
              ].map((row) => (
                <div key={row.sku} className="px-4 py-2.5 flex items-center justify-between gap-2">
                  <div>
                    <div className="font-semibold text-white">{row.item}</div>
                    <div className="text-[10px] text-slate-500">{row.sku}</div>
                  </div>
                  <div className="font-bold text-slate-100 tabular-nums">{row.amt}</div>
                </div>
              ))}
              <div className="px-4 py-3 bg-blue-950/50 flex items-center justify-between">
                <span className="font-bold text-blue-200">Split Checkout Total</span>
                <span className="font-display text-lg font-extrabold text-amber-300 tabular-nums">KES 5,390</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] font-bold">
              <div className="rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 px-3 py-2 flex items-center justify-center gap-1.5">
                <Smartphone className="w-3.5 h-3.5 shrink-0" /> M-Pesa: 4,000
              </div>
              <div className="rounded-xl bg-blue-500/15 border border-blue-500/30 text-blue-200 px-3 py-2 flex items-center justify-center gap-1.5">
                <Banknote className="w-3.5 h-3.5 shrink-0" /> Cash: 1,390
              </div>
              <div className="rounded-xl bg-slate-800 border border-slate-700 text-slate-300 px-3 py-2 flex items-center justify-center gap-1.5">
                <CreditCard className="w-3.5 h-3.5 shrink-0" /> Card / Credit
              </div>
            </div>
          </div>
        )}

        {tab === 'stock' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-slate-300">Real-Time Multi-Branch Inventory</span>
              <span className="px-2 py-0.5 rounded-full bg-amber-400/15 text-amber-300 font-bold text-[10px]">
                3 Active Locations
              </span>
            </div>

            <div className="space-y-3">
              {[
                { loc: 'Main Warehouse (Industrial Area)', qty: '14,820 SKUs', pct: '88%', bar: 'bg-blue-500', status: 'Healthy' },
                { loc: 'Retail Branch 01 (CBD)', qty: '3,410 SKUs', pct: '64%', bar: 'bg-emerald-500', status: 'Synced' },
                { loc: 'Retail Branch 02 (Westlands)', qty: '1,195 SKUs', pct: '26%', bar: 'bg-amber-400', status: 'Reorder Alert' },
              ].map((b) => (
                <div key={b.loc} className="rounded-2xl bg-slate-900 border border-slate-800 p-3.5 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-white">{b.loc}</span>
                    <span className="text-[11px] font-semibold text-slate-400">{b.qty}</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                    <div className={`h-full rounded-full ${b.bar}`} style={{ width: b.pct }} />
                  </div>
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="text-slate-400">Goods-in-Transit: 2 transfers</span>
                    <span className={b.status === 'Reorder Alert' ? 'text-amber-300 font-bold' : 'text-emerald-400 font-bold'}>
                      {b.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === 'accounts' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-slate-300 flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-emerald-400" /> Automated Double-Entry Ledger
              </span>
              <span className="text-[11px] text-blue-300 font-semibold">52+ Chart of Accounts</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-slate-900 border border-slate-800 p-4">
                <div className="text-[11px] text-slate-400">Today’s Sales Posted</div>
                <div className="font-display text-xl font-extrabold text-white mt-1 tabular-nums">KES 482,650</div>
                <div className="text-[10px] text-emerald-400 font-bold mt-1">13 auto-posting hooks active</div>
              </div>
              <div className="rounded-2xl bg-slate-900 border border-slate-800 p-4">
                <div className="text-[11px] text-slate-400">Trial Balance Status</div>
                <div className="font-display text-xl font-extrabold text-emerald-400 mt-1">Balanced</div>
                <div className="text-[10px] text-slate-400 mt-1">Dr = Cr across all branches</div>
              </div>
            </div>

            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-3.5 space-y-2 text-xs">
              <div className="text-[10px] uppercase tracking-wider font-bold text-amber-300">Latest Auto-Journal Entry</div>
              <div className="flex justify-between text-slate-200">
                <span>Dr. M-Pesa Clearing / Cash Till</span>
                <span className="font-bold tabular-nums">5,390.00</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Cr. Retail Sales Revenue & VAT</span>
                <span className="font-bold tabular-nums">5,390.00</span>
              </div>
            </div>
          </div>
        )}

        {/* Quick Division Shortcuts Footer */}
        <div className="mt-5 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2 text-[11px]">
          <div className="flex flex-wrap items-center gap-1.5">
            {[
              { id: 'erp', href: '#erp', label: 'ERP' },
              { id: 'hardware', href: '#hardware', label: 'Hardware' },
              { id: 'inventory', href: '#inventory', label: 'Stock-Taking' },
              { id: 'maintenance', href: '#maintenance', label: 'IT Care' },
            ].map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => onSelectPillar && onSelectPillar(item.id)}
                className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-blue-600 text-slate-300 hover:text-white border border-slate-800 font-semibold transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
          <a href="#contact" className="text-amber-300 hover:text-amber-200 font-bold inline-flex items-center gap-1">
            Book Live Demo <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}

/* Animated number */
function CountUp({ to, suffix = '' }) {
  const ref = useRef(null);
  const [val, setVal] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const dur = 1400;
      const tick = (t) => {
        const p = Math.min((t - start) / dur, 1);
        setVal(Math.round(to * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return (
    <span ref={ref} className="tabular-nums">
      {val}
      {suffix}
    </span>
  );
}

/* 1. Trust stats bar + supported tech/hardware strip
   NOTE: metric figures are placeholders - replace with real Ebenbiz numbers. */
export function TrustBar() {
  const stats = [
    { icon: Users, to: 150, suffix: '+', label: 'Businesses Served' },
    { icon: Boxes, to: 500, suffix: 'K+', label: 'Items Counted & Reconciled' },
    { icon: Award, to: 5, suffix: '+', label: 'Years of Experience' },
    { icon: Clock, to: 24, suffix: 'h', label: 'Average Response Time' },
  ];
  const ecosystem = [
    'M-Pesa Split Payments',
    'Offline-Ready POS',
    'HP • Dell • Lenovo',
    '80mm Thermal Printers',
    '1D / 2D Barcode Systems',
    'Nationwide On-Site Support',
  ];
  return (
    <section className="py-10 bg-white border-b border-blue-100">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map(({ icon: Icon, to, suffix, label }) => (
            <div
              key={label}
              className="card-hover flex items-center gap-4 rounded-2xl bg-blue-50/60 border border-blue-100 p-5"
            >
              <div className="w-12 h-12 shrink-0 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-sm">
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <div className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
                  <CountUp to={to} suffix={suffix} />
                </div>
                <div className="text-xs font-semibold text-slate-600">{label}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mr-1">
            Built & Equipped For:
          </span>
          {ecosystem.map((badge) => (
            <span
              key={badge}
              className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-[11px] font-semibold text-slate-600"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 2. Industries We Serve (vertical routing inspired by leading Kenyan POS/ERP sites) */
const INDUSTRIES = [
  {
    id: 'retail',
    name: 'Supermarkets & Mini-Marts',
    icon: Store,
    headline: 'Fast Checkout Lanes, Barcode Control & Zero Shrinkage',
    summary:
      'Keep queues moving even when internet drops, track thousands of fast-moving SKUs across shelves, and run overnight physical stock audits without halting sales.',
    erp: 'Offline-ready multi-till POS, Cash + M-Pesa split payments, supplier invoice price updates',
    hardware: 'Touch POS terminals, 2D omnidirectional scanners, 80mm auto-cutter printers & cash drawers',
    services: 'Quarterly overnight physical stock-takes, shelf barcoding & POS counter maintenance',
  },
  {
    id: 'pharmacy',
    name: 'Pharmacies & Chemists',
    icon: Pill,
    headline: 'Batch Precision, Clean Inventory & Fast Counter Service',
    summary:
      'Eliminate missing stock and manual ledger errors with tight SKU catalog control, real-time margin visibility, and reliable counter hardware.',
    erp: 'Unit/pack stock tracking, supplier bill drafts, automated P&L and daily cashier reconciliation',
    hardware: 'Compact all-in-one workstations, wireless barcode scanners, label printers & UPS backup',
    services: 'SKU catalog clean-up, independent physical stock counts & preventive PC cleaning',
  },
  {
    id: 'hardware-store',
    name: 'Hardware & Agrovet',
    icon: Hammer,
    headline: 'Bulk & Loose-Item Control Across Yard and Counter',
    summary:
      'Manage bulky building materials alongside small fast-moving fittings with accurate purchase costing, customer credit statements, and dust-proof IT care.',
    erp: 'B2B customer credit statements, quotations, Goods-in-Transit & multi-branch pricing',
    hardware: 'Heavy-duty desktop workstations, rugged barcode scanners & A4 duplex invoice printers',
    services: 'Deep ultrasonic dust-cleaning maintenance (critical for dusty yards) & stock audits',
  },
  {
    id: 'warehouse',
    name: 'Wholesalers & Warehouses',
    icon: Warehouse,
    headline: 'Multi-Warehouse Visibility, BOM Assembly & GRN Controls',
    summary:
      'Connect receiving bays, assembly lines, and dispatch branches into one double-entry financial ledger with verified Goods Receiving controls.',
    erp: 'Multi-warehouse transfers, Bill of Materials (BOM), work orders & bulk payment allocations',
    hardware: 'Warehouse laptops, barcode label printers, structured networking & enterprise UPS units',
    services: 'Outsourced contract inventory management, bin organization & SOP design',
  },
  {
    id: 'offices',
    name: 'Offices & Service Firms',
    icon: Building2,
    headline: 'Reliable Workstations, Recurring Billing & Proactive IT Care',
    summary:
      'Equip your finance and operations teams with genuine business laptops, automated recurring contract invoicing, and quarterly hardware servicing.',
    erp: 'Recurring service billing, customer hub, quotations & 52+ pre-seeded Chart of Accounts',
    hardware: 'Core i5/i7 business laptops, IPS desktop monitors, InkTank/Laser multifunction printers',
    services: 'Annual Maintenance Contracts (AMC), SSD/RAM upgrades & on-site IT troubleshooting',
  },
];

export function IndustriesStrip({ onRequestQuote }) {
  const [selectedId, setSelectedId] = useState(INDUSTRIES[0].id);
  const current = INDUSTRIES.find((i) => i.id === selectedId) || INDUSTRIES[0];
  const ActiveIcon = current.icon;

  return (
    <section id="industries" className="scroll-mt-24 py-16 lg:py-20 bg-blue-50/40 bg-dot-subtle border-t border-blue-100">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Industries We Serve" dark="Tailored Solutions for" accent="Your Sector">
          Select your business type to see how Ebenbiz combines ERP software, hardware, and field services for your workflow.
        </SectionHeading>

        {/* Sector Selector Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8">
          {INDUSTRIES.map((ind) => {
            const Icon = ind.icon;
            const active = ind.id === selectedId;
            return (
              <button
                key={ind.id}
                type="button"
                onClick={() => setSelectedId(ind.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold border cursor-pointer transition-all ${
                  active
                    ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-600/20'
                    : 'bg-white text-slate-700 border-blue-100 hover:border-blue-300 hover:bg-blue-50/50'
                }`}
              >
                <Icon className={`w-4 h-4 ${active ? 'text-amber-300' : 'text-blue-600'}`} />
                {ind.name}
              </button>
            );
          })}
        </div>

        {/* Selected Sector Detail Card */}
        <div className="bg-white rounded-3xl border border-blue-100 shadow-lg p-7 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
                <ActiveIcon className="w-4 h-4" />
                {current.name}
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                {current.headline}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">{current.summary}</p>
              <a
                href="#contact"
                onClick={() => onRequestQuote && onRequestQuote(`Industry Solution: ${current.name}`)}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold shadow-md shadow-blue-600/20"
              >
                Get a {current.name.split(' ')[0]} Quote <ArrowRight className="w-4 h-4 text-amber-300" />
              </a>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: ShoppingCart, title: 'ERP Software', color: 'text-blue-600 bg-blue-50', body: current.erp },
                { icon: Laptop, title: 'Hardware Kit', color: 'text-amber-600 bg-amber-50', body: current.hardware },
                { icon: Wrench, title: 'Audit & IT Care', color: 'text-emerald-600 bg-emerald-50', body: current.services },
              ].map(({ icon: Icon, title, color, body }) => (
                <div key={title} className="rounded-2xl bg-slate-50/90 border border-slate-200/80 p-5 space-y-2.5">
                  <div className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="font-display font-extrabold text-sm text-slate-900">{title}</div>
                  <p className="text-xs text-slate-600 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* 3. Package cards (aligned heights, balanced core features) */
const PACKAGES = [
  {
    name: 'Starter',
    tag: 'Small shops & startups',
    popular: false,
    cta: 'Request Starter Quote',
    core: [
      '1 POS counter kit (PC, scanner, receipt printer)',
      'Core stock & sales Ebenbiz ERP setup',
      'On-site installation & configuration',
      'Staff walkthrough & cashier training',
    ],
    more: [
      '1 month post-install remote & WhatsApp support',
      'Receipt branding & barcode label setup',
      'Initial item upload & price catalog setup',
      'Optional quarterly PC cleaning add-on',
    ],
  },
  {
    name: 'Business',
    tag: 'Growing retail & wholesale',
    popular: true,
    cta: 'Request Business Quote',
    core: [
      'Ebenbiz ERP (POS, purchasing, inventory & accounts)',
      'Up to 3 POS counters & genuine hardware kits',
      'Initial on-site physical stock-take & reconciliation',
      'Complete data migration from Excel / legacy tools',
    ],
    more: [
      'Multi-user roles, permissions & audit trails',
      'Custom management reports & dashboards',
      '3 months priority WhatsApp & on-site support',
      'Automated backup & recovery configuration',
    ],
  },
  {
    name: 'Enterprise',
    tag: 'Multi-branch & warehouses',
    popular: false,
    cta: 'Request Enterprise Quote',
    core: [
      'Full Ebenbiz ERP suite across unlimited branches',
      'Annual stock-taking & cycle count contract',
      'Hardware fleet deployment & AMC maintenance plan',
      'Dedicated account & implementation manager',
    ],
    more: [
      'Quarterly shrinkage & variance reconciliation packs',
      'Structured network, server & UPS power setup',
      'SLA-backed emergency on-site support',
      'Custom workflow & BOM manufacturing setup',
    ],
  },
];

function PackageCard({ p, expandedAll, onToggleAll }) {
  return (
    <div
      className={`card-hover relative overflow-hidden bg-white rounded-2xl border-2 p-7 flex flex-col h-full ${
        p.popular ? 'border-blue-500 shadow-xl shadow-blue-600/10' : 'border-blue-100 shadow-md'
      }`}
    >
      {p.popular && (
        <div className="absolute top-5 -right-10 rotate-45 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[10px] font-black uppercase tracking-wider py-1 px-12 shadow">
          Most Popular
        </div>
      )}
      <span className="text-[11px] font-extrabold uppercase tracking-widest text-amber-600">{p.tag}</span>
      <h3 className="font-display text-2xl font-extrabold text-slate-900 mt-1">{p.name} Package</h3>
      <p className="text-sm text-slate-500 mt-1 mb-5">Tailored quotation based on your scope</p>

      <ul className="space-y-2.5 text-sm text-slate-700 flex-1">
        {[...p.core, ...(expandedAll ? p.more : [])].map((f) => (
          <li key={f} className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 mt-0.5 text-emerald-600 shrink-0" />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={onToggleAll}
        className="mt-5 inline-flex items-center gap-1 text-xs font-bold text-blue-700 hover:text-blue-800 cursor-pointer self-start"
      >
        {expandedAll ? 'Show core features' : 'Compare all features (+4 more)'}
        <ChevronDown className={`w-4 h-4 transition-transform ${expandedAll ? 'rotate-180' : ''}`} />
      </button>

      <a
        href={wa(`Hello Ebenbiz Solutions, I'd like a quotation for the ${p.name} Package.`)}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-6 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold text-white ${
          p.popular ? 'bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-600/20' : 'bg-slate-900 hover:bg-slate-800'
        }`}
      >
        {p.cta} <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  );
}

export function Packages() {
  const [expandedAll, setExpandedAll] = useState(false);
  return (
    <section id="packages" className="scroll-mt-24 py-16 lg:py-20 bg-white border-t border-blue-100">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Our Packages" dark="Choose Your Business" accent="Package">
          Bundles of ERP software, hardware, and managed services — tailored to the size of your operation.
        </SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {PACKAGES.map((p) => (
            <PackageCard
              key={p.name}
              p={p}
              expandedAll={expandedAll}
              onToggleAll={() => setExpandedAll((prev) => !prev)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* 4. Why choose Ebenbiz - 2x2 benefits grid */
export function WhyChoose() {
  const items = [
    { icon: Headphones, title: 'Responsive Local Support', text: 'Real technicians on WhatsApp, phone, and email who understand Kenyan retail and operations.' },
    { icon: ShieldCheck, title: 'Genuine, Warranty-Backed Hardware', text: 'Every computer, printer, and POS device is commercial-grade and backed by manufacturer warranty.' },
    { icon: Truck, title: 'Nationwide Delivery & On-Site Visits', text: 'We deliver, install, train staff, and service equipment on-site across Kenya.' },
    { icon: Wrench, title: 'One Partner, End to End', text: 'ERP software, hardware, stock audits, and preventive maintenance from one accountable team.' },
  ];
  return (
    <section className="py-16 lg:py-20 bg-blue-50/40 bg-dot-subtle border-t border-blue-100">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Why Ebenbiz" dark="Benefits of Working" accent="With Us" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {items.map(({ icon: Icon, title, text }) => (
            <div key={title} className="card-hover bg-white rounded-2xl border border-blue-100 shadow-sm p-7 flex gap-5">
              <div className="w-14 h-14 shrink-0 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-500 text-white flex items-center justify-center shadow-md shadow-blue-600/20">
                <Icon className="w-7 h-7" />
              </div>
              <div>
                <h3 className="font-display text-lg font-extrabold text-slate-900">{title}</h3>
                <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 5. Offer banner */
export function OfferBanner() {
  return (
    <section className="py-14 bg-gradient-to-r from-blue-700 via-blue-600 to-emerald-600">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-slate-950 p-10 sm:p-14 text-center shadow-2xl border border-white/10">
          <div className="absolute top-6 -left-12 -rotate-45 bg-gradient-to-r from-pink-600 to-rose-500 text-white text-[11px] font-black uppercase tracking-widest py-1.5 px-14 shadow">
            Offer
          </div>
          <Gift className="w-10 h-10 text-amber-400 mx-auto mb-4" />
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Free ERP Demo & <span className="text-amber-400">Stock-Take Consultation</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            See Ebenbiz ERP running with your own products, and get a free assessment of how to cut stock losses.
          </p>
          <a
            href={wa('Hello Ebenbiz Solutions, I would like to claim the free ERP demo and stock-take consultation.')}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full border-2 border-dashed border-emerald-400 px-8 py-3.5 text-sm font-bold text-emerald-300 hover:bg-emerald-400 hover:text-slate-950"
          >
            Claim your free demo <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* 6. Team section */
const TEAM = [
  { name: 'Daniel Maina Muriithi', role: 'CEO & Founder', color: 'from-blue-600 to-blue-400', bio: 'Leads the vision, strategy and key client relationships at Ebenbiz.' },
  { name: 'Jane Njeri Muriithi', role: 'Social Media & Strategy', color: 'from-emerald-600 to-emerald-400', bio: 'Drives our brand, online presence and growth strategy.' },
  { name: 'Peter Kimani Kanithi', role: 'Finance & Accounting', color: 'from-amber-500 to-orange-400', bio: 'Oversees finance, accounting and business operations.' },
];

const initials = (n) =>
  n
    .split(' ')
    .filter((_, i, a) => i === 0 || i === a.length - 1)
    .map((w) => w[0])
    .join('');

export function Team() {
  return (
    <section id="team" className="scroll-mt-24 py-16 lg:py-20 bg-blue-50/40 border-t border-blue-100">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Leadership" dark="Meet the People Behind" accent="Ebenbiz">
          A dedicated team of ERP, hardware, and business operations specialists committed to your growth.
        </SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {TEAM.map((m) => (
            <div key={m.name} className="card-hover bg-white rounded-2xl border border-blue-100 shadow-sm p-7 text-center">
              <div
                className={`w-22 h-22 mx-auto rounded-full bg-gradient-to-br ${m.color} text-white text-2xl font-black font-display flex items-center justify-center ring-4 ring-blue-50 shadow-md`}
              >
                {initials(m.name)}
              </div>
              <h3 className="mt-4 font-display text-lg font-extrabold text-slate-900">{m.name}</h3>
              <div className="text-[11px] font-bold uppercase tracking-wider text-blue-600 mt-1">{m.role}</div>
              <p className="mt-2.5 text-xs sm:text-sm text-slate-500 leading-relaxed">{m.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 7. Testimonials (clean non-overlapping header + card layout)
   NOTE: names/quotes are sample content - replace with real customer feedback. */
const TESTIMONIALS = [
  {
    name: 'Wanjiru Kamau',
    role: 'Owner, Kamau Mini-Mart, Nairobi',
    color: 'bg-blue-600',
    text: 'Our stock counts used to take days and never matched. After the Ebenbiz audit and ERP setup, we finally know exactly what is on our shelves.',
  },
  {
    name: 'Kwame Mensah',
    role: 'Operations Manager, Mensah Wholesalers, Mombasa',
    color: 'bg-emerald-600',
    text: 'The POS kits arrived installed and tested, and the team trained my cashiers in one afternoon. Support on WhatsApp is always quick.',
  },
  {
    name: 'Amina Hassan',
    role: 'Director, Hassan Pharmacy, Eldoret',
    color: 'bg-amber-500',
    text: 'Expiry tracking and batch reports in the ERP saved us from costly write-offs. Their maintenance visits keep all our computers running smoothly.',
  },
  {
    name: 'Chinedu Okafor',
    role: 'Founder, Okafor Hardware & Building, Kisumu',
    color: 'bg-indigo-600',
    text: 'Ebenbiz migrated our Excel sheets into the ERP without losing a single record. Now I can see sales and stock from my phone.',
  },
  {
    name: 'Grace Achieng',
    role: 'Accountant, Achieng Supplies, Nakuru',
    color: 'bg-rose-600',
    text: 'The annual stock-taking contract gives us clean, reconciled numbers for our books every quarter. Professional and punctual.',
  },
  {
    name: 'Tendai Moyo',
    role: 'IT Lead, Moyo Logistics, Nairobi',
    color: 'bg-teal-600',
    text: 'Our office laptops, printers and network were a mess. Their maintenance plan means problems get fixed before they stop us working.',
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-24 py-16 lg:py-20 bg-white border-t border-blue-100">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Testimonials" dark="What Our Customers" accent="Say" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="card-hover bg-slate-50/70 rounded-2xl border border-blue-100 p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-xs font-bold text-slate-700">
                    <span className="flex text-amber-400">
                      {[0, 1, 2, 3, 4].map((i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </span>
                    <span className="ml-1 text-slate-500">5.0</span>
                  </div>
                  <Quote className="w-6 h-6 text-blue-200 shrink-0" />
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">“{t.text}”</p>
              </div>

              <div className="mt-5 pt-4 border-t border-blue-100/80 flex items-center gap-3">
                <div
                  className={`w-10 h-10 shrink-0 rounded-full ${t.color} text-white text-xs font-black flex items-center justify-center shadow-sm`}
                >
                  {initials(t.name)}
                </div>
                <div className="min-w-0">
                  <div className="font-bold text-sm text-slate-900 truncate">{t.name}</div>
                  <div className="text-[11px] text-slate-500 truncate">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 8. Rich footer + consolidated bottom-right floating action dock */
export function Footer({ Logo }) {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const col = 'space-y-2.5';
  const link = 'hover:text-amber-400 transition-colors';
  const head = 'text-xs font-black uppercase tracking-widest text-white mb-4';

  return (
    <>
      <footer className="bg-slate-950 text-slate-400 border-t border-blue-900 text-sm">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-2 lg:grid-cols-12 gap-10">
          <div className="col-span-2 lg:col-span-4 space-y-4">
            {Logo}
            <p className="text-xs leading-relaxed max-w-sm">
              ERP software, computers & POS hardware, stock-taking contracts, and IT maintenance — one partner for your
              whole business operation.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <a
                href={wa('Hello Ebenbiz Solutions, I have an inquiry.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-600/20 border border-emerald-500/30 text-[11px] font-bold text-emerald-300 hover:bg-emerald-600 hover:text-white"
              >
                <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
              </a>
              <a
                href="tel:+254719620443"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-800 text-[11px] font-bold text-slate-200 hover:bg-blue-600 hover:text-white"
              >
                <Phone className="w-3.5 h-3.5" /> Call Us
              </a>
              <a
                href="mailto:info@ebenbiz.co.ke"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-800 text-[11px] font-bold text-slate-200 hover:bg-blue-600 hover:text-white"
              >
                <Mail className="w-3.5 h-3.5" /> Email
              </a>
            </div>
          </div>

          <div className={`lg:col-span-2 ${col}`}>
            <h4 className={head}>Solutions</h4>
            <a className={`block ${link}`} href="#erp">Ebenbiz ERP</a>
            <a className={`block ${link}`} href="#hardware">Computers & POS</a>
            <a className={`block ${link}`} href="#inventory">Stock-Taking</a>
            <a className={`block ${link}`} href="#maintenance">Maintenance</a>
          </div>

          <div className={`lg:col-span-2 ${col}`}>
            <h4 className={head}>Company</h4>
            <a className={`block ${link}`} href="#industries">Industries</a>
            <a className={`block ${link}`} href="#packages">Packages</a>
            <a className={`block ${link}`} href="#team">Our Team</a>
            <a className={`block ${link}`} href="#testimonials">Testimonials</a>
            <a className={`block ${link}`} href="#faq">FAQ</a>
            <a className={`block ${link}`} href="#contact">Request a Quote</a>
          </div>

          <div className={`col-span-2 lg:col-span-4 ${col}`}>
            <h4 className={head}>Contact Info</h4>
            <a className="flex items-center gap-2.5 hover:text-white" href="tel:+254719620443">
              <Phone className="w-4 h-4 text-emerald-400" /> +254 719 620 443
            </a>
            {['sales', 'support', 'info'].map((n) => (
              <a key={n} className="flex items-center gap-2.5 hover:text-white" href={`mailto:${n}@ebenbiz.co.ke`}>
                <Mail className="w-4 h-4 text-blue-400" /> {n}@ebenbiz.co.ke
              </a>
            ))}
            <span className="flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" /> Kenya — nationwide delivery & on-site support
            </span>
          </div>
        </div>

        {/* Extra bottom clearance so floating dock never overlaps copyright text */}
        <div className="border-t border-slate-800 pb-44 sm:pb-10">
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pt-5 pb-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-500 text-center sm:text-left">
            <span>© {new Date().getFullYear()} Ebenbiz Solutions. All rights reserved.</span>
            <span className="sm:pr-44">ERP Software • Computers & Printers • Stock-Taking • Hardware Maintenance</span>
          </div>
        </div>
      </footer>

      {/* Single Consolidated Bottom-Right Floating Action Dock */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2.5">
        {showTop && (
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            title="Back to top"
            className="w-10 h-10 rounded-full bg-slate-900/90 hover:bg-slate-800 text-white border border-slate-700 shadow-lg flex items-center justify-center cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}
        <a
          href="tel:+254719620443"
          aria-label="Call Ebenbiz Solutions"
          title="Call Ebenbiz: +254 719 620 443"
          className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-white hover:bg-blue-50 text-blue-700 border border-blue-200 text-xs font-bold shadow-lg"
        >
          <Phone className="w-4 h-4" />
          <span className="hidden sm:inline">Call Us</span>
        </a>
        <a
          href="https://wa.me/254719620443?text=Hello%20Ebenbiz%20Solutions,%20I%20have%20an%20inquiry%20regarding%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          title="Chat on WhatsApp (+254 719 620 443)"
          className="wa-pulse flex items-center gap-2 px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-full shadow-xl shadow-emerald-600/35"
        >
          <MessageCircle className="w-5 h-5 fill-white" />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>
      </div>
    </>
  );
}
