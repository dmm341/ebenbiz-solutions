import React, { useState } from 'react';
import {
  ShoppingCart,
  BookOpen,
  Boxes,
  Factory,
  Truck,
  Users,
  MapPin,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Laptop,
  Printer,
  Monitor,
  ScanBarcode,
  ClipboardCheck,
  Wrench,
  Cpu,
  HardDrive,
  RefreshCw,
  Award,
  Phone,
  Mail,
  Clock,
  ChevronRight,
  ChevronDown,
  HelpCircle,
  Menu,
  X,
  Layers,
  BadgeCheck,
  Settings,
  FileCheck2
} from 'lucide-react';

/**
 * Ebenbiz Solutions Logo Component
 * Uses the exact 3D 'E' emblem from /logo.jpg and replaces 'ERP' with 'SOLUTIONS'
 */
function EbenbizSolutionsLogo({ size = 'md' }) {
  const isLarge = size === 'lg';
  return (
    <div className={`inline-flex items-center ${isLarge ? 'flex-col gap-3' : 'gap-3'}`}>
      {/* Cropped 3D 'E' Emblem from original logo.jpg */}
      <div
        className={`relative overflow-hidden rounded-2xl shadow-md border border-blue-100 bg-white flex-shrink-0 ${
          isLarge ? 'w-24 h-24 rounded-3xl shadow-xl' : 'w-12 h-12'
        }`}
      >
        <img
          src="/logo.jpg"
          alt="Ebenbiz Solutions Emblem"
          className="w-full h-[175%] object-cover object-top scale-110"
        />
      </div>

      {/* Wordmark: ebenbiz — SOLUTIONS — */}
      <div className={isLarge ? 'text-center' : 'text-left'}>
        <div
          className={`font-black tracking-tight leading-none ${
            isLarge ? 'text-4xl sm:text-5xl' : 'text-2xl'
          }`}
        >
          <span className="text-[#070b3b]">eben</span>
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            biz
          </span>
        </div>
        <div className="flex items-center justify-center gap-1.5 mt-1">
          <span className="h-[2px] flex-1 bg-gradient-to-r from-indigo-600 to-blue-500 rounded-full min-w-[14px]" />
          <span
            className={`font-extrabold uppercase tracking-[0.22em] text-[#070b3b] ${
              isLarge ? 'text-xs sm:text-sm' : 'text-[9px]'
            }`}
          >
            SOLUTIONS
          </span>
          <span className="h-[2px] flex-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full min-w-[14px]" />
        </div>
      </div>
    </div>
  );
}

