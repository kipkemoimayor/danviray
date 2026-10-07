<script setup lang="ts">
const ERP_URL = 'https://invoicing-erp-frontend.invoicing-erp.workers.dev/'

const features = [
  'Create and send quotations in minutes',
  'Convert approved quotes to invoices in one click',
  'Track deliveries with signed delivery notes',
  'Record payments and see outstanding balances',
  'Secure login with your own account'
]
</script>

<template>
  <section id="erp" class="section erp">
    <div class="container inner">
      <div class="copy">
        <span class="eyebrow">Client portal</span>
        <h2>Visit our ERP</h2>
        <p class="lead">
          Everything we do for you is in our invoicing ERP. Log in to see your quotations, invoices,
          deliveries and payment history in one place.
        </p>
        <ul>
          <li v-for="f in features" :key="f">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
            {{ f }}
          </li>
        </ul>
        <a :href="ERP_URL" target="_blank" rel="noopener" class="btn btn-primary">Open the ERP →</a>
        <p class="url">{{ ERP_URL.replace('https://', '').replace(/\/$/, '') }}</p>
      </div>

      <a :href="ERP_URL" target="_blank" rel="noopener" class="mock" aria-label="Open the invoicing ERP">
        <div class="chrome">
          <span /><span /><span />
          <div class="addr">invoicing-erp…workers.dev</div>
        </div>
        <div class="screen">
          <div class="side">
            <i class="on" /><i /><i /><i /><i />
          </div>
          <div class="main">
            <div class="kpis">
              <div><small>Quotes</small><b>12</b></div>
              <div><small>Invoices</small><b>8</b></div>
              <div><small>Paid</small><b>6</b></div>
            </div>
            <div class="rows">
              <div v-for="n in 5" :key="n" class="row">
                <span class="w1" /><span class="w2" /><span class="chip" :class="{ ok: n % 2 }" />
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  </section>
</template>

<style scoped>
.erp {
  background: linear-gradient(135deg, var(--bg), #172554);
  color: #fff;
}
.inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 56px;
  align-items: center;
}
h2 {
  font-size: clamp(1.9rem, 3.5vw, 2.6rem);
  font-weight: 800;
}
.lead {
  margin-top: 14px;
  color: #cbd5e1;
  font-size: 1.05rem;
}
ul {
  list-style: none;
  padding: 0;
  margin: 24px 0 30px;
  display: grid;
  gap: 10px;
}
li {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #e2e8f0;
}
li svg {
  flex: none;
  color: var(--accent);
}
.url {
  margin-top: 12px;
  font-size: 0.8rem;
  color: #94a3b8;
  word-break: break-all;
}

.mock {
  display: block;
  border-radius: 14px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 40px 80px -30px rgba(0, 0, 0, 0.6);
  transition: transform 0.25s ease;
}
.mock:hover {
  transform: translateY(-6px) rotate(-0.4deg);
}
.chrome {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 14px;
  background: #e2e8f0;
}
.chrome > span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #94a3b8;
}
.addr {
  margin-left: 10px;
  flex: 1;
  background: #fff;
  border-radius: 6px;
  font-size: 0.72rem;
  color: var(--ink-soft);
  padding: 4px 10px;
}
.screen {
  display: grid;
  grid-template-columns: 54px 1fr;
  min-height: 280px;
}
.side {
  background: var(--ink);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  padding-top: 18px;
}
.side i {
  width: 22px;
  height: 22px;
  border-radius: 6px;
  background: #334155;
}
.side i.on {
  background: var(--accent);
}
.main {
  padding: 18px;
  color: var(--ink);
}
.kpis {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
.kpis div {
  background: var(--surface-2);
  border-radius: 8px;
  padding: 10px;
}
.kpis small {
  display: block;
  font-size: 0.7rem;
  color: var(--ink-soft);
}
.kpis b {
  font-size: 1.2rem;
}
.rows {
  margin-top: 14px;
  display: grid;
  gap: 8px;
}
.row {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border: 1px solid var(--line);
  border-radius: 8px;
}
.row span {
  height: 8px;
  border-radius: 4px;
  background: #e2e8f0;
}
.w1 {
  width: 30%;
}
.w2 {
  flex: 1;
}
.chip {
  width: 44px;
  background: #fde68a !important;
}
.chip.ok {
  background: #bbf7d0 !important;
}

@media (max-width: 900px) {
  .inner {
    grid-template-columns: 1fr;
  }
}
</style>
