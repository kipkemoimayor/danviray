<script setup lang="ts">
const steps = [
  { n: '01', title: 'Quotation', text: 'Tell us what you need. We send an itemised quote with parts, labour and transport.' },
  { n: '02', title: 'Invoice', text: 'Approve the quote and it becomes an invoice automatically — same lines, same prices.' },
  { n: '03', title: 'Delivery', text: 'Parts are delivered and fitted. You get a signed delivery note for your records.' },
  { n: '04', title: 'Payment', text: 'Pay by your preferred method. Every payment is matched to its invoice and receipted.' }
]
</script>

<template>
  <section id="workflow" class="section">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">How it works</span>
        <h2>Quotations, invoices, deliveries and payments in one secure workflow</h2>
        <p>No lost paperwork, no chasing emails. Each step builds on the one before it.</p>
      </div>

      <ol class="steps">
        <li v-for="s in steps" :key="s.n">
          <span class="n">{{ s.n }}</span>
          <h3>{{ s.title }}</h3>
          <p>{{ s.text }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.steps {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px;
  counter-reset: s;
  position: relative;
}
.steps::before {
  content: '';
  position: absolute;
  top: 26px;
  left: 12%;
  right: 12%;
  height: 2px;
  background: repeating-linear-gradient(90deg, var(--line) 0 8px, transparent 8px 14px);
}
li {
  position: relative;
  text-align: center;
  padding: 0 8px;
}
.n {
  position: relative;
  display: inline-grid;
  place-items: center;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  background: var(--ink);
  color: var(--accent);
  font-weight: 800;
  margin-bottom: 18px;
  box-shadow: 0 0 0 6px #fff;
}
h3 {
  font-size: 1.15rem;
  font-weight: 700;
}
p {
  margin-top: 8px;
  font-size: 0.94rem;
  color: var(--ink-soft);
}
@media (max-width: 860px) {
  .steps {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 40px;
  }
  .steps::before {
    display: none;
  }
}
@media (max-width: 520px) {
  .steps {
    grid-template-columns: 1fr;
  }
}
</style>