const FOUR_PILLARS = [
  {
    id: 'erp',
    badge: 'Flagship Software Product',
    title: 'Ebenbiz ERP System',
    shortTitle: '1. Ebenbiz ERP',
    icon: Layers,
    accent: 'blue',
    headline: 'Complete Multi-Branch POS, Inventory, Manufacturing & Automated Accounting',
    description:
      'Our flagship business management software engineered for retail chains, wholesalers, manufacturers, and service organizations. Connects your counter sales, stock control, supplier procurement, and double-entry financial ledgers in real time.',
    highlights: [
      'Smart Point of Sale (POS) with Cash, M-Pesa, Bank, Card & Store Credit split payments + Offline Sync',
      'Automated Double-Entry Accounting with 52+ standard Chart of Accounts, Trial Balance, P&L & Balance Sheet',
      'Multi-Branch & Warehouse Inventory with Goods-in-Transit transfers and per-location ledger mapping',
      'POS-Style Supplier Invoice entry with live Buying/Selling catalog price updates and saved drafts',
      'Bill of Materials (BOM), Work Orders, Assembly production runs & Recurring Service billing'
    ],
    stats: [
      { label: 'Chart of Accounts', val: '52+ Pre-Seeded' },
      { label: 'Auto-Posting Hooks', val: '13 Real-Time' },
      { label: 'POS Continuity', val: '100% Offline-Ready' }
    ]
  },
  {
    id: 'hardware',
    badge: 'IT & POS Equipment Supply',
    title: 'Hardware & POS Equipment',
    shortTitle: '2. Computers & Hardware',
    icon: Laptop,
    accent: 'gold',
    headline: 'Enterprise Computers, Laptops, Thermal Printers & Complete POS Hardware Kits',
    description:
      'We supply, configure, and deploy reliable commercial-grade hardware tailored for front-office checkouts, back-office accounting teams, and warehouse operations.',
    highlights: [
      'Business Laptops & Desktop Workstations (HP, Dell, Lenovo — Core i5/i7, SSD-equipped)',
      'High-Speed Thermal Receipt Printers (80mm USB / LAN / Bluetooth) & Label/Barcode Printers',
      '1D/2D Wireless & Countertop Barcode Scanners + Heavy-Duty Metal Cash Drawers',
      'All-in-One Touch POS Terminals, Customer Pole Displays & Uninterruptible Power Supplies (UPS)',
      'Office LaserJet/InkTank Printers, Routers, Switches & Structured Local Area Networking'
    ],
    stats: [
      { label: 'POS Plug & Play', val: 'Pre-Configured' },
      { label: 'Warranty Support', val: 'Genuine Units' },
      { label: 'Deployment', val: 'On-Site Setup' }
    ]
  },
  {
    id: 'inventory-services',
    badge: 'Field Audits & Managed Contracts',
    title: 'Inventory & Stock-Taking Services',
    shortTitle: '3. Stock Taking & Contracts',
    icon: ClipboardCheck,
    accent: 'green',
    headline: 'Professional Physical Stock Taking, Audits & Contract Inventory Management',
    description:
      'Eliminate stock shrinkage, dead stock, and book-to-physical discrepancies. Our trained inventory audit teams conduct independent physical counts and provide ongoing contract inventory management.',
    highlights: [
      'End-to-End Physical Stock-Taking Audits for supermarkets, hardware stores, pharmacies & warehouses',
      'Long-Term Contract Inventory Management: scheduled monthly/quarterly counts & continuous controls',
      'Complete SKU Categorization, Barcode Generation, Shelf Labeling & Master Catalog Clean-Up',
      'Detailed Variance & Shrinkage Reconciliation Reports (Physical Count vs System Valuation)',
      ' SOP Design for Goods Receiving (GRN), Inter-Branch Dispatch, and Warehouse Bin Organization'
    ],
    stats: [
      { label: 'Audit Accuracy', val: '99.9% Verified' },
      { label: 'Engagement Modes', val: 'One-Off or Contract' },
      { label: 'Reporting', val: 'Full Variance Pack' }
    ]
  },
  {
    id: 'maintenance',
    badge: 'Preventive & Corrective Care',
    title: 'Hardware Maintenance & IT Care',
    shortTitle: '4. Hardware Maintenance',
    icon: Wrench,
    accent: 'blue',
    headline: 'Computer Cleaning, Preventive Servicing, Repairs & Annual Maintenance Contracts',
    description:
      'Keep your computers, laptops, and POS printers running at peak speed and extend hardware lifespan. We provide deep physical cleaning, thermal servicing, component upgrades, and rapid repair response.',
    highlights: [
      'Deep Ultrasonic & Air-Blower Computer/Laptop Cleaning (dust removal, fan servicing & thermal paste renewal)',
      'Thermal Receipt Printer & Office Printer Maintenance (printhead cleaning, roller & cutter servicing)',
      'Annual Maintenance Contracts (AMC) with scheduled quarterly preventive visits & priority emergency callouts',
      'SSD & RAM Performance Upgrades, OS Tune-Ups, Antivirus Protection & Data Recovery',
      'POS Counter Cable Management, Power Protection Audits & Network Troubleshooting'
    ],
    stats: [
      { label: 'Preventive Care', val: 'Quarterly / Monthly' },
      { label: 'Downtime Reduction', val: 'Up to 85%' },
      { label: 'SLA Support', val: 'On-Site & Remote' }
    ]
  }
];

