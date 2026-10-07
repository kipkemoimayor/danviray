<script setup lang="ts">
const groups = [
  {
    title: 'Air compressor platforms',
    note: 'All models & structural configurations',
    brands: ['Atlas Copco', 'Ingersoll Rand', 'Kaeser', 'Sullair', 'CompAir', 'BOGE', 'ELGI']
  },
  {
    title: 'Electric motors & rotors',
    note: 'Stator rewinding & dynamic balancing',
    brands: ['ABB', 'Siemens', 'WEG', 'Toshiba', 'Baldor', 'Brook Crompton']
  }
]
</script>

<template>
  <section id="brands" class="section section-alt">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">Brand matrix</span>
        <h2>Equipment we service</h2>
        <p>
          Overhaul protocols, rebuilds and electrical rewinds for leading international industrial
          equipment manufacturers.
        </p>
      </div>

      <div class="grid">
        <div v-for="g in groups" :key="g.title" class="group">
          <h3>{{ g.title }}</h3>
          <p class="note">{{ g.note }}</p>
          <ul>
            <li v-for="b in g.brands" :key="b">{{ b }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 22px;
}
.group {
  background: #fff;
  border-radius: var(--radius);
  padding: 28px;
  border-top: 4px solid var(--accent);
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.06);
}
h3 {
  font-size: 1.2rem;
  font-weight: 700;
}
.note {
  margin-top: 4px;
  font-size: 0.9rem;
  color: var(--ink-soft);
}
ul {
  list-style: none;
  padding: 0;
  margin: 20px 0 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
li {
  padding: 8px 14px;
  border: 1px solid var(--line);
  border-radius: 10px;
  font-weight: 600;
  font-size: 0.92rem;
  background: var(--surface-2);
}
@media (max-width: 760px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
