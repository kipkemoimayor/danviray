<script setup lang="ts">
const parts = [
  { code: 'GA11-MK', name: 'GA 11 WUX Compressor Maint Kit', desc: 'Complete service kit: air filter, oil filter and gaskets for scheduled maintenance.', tag: 'Compressor' },
  { code: 'FSK', name: 'Filter Separator Kit', desc: 'Oil separator element and seals to keep compressed air clean and dry.', tag: 'Compressor' },
  { code: 'VBK', name: 'V Belt Kit', desc: 'Matched drive belts for compressors and engines, sized to spec.', tag: 'Drive' },
  { code: 'SOW', name: 'Set of Wearing', desc: 'Wear parts set — bushes, seals and rings replaced on schedule.', tag: 'Wear parts' },
  { code: 'ULT-OIL', name: 'Ultra Oil', desc: 'Long-life synthetic compressor oil for extended service intervals.', tag: 'Lubricant' },
  { code: 'L&T', name: 'Labour & Transport', desc: 'Qualified technician on site, including travel and fitting.', tag: 'Service' }
]
</script>

<template>
  <section id="parts" class="section section-alt">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">Parts &amp; kits</span>
        <h2>What goes on a typical job</h2>
        <p>
          Every line below can go straight onto a quotation, then an invoice and a delivery note, with no retyping.
        </p>
      </div>

      <div class="grid">
        <article v-for="p in parts" :key="p.code" class="part">
          <div class="top">
            <span class="code">{{ p.code }}</span>
            <span class="tag">{{ p.tag }}</span>
          </div>
          <h3>{{ p.name }}</h3>
          <p>{{ p.desc }}</p>
        </article>
      </div>

      <p class="more">…and so on. Can't see what you need? <a href="#contact">Ask us for a quote</a>.</p>
    </div>
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}
.part {
  background: #fff;
  border-radius: var(--radius);
  padding: 22px 24px;
  border-left: 4px solid var(--accent);
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.06);
}
.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
.code {
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: 0.78rem;
  color: var(--ink-soft);
}
.tag {
  font-size: 0.72rem;
  font-weight: 600;
  padding: 3px 9px;
  border-radius: 999px;
  background: #e0e7ff;
  color: #3730a3;
}
h3 {
  font-size: 1.05rem;
  font-weight: 700;
}
p {
  margin-top: 6px;
  font-size: 0.92rem;
  color: var(--ink-soft);
}
.more {
  text-align: center;
  margin-top: 36px;
  color: var(--ink-soft);
}
.more a {
  color: var(--blue);
  font-weight: 600;
}
@media (max-width: 960px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 620px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