const HARDWARE_CATALOG = [
  {
    category: 'Computers & Laptops',
    icon: Laptop,
    tag: 'Office & Executive',
    items: [
      'Business Laptops (Core i5 / i7, 16GB RAM, NVMe SSD)',
      'Complete Desktop PC Sets with 22"–24" IPS Monitors',
      'Mini-PCs & All-in-One Counter Workstations',
      'External Hard Drives, SSDs, RAM & Power Adapters'
    ]
  },
  {
    category: 'POS & Retail Peripherals',
    icon: Printer,
    tag: 'Retail & Hospitality',
    items: [
      '80mm Auto-Cutter Thermal Receipt Printers (USB/Ethernet)',
      '1D & 2D Omnidirectional & Wireless Barcode Scanners',
      'Heavy-Duty 5-Note / 8-Coin RJ11 Cash Drawers',
      'Thermal Barcode Label Printers & Receipt Paper Rolls'
    ]
  },
  {
    category: 'Office Printers & Power',
    icon: Monitor,
    tag: 'Back-Office & Warehouse',
    items: [
      'High-Volume Duplex Laser & InkTank Multifunction Printers',
      'Line-Interactive UPS Backup Units (650VA – 3000VA)',
      'Gigabit Switches, Dual-Band Wi-Fi Access Points & Cabling',
      ' surge Protectors, Toners, Ink Cartridges & Spares'
    ]
  }
];

