<script setup lang="ts">
const lines = [
  { item: 'GA 11 WUX Compressor — Maint Kit', qty: 1 },
  { item: 'Filter Separator Kit', qty: 1 },
  { item: 'V Belt Kit', qty: 1 },
  { item: 'Set of Wearing', qty: 1 },
  { item: 'Ultra Oil', qty: 2 },
  { item: 'Labour & Transport', qty: 1 }
]
</script>

<template>
  <section id="top" class="hero">
    <div class="glow" />
    <div class="container grid">
      <div class="copy">
        <span class="pill">Engineering excellence &amp; technical support</span>
        <h1>
          Compressor overhauls and motor rewinding,
          <span class="hl">engineered to keep you running.</span>
        </h1>
        <p class="lead">
          Factory-grade compressor diagnostics, air-end rebuilds and Class H coil rewinding from
          Viwandani Industrial Area, Nairobi — with quotations, invoices, deliveries and payments
          managed in one secure workflow.
        </p>
        <div class="cta">
          <a href="#contact" class="btn btn-primary">Request a quotation</a>
          <a
            href="https://invoicing-erp-frontend.invoicing-erp.workers.dev/"
            target="_blank"
            rel="noopener"
            class="btn btn-ghost"
          >Open the ERP →</a>
        </div>
        <ul class="stats">
          <li><strong>7</strong><span>compressor brands</span></li>
          <li><strong>6</strong><span>motor brands</span></li>
          <li><strong>Class H</strong><span>insulation rewinds</span></li>
        </ul>
      </div>

      <div class="card" aria-label="Sample quotation">
        <div class="card-head">
          <div>
            <span class="muted">Quotation</span>
            <strong>QT-2026-0148</strong>
          </div>
          <span class="badge">Approved</span>
        </div>
        <ul class="lines">
          <li v-for="l in lines" :key="l.item">
            <span>{{ l.item }}</span>
            <span class="muted">× {{ l.qty }}</span>
          </li>
        </ul>
        <div class="steps">
          <span class="done">Quote</span>
          <span class="done">Invoice</span>
          <span class="active">Delivery</span>
          <span>Payment</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
  background: radial-gradient(1200px 600px at 80% -10%, #1e3a8a55, transparent),
    linear-gradient(180deg, var(--bg), var(--bg-2));
  color: #fff;
  padding: 150px 0 110px;
}
.glow {
  position: absolute;
  width: 520px;
  height: 520px;
  left: -160px;
  bottom: -260px;
  background: radial-gradient(circle, rgba(245, 158, 11, 0.25), transparent 65%);
  pointer-events: none;
}
.grid {
  position: relative;
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 56px;
  align-items: center;
}
.pill {
  display: inline-block;
  padding: 6px 12px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: rgba(255, 255, 255, 0.05);
  font-size: 0.8rem;
  color: #cbd5e1;
}
h1 {
  margin-top: 20px;
  font-size: clamp(2.2rem, 5vw, 3.6rem);
  font-weight: 800;
}
.hl {
  color: var(--accent);
}
.lead {
  margin-top: 20px;
  max-width: 560px;
  font-size: 1.12rem;
  color: #cbd5e1;
}
.cta {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 32px;
}
.stats {
  display: flex;
  flex-wrap: wrap;
  gap: 36px;
  list-style: none;
  padding: 0;
  margin: 44px 0 0;
}
.stats strong {
  display: block;
  font-size: 1.6rem;
  font-weight: 800;
}
.stats span {
  font-size: 0.85rem;
  color: #94a3b8;
}

.card {
  background: #fff;
  color: var(--ink);
  border-radius: 18px;
  padding: 24px;
  box-shadow: 0 30px 60px -20px rgba(0, 0, 0, 0.5);
}
.card-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 16px;
  border-bottom: 1px dashed var(--line);
}
.card-head strong {
  display: block;
  font-size: 1.1rem;
}
.muted {
  color: var(--ink-soft);
  font-size: 0.85rem;
}
.badge {
  background: #dcfce7;
  color: #166534;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 999px;
}
.lines {
  list-style: none;
  padding: 0;
  margin: 12px 0 20px;
}
.lines li {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding: 9px 0;
  font-size: 0.92rem;
  border-bottom: 1px solid #f1f5f9;
}
.steps {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 6px;
}
.steps span {
  text-align: center;
  font-size: 0.72rem;
  font-weight: 600;
  padding: 8px 4px;
  border-radius: 8px;
  background: var(--surface-2);
  color: var(--ink-soft);
}
.steps .done {
  background: #dbeafe;
  color: #1e40af;
}
.steps .active {
  background: var(--accent);
  color: var(--accent-ink);
}

@media (max-width: 920px) {
  .grid {
    grid-template-columns: 1fr;
  }
  .hero {
    padding: 120px 0 80px;
  }
}
</style>
