<script setup lang="ts">
const services = [
  {
    icon: 'M4 14h16M6 14V9a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v5M7 18a2 2 0 1 0 0-.01M17 18a2 2 0 1 0 0-.01',
    title: 'Compressor Maintenance & Overhauls',
    text: 'Complete rotary screw air-end rebuilds, reciprocating valve refurbishments, element alignment and oil circuit decontamination for all configurations.',
    points: ['Air-end rebuilds', 'Valve refurbishment', 'Element alignment', 'Oil circuit decontamination']
  },
  {
    icon: 'M3 12h4l3-8 4 16 3-8h4',
    title: 'System Troubleshooting & Technical Support',
    text: 'Advanced pneumatic logic analysis, thermodynamic parameter profiling, electronic controller debugging and immediate field recovery actions.',
    points: ['Pneumatic logic analysis', 'Thermodynamic profiling', 'Controller debugging', 'Field recovery']
  },
  {
    icon: 'M13 2 4 14h7l-1 8 9-12h-7l1-8Z',
    title: 'Motor Repairs & Coil Rewinding',
    text: 'Low and medium voltage copper coil rewinding using Class H thermal insulation, vacuum pressure impregnation and surge verification testing.',
    points: ['LV & MV rewinding', 'Class H insulation', 'Vacuum pressure impregnation', 'Surge testing & balancing']
  }
]
</script>

<template>
  <section id="services" class="section">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">Core services</span>
        <h2>Mechanical &amp; electrical engineering services</h2>
        <p>
          An independent engineering workshop with calibrated technical tooling for overhauls, rebuilds
          and electrical insulation rewinds.
        </p>
      </div>

      <div class="grid">
        <article v-for="s in services" :key="s.title" class="card">
          <div class="icon">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path :d="s.icon" />
            </svg>
          </div>
          <h3>{{ s.title }}</h3>
          <p>{{ s.text }}</p>
          <ul>
            <li v-for="p in s.points" :key="p">{{ p }}</li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
}
.card {
  display: flex;
  flex-direction: column;
  padding: 30px;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: #fff;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow);
  border-color: transparent;
}
.icon {
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: var(--accent-soft);
  color: #b45309;
  margin-bottom: 18px;
}
h3 {
  font-size: 1.15rem;
  font-weight: 700;
}
p {
  margin-top: 10px;
  color: var(--ink-soft);
  font-size: 0.95rem;
}
ul {
  list-style: none;
  padding: 18px 0 0;
  margin: 18px 0 0;
  border-top: 1px dashed var(--line);
  display: grid;
  gap: 8px;
}
li {
  position: relative;
  padding-left: 18px;
  font-size: 0.9rem;
  font-weight: 500;
}
li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.55em;
  width: 7px;
  height: 7px;
  border-radius: 2px;
  background: var(--accent);
}
@media (max-width: 960px) {
  .grid {
    grid-template-columns: 1fr;
    max-width: 640px;
    margin: 0 auto;
  }
}
</style>