const FAQS = [
  {
    q: 'Can we engage Ebenbiz Solutions for Stock Taking or Hardware Maintenance even if we do not use Ebenbiz ERP?',
    a: 'Absolutely! Our 4 divisions operate both independently and together. You can hire our team strictly for Physical Stock-Taking Contracts, Computer Cleaning & Maintenance, or Hardware Supply, or bundle them with Ebenbiz ERP.'
  },
  {
    q: 'How do your Inventory Management & Stock-Taking Contracts work?',
    a: 'We offer both one-off physical stock audits and recurring contracts (monthly, quarterly, or bi-annual). Our team comes on-site with barcode scanners, counts and verifies all stock, reconciles variances against your records, and delivers a signed valuation and shrinkage report.'
  },
  {
    q: 'What is included in a Computer & Hardware Maintenance Contract (AMC)?',
    a: 'Our maintenance packages include scheduled physical blowing and deep cleaning of desktops/laptops, thermal paste replacement, printer printhead/roller servicing, OS optimization, antivirus checks, and priority on-site repair whenever a breakdown occurs.'
  },
  {
    q: 'Do you supply and set up complete POS hardware alongside Ebenbiz ERP?',
    a: 'Yes. We supply laptops, desktops, touch POS terminals, thermal printers, barcode scanners, and cash drawers, pre-install and configure Ebenbiz ERP, and train your cashiers and accountants on-site.'
  }
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activePillarId, setActivePillarId] = useState('erp');
  const [openFaqIdx, setOpenFaqIdx] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    organization: '',
    phone: '',
    service: 'Complete Package (ERP + Hardware + Services)',
    message: ''
  });

  const activePillar = FOUR_PILLARS.find((p) => p.id === activePillarId) || FOUR_PILLARS[0];

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Top Accent Ribbon (Blue, Gold & Green touch) */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 text-white text-xs py-2 px-4 border-b border-amber-400/30">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 font-medium">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>
              <strong className="text-amber-300">Ebenbiz Solutions:</strong> Enterprise ERP Software • Computers & POS Hardware • Stock-Taking Contracts • IT Maintenance
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-[11px] text-blue-100">
            <span className="flex items-center gap-1">
              <BadgeCheck className="w-3.5 h-3.5 text-amber-300" /> Nationwide Delivery & On-Site Support
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-blue-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="focus:outline-none">
            <EbenbizSolutionsLogo size="md" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
            <a href="#solutions" className="hover:text-blue-600 transition-colors">Our Solutions</a>
            <a href="#erp" className="hover:text-blue-600 transition-colors">Ebenbiz ERP</a>
            <a href="#hardware" className="hover:text-blue-600 transition-colors">Computers & Hardware</a>
            <a href="#inventory" className="hover:text-blue-600 transition-colors">Inventory Services</a>
            <a href="#maintenance" className="hover:text-blue-600 transition-colors">Hardware Maintenance</a>
            <a href="#faq" className="hover:text-blue-600 transition-colors">FAQ</a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-xl text-sm font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/20 transition-all flex items-center gap-2 border-b-2 border-amber-400"
            >
              Request a Quote / Demo
              <ArrowRight className="w-4 h-4 text-amber-300" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl border border-blue-100 text-blue-900 hover:bg-blue-50"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-blue-100 px-4 py-5 space-y-3 shadow-xl">
            <a href="#solutions" onClick={() => setMobileMenuOpen(false)} className="block py-2 font-semibold text-slate-800">Our Solutions</a>
            <a href="#erp" onClick={() => setMobileMenuOpen(false)} className="block py-2 font-semibold text-slate-800">Ebenbiz ERP Software</a>
            <a href="#hardware" onClick={() => setMobileMenuOpen(false)} className="block py-2 font-semibold text-slate-800">Computers & POS Hardware</a>
            <a href="#inventory" onClick={() => setMobileMenuOpen(false)} className="block py-2 font-semibold text-slate-800">Stock Taking & Inventory Contracts</a>
            <a href="#maintenance" onClick={() => setMobileMenuOpen(false)} className="block py-2 font-semibold text-slate-800">Computer & Hardware Maintenance</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="block py-2 font-semibold text-slate-800">FAQ</a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full py-3 rounded-xl text-center font-bold bg-blue-600 text-white shadow-md"
            >
              Request a Quote or Consultation
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="hero-mesh pt-12 pb-20 lg:pt-16 lg:pb-24 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Hero Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-amber-300/80 text-blue-800 text-xs font-bold shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>COMPLETE TECHNOLOGY, HARDWARE & INVENTORY PARTNER</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.12]">
                Empowering Businesses with{' '}
                <span className="text-blue-600">Smart ERP</span>,{' '}
                <span className="underline decoration-amber-400 decoration-4 underline-offset-4">
                  Quality Hardware
                </span>{' '}
                & <span className="text-emerald-600">Managed Inventory</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                <strong>Ebenbiz Solutions</strong> is your end-to-end business technology partner. We build the powerful{' '}
                <strong className="text-blue-700">Ebenbiz ERP</strong> platform, supply commercial{' '}
                <strong className="text-slate-800">computers, laptops & POS printers</strong>, execute professional{' '}
                <strong className="text-emerald-700">stock-taking & inventory management contracts</strong>, and keep your equipment running through{' '}
                <strong className="text-slate-800">preventive hardware maintenance</strong>.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#solutions"
                  className="px-7 py-4 rounded-2xl font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-600/20 transition-all flex items-center gap-2 text-sm sm:text-base border-b-2 border-amber-400"
                >
                  Explore Our 4 Core Solutions
                  <ArrowRight className="w-5 h-5 text-amber-300" />
                </a>
                <a
                  href="#contact"
                  className="px-7 py-4 rounded-2xl font-bold bg-white hover:bg-blue-50 text-blue-900 border-2 border-blue-200 transition-all text-sm sm:text-base"
                >
                  Request a Quote / Audit
                </a>
              </div>

              {/* Trust Strip */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { title: 'Ebenbiz ERP', sub: 'POS, Stock & Accounting', color: 'border-l-4 border-l-blue-600' },
                  { title: 'IT & POS Hardware', sub: 'Laptops, PCs & Printers', color: 'border-l-4 border-l-amber-400' },
                  { title: 'Inventory Services', sub: 'Stock Taking & Contracts', color: 'border-l-4 border-l-emerald-500' },
                  { title: 'IT Maintenance', sub: 'Cleaning & AMC Support', color: 'border-l-4 border-l-blue-500' }
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`bg-white p-3.5 rounded-xl border border-blue-100 shadow-sm ${item.color}`}
                  >
                    <div className="font-extrabold text-xs sm:text-sm text-slate-900">{item.title}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">{item.sub}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Brand Card & 4-Division Overview */}
            <div className="lg:col-span-5">
              <div className="glass-surface rounded-3xl p-7 sm:p-8 border-2 border-blue-100 relative overflow-hidden">
                {/* Soft Gold & Green corner accents */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-amber-400/15 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-emerald-500/15 rounded-full blur-2xl pointer-events-none" />

                <div className="text-center pb-6 border-b border-blue-100">
                  <EbenbizSolutionsLogo size="lg" />
                  <p className="mt-3 text-xs font-semibold text-slate-500">
                    One Trusted Organization • Four Specialized Business Divisions
                  </p>
                </div>

                <div className="mt-6 space-y-3">
                  {FOUR_PILLARS.map((pillar) => {
                    const Icon = pillar.icon;
                    return (
                      <a
                        key={pillar.id}
                        href={`#${pillar.id}`}
                        onClick={() => setActivePillarId(pillar.id)}
                        className="flex items-center justify-between p-3.5 rounded-2xl bg-blue-50/60 hover:bg-blue-600 group transition-all border border-blue-100"
                      >
                        <div className="flex items-center gap-3.5">
                          <div className="w-10 h-10 rounded-xl bg-white text-blue-600 flex items-center justify-center shadow-sm font-bold">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-sm font-extrabold text-slate-900 group-hover:text-white transition-colors">
                              {pillar.title}
                            </div>
                            <div className="text-[11px] text-slate-500 group-hover:text-blue-100 transition-colors">
                              {pillar.badge}
                            </div>
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-blue-600 group-hover:text-amber-300 transition-colors" />
                      </a>
                    );
                  })}
                </div>

                <div className="mt-6 pt-4 border-t border-blue-100 flex items-center justify-between text-xs">
                  <span className="font-bold text-emerald-700 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Tailored for SMEs & Enterprises
                  </span>
                  <span className="font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                     ★ Quality Guaranteed
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive 4 Pillars Explorer */}
      <section id="solutions" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="px-3.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-xs font-extrabold uppercase tracking-wider">
              What We Offer
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-black text-slate-900">
              Four Integrated Pillars Under{' '}
              <span className="text-blue-600">Ebenbiz Solutions</span>
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Select any division below to explore how we equip, automate, audit, and maintain your business operations.
            </p>
          </div>

          {/* Pillar Selector Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
            {FOUR_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              const isSelected = activePillarId === pillar.id;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActivePillarId(pillar.id)}
                  className={`p-4 rounded-2xl text-left transition-all cursor-pointer border-2 flex items-center gap-3.5 ${
                    isSelected
                      ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-600/20'
                      : 'bg-slate-50 hover:bg-blue-50/60 text-slate-800 border-blue-100'
                  }`}
                >
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      isSelected ? 'bg-white/20 text-amber-300' : 'bg-blue-100 text-blue-700'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-extrabold uppercase tracking-wider opacity-80">
                      {pillar.shortTitle}
                    </div>
                    <div className="font-bold text-sm leading-snug mt-0.5">{pillar.title}</div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Pillar Spotlight Card */}
          <div className="rounded-3xl bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 text-white p-8 sm:p-12 shadow-2xl border border-blue-800">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs font-bold">
                  <activePillar.icon className="w-3.5 h-3.5" />
                  {activePillar.badge}
                </div>
                <h3 className="text-2xl sm:text-3xl font-black leading-tight">
                  {activePillar.headline}
                </h3>
                <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
                  {activePillar.description}
                </p>
                <ul className="space-y-3 pt-2">
                  {activePillar.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-blue-50">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-5 space-y-4">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 space-y-4">
                  <div className="text-xs font-bold uppercase tracking-widest text-amber-300">
                    Key Division Highlights
                  </div>
                  <div className="grid grid-cols-1 gap-3">
                    {activePillar.stats.map((st, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-slate-950/60 border border-blue-800/60 flex items-center justify-between"
                      >
                        <span className="text-xs text-blue-200 font-medium">{st.label}</span>
                        <span className="text-sm font-black text-emerald-400">{st.val}</span>
                      </div>
                    ))}
                  </div>
                  <a
                    href="#contact"
                    onClick={() =>
                      setInquiryForm((prev) => ({ ...prev, service: activePillar.title }))
                    }
                    className="w-full py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm flex items-center justify-center gap-2 transition-all shadow-lg"
                  >
                    Inquire About {activePillar.title}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep-Dive Section 1: Ebenbiz ERP Product */}
      <section id="erp" className="py-20 bg-blue-50/50 border-t border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-extrabold uppercase tracking-wider">
                Product 01 • Business Software
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-black text-slate-900">
                Ebenbiz ERP — Built for Total Operational Control
              </h2>
            </div>
            <p className="text-sm text-slate-600 max-w-md">
              Our in-house ERP platform unifies front-office POS checkouts, multi-branch inventory, manufacturing recipes, and automated double-entry accounting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: ShoppingCart,
                title: 'Smart POS & Offline Sync',
                desc: 'Accept Cash, M-Pesa, Bank Transfer, Cheque, Credit Card & Store Credit in a single split checkout. Continues operating offline and syncs automatically.'
              },
              {
                icon: BookOpen,
                title: 'Automated Double-Entry Accounting',
                desc: '52+ baseline Chart of Accounts shared across all branches. Every sale, invoice, payment, GRN, and stock adjustment auto-posts balanced Debit & Credit entries.'
              },
              {
                icon: Truck,
                title: 'POS-Style Supplier Invoicing',
                desc: 'Search items into a purchase cart, enter quantities, update Buying (cost) and Selling (retail) prices simultaneously, or save supplier bills as drafts.'
              },
              {
                icon: Boxes,
                title: 'Multi-Branch & Warehouse Control',
                desc: 'Track stock across unlimited retail stores and warehouses, manage Goods-in-Transit transfers, and map every branch to its default financial accounts.'
              },
              {
                icon: Factory,
                title: 'Work Orders & Bill of Materials',
                desc: 'Create multi-component recipes for Assembly & Linked items, mark raw materials as Not-For-Sale, print Material Requisitions, and track material usage.'
              },
              {
                icon: Users,
                title: 'Customer Hub & Recurring Billing',
                desc: 'Manage B2B/B2C customer statements, quotations, bulk invoice payment allocations, customer credit notes, and automated recurring service contracts.'
              }
            ].map((mod, idx) => {
              const Icon = mod.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-blue-100 shadow-sm hover:shadow-md hover:border-blue-300 transition-all"
                >
                  <div className="w-11 h-11 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-4 shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900 mb-2">{mod.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{mod.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Deep-Dive Section 2: Computers, Laptops, Printers & POS Hardware */}
      <section id="hardware" className="py-20 bg-white border-t border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="px-3.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-300 text-xs font-extrabold uppercase tracking-wider">
              Product 02 • IT & POS Hardware Supply
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-black text-slate-900">
              Computers, Laptops, Printers & Retail POS Hardware
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Whether you are setting up a new retail checkout counter, upgrading office laptops, or equipping a warehouse, Ebenbiz Solutions supplies genuine, warranty-backed hardware.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {HARDWARE_CATALOG.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <div
                  key={idx}
                  className="rounded-3xl p-7 bg-slate-50 border-2 border-blue-100 flex flex-col justify-between hover:border-blue-500 transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-md">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-amber-100 text-amber-800 border border-amber-300">
                        {cat.tag}
                      </span>
                    </div>
                    <h3 className="text-xl font-extrabold text-slate-900 mb-4">{cat.category}</h3>
                    <ul className="space-y-3">
                      {cat.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="#contact"
                    onClick={() =>
                      setInquiryForm((prev) => ({
                        ...prev,
                        service: `Hardware Supply: ${cat.category}`
                      }))
                    }
                    className="mt-7 w-full py-3 rounded-xl bg-white hover:bg-blue-600 text-blue-700 hover:text-white font-bold text-xs sm:text-sm border border-blue-200 text-center transition-colors"
                  >
                    Request Hardware Price List →
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Deep-Dive Section 3 & 4: Inventory Services + Hardware Maintenance */}
      <section className="py-20 bg-gradient-to-b from-blue-50/60 to-white border-t border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Service 3: Stock Taking & Inventory Management Contracts */}
          <div
            id="inventory"
            className="rounded-3xl bg-white p-8 sm:p-12 border-2 border-emerald-500/30 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
          >
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-extrabold uppercase">
                <ClipboardCheck className="w-4 h-4 text-emerald-600" />
                Service 03 • Inventory Audits & Managed Contracts
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                Professional Stock-Taking & Contract Inventory Management
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Don’t let unrecorded losses, pilferage, or messy stockrooms eat into your profits. Ebenbiz Solutions deploys experienced stock auditors to count, barcode, reconcile, and manage your inventory under flexible one-off or annual contracts.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  'Independent Physical Stock Counts & Verification',
                  'Monthly / Quarterly Contract Inventory Management',
                  'Variance Analysis (Physical vs Book Stock)',
                  'Barcode Tagging, SKU Setup & Shelf Organization',
                  'Goods Receiving & Dispatch Control Audits',
                  'Signed Executive Valuation & Shrinkage Reports'
                ].map((pt, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-800 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-emerald-950 text-white rounded-2xl p-6 sm:p-7 space-y-4 border border-emerald-800">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                  Contract & Audit Options
                </span>
                <FileCheck2 className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="space-y-3 text-xs">
                <div className="p-3.5 rounded-xl bg-white/10 border border-white/10">
                  <div className="font-bold text-sm text-white">1. One-Off Physical Stock Take</div>
                  <p className="text-emerald-100 mt-1">
                    Ideal for year-end audits, store handovers, or initial ERP onboarding. Overnight or weekend execution with zero sales disruption.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-white/10 border border-white/10">
                  <div className="font-bold text-sm text-amber-300">2. Outsourced Inventory Management Contract</div>
                  <p className="text-emerald-100 mt-1">
                    Scheduled monthly/quarterly cycle counts, random spot checks, GRN verification, and continuous shrinkage control.
                  </p>
                </div>
              </div>
              <a
                href="#contact"
                onClick={() =>
                  setInquiryForm((prev) => ({
                    ...prev,
                    service: 'Inventory Services / Stock-Taking Contract'
                  }))
                }
                className="block w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-center text-xs sm:text-sm transition-colors"
              >
                Book a Stock-Taking Assessment
              </a>
            </div>
          </div>

          {/* Service 4: Computer & Hardware Maintenance */}
          <div
            id="maintenance"
            className="rounded-3xl bg-white p-8 sm:p-12 border-2 border-blue-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
          >
            <div className="lg:col-span-5 order-2 lg:order-1 bg-blue-950 text-white rounded-2xl p-6 sm:p-7 space-y-4 border border-blue-800">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                  Maintenance Checklist
                </span>
                <Wrench className="w-5 h-5 text-amber-400" />
              </div>
              <div className="space-y-2.5 text-xs">
                {[
                  { task: 'Internal Dust Blowing & Ultrasonic Cleaning', freq: 'Every Quarter' },
                  { task: 'CPU Fan & Heatsink Thermal Paste Renewal', freq: 'Every 6 Months' },
                  { task: 'POS Thermal Printer Head & Roller Servicing', freq: 'Every Quarter' },
                  { task: 'OS Health, Antivirus & Disk Speed Optimization', freq: 'Monthly / Quarterly' },
                  { task: 'Power Backup (UPS) & Network Cable Audit', freq: 'Every Quarter' }
                ].map((row, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-white/10 border border-white/10 flex items-center justify-between gap-2"
                  >
                    <span className="font-semibold text-white">{row.task}</span>
                    <span className="px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 font-bold text-[10px] whitespace-nowrap">
                      {row.freq}
                    </span>
                  </div>
                ))}
              </div>
              <a
                href="#contact"
                onClick={() =>
                  setInquiryForm((prev) => ({
                    ...prev,
                    service: 'Hardware Maintenance & Computer Cleaning'
                  }))
                }
                className="block w-full py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-center text-xs sm:text-sm transition-colors"
              >
                Schedule Hardware Servicing
              </a>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-xs font-extrabold uppercase">
                <Settings className="w-4 h-4 text-blue-600" />
                Service 04 • Preventive & Corrective IT Care
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                Computer Cleaning, Printer Servicing & Annual Maintenance Contracts
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Dust buildup, overheating, and worn printer rollers are the #1 cause of sudden office and POS counter breakdowns. Our technicians perform thorough on-site physical computer cleaning, thermal maintenance, and rapid hardware repairs.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  'Deep Desktop & Laptop Physical Cleaning',
                  'Overheating Prevention & Fan/Thermal Servicing',
                  'POS Receipt & Office Printer Repair & Calibration',
                  'SSD & RAM Upgrades for Slow Computers',
                  'Annual Maintenance Contracts (AMC) for Offices',
                  'Emergency On-Site & Remote IT Troubleshooting'
                ].map((pt, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-800 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-white border-t border-blue-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-extrabold uppercase tracking-wider">
              Frequently Asked Questions
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-black text-slate-900">
              Everything You Need to Know About Ebenbiz Solutions
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((item, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-blue-100 bg-slate-50/70 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaqIdx(isOpen ? -1 : idx)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 cursor-pointer hover:bg-blue-50/50 transition-colors"
                  >
                    <span className="flex items-center gap-2.5">
                      <HelpCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      {item.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform ${
                        isOpen ? 'rotate-180 text-blue-600' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-3 text-xs sm:text-sm text-slate-600 leading-relaxed bg-white border-t border-blue-100">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact / Quote Request Section */}
      <section id="contact" className="py-20 bg-blue-50/50 border-t border-blue-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-blue-100 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5 space-y-5">
              <EbenbizSolutionsLogo size="md" />
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 pt-2">
                Let’s Power Your Business Operations
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Request an <strong>Ebenbiz ERP</strong> demo, get a quotation for{' '}
                <strong>computers & POS hardware</strong>, book a{' '}
                <strong>physical stock-taking audit</strong>, or schedule{' '}
                <strong>computer maintenance</strong>.
              </p>

              <div className="space-y-3 pt-2 text-xs sm:text-sm">
                <div className="flex items-center gap-2.5 text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span>Ebenbiz ERP Software Implementation</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-amber-500" />
                  <span>Laptops, Computers, Printers & POS Kits</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Stock-Taking Audits & Inventory Contracts</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span>Computer Cleaning & Hardware Maintenance</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              {formSubmitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border-2 border-emerald-200 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h3 className="text-xl font-bold text-slate-900">
                    Inquiry Received!
                  </h3>
                  <p className="text-sm text-slate-600">
                    Thank you, <strong>{inquiryForm.name}</strong>! Our <strong>Ebenbiz Solutions</strong> team will contact{' '}
                    <strong>{inquiryForm.organization}</strong> at <strong>{inquiryForm.phone}</strong> regarding{' '}
                    <span className="font-semibold text-blue-700">{inquiryForm.service}</span>.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-blue-600 text-white cursor-pointer"
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={inquiryForm.name}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })}
                        placeholder="e.g. David Mwangi"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-blue-200 text-sm focus:ring-2 focus:ring-blue-600 focus:bg-white outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                        Business / Organization *
                      </label>
                      <input
                        type="text"
                        required
                        value={inquiryForm.organization}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, organization: e.target.value })}
                        placeholder="e.g. Prime Mart Supermarket"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-blue-200 text-sm focus:ring-2 focus:ring-blue-600 focus:bg-white outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={inquiryForm.phone}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, phone: e.target.value })}
                        placeholder="+254 7XX XXX XXX"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-blue-200 text-sm focus:ring-2 focus:ring-blue-600 focus:bg-white outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                        Product or Service Needed *
                      </label>
                      <select
                        value={inquiryForm.service}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, service: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-blue-200 text-sm focus:ring-2 focus:ring-blue-600 focus:bg-white outline-none font-medium"
                      >
                        <option>Complete Package (ERP + Hardware + Services)</option>
                        <option>Ebenbiz ERP Software</option>
                        <option>Hardware Supply (Laptops, Computers, Printers, POS)</option>
                        <option>Inventory Services / Stock-Taking Contract</option>
                        <option>Hardware Maintenance & Computer Cleaning</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Tell Us About Your Requirements
                    </label>
                    <textarea
                      rows={3}
                      value={inquiryForm.message}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, message: e.target.value })}
                      placeholder="Specify number of branches, hardware units needed, stock-taking dates, or computer maintenance scope..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-blue-200 text-sm focus:ring-2 focus:ring-blue-600 focus:bg-white outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20 border-b-2 border-amber-400 transition-all cursor-pointer"
                  >
                    Submit Inquiry to Ebenbiz Solutions
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-950 text-slate-400 border-t border-blue-900 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl overflow-hidden bg-white p-0.5">
              <img
                src="/logo.jpg"
                alt="Ebenbiz Solutions"
                className="w-full h-[175%] object-cover object-top scale-110"
              />
            </div>
            <div>
              <span className="font-black text-base text-white tracking-tight">
                eben<span className="text-blue-400">biz</span>{' '}
                <span className="text-[10px] uppercase tracking-widest text-amber-400 font-bold ml-1">
                  SOLUTIONS
                </span>
              </span>
              <p className="text-[11px] text-slate-500">
                ERP Software • Computers & Printers • Stock-Taking Contracts • Hardware Maintenance
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-slate-300 font-medium">
            <a href="#erp" className="hover:text-amber-400 transition-colors">Ebenbiz ERP</a>
            <a href="#hardware" className="hover:text-amber-400 transition-colors">Hardware</a>
            <a href="#inventory" className="hover:text-emerald-400 transition-colors">Inventory Services</a>
            <a href="#maintenance" className="hover:text-amber-400 transition-colors">Maintenance</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
