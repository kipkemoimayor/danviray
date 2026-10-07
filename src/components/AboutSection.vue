<script setup lang="ts">
const leaders = [
  {
    role: 'Managing Director',
    text: 'Handles contractual compliance, corporate governance and regional service level agreements (SLAs).'
  },
  {
    role: 'Head of Mechanical Services',
    text: 'Supervises pneumatic diagnostics, air-end tolerances and heavy overhaul engineering teams.'
  },
  {
    role: 'Lead Electrical & Rewinding Engineer',
    text: 'Oversees the electrical laboratory, coil insulation validation and post-repair quality controls.'
  }
]
</script>

<template>
  <section id="about" class="section section-alt">
    <div class="container">
      <div class="section-head">
        <img class="brand-logo" src="/logo-full.png" alt="DanViRay Solution Ltd — Ultimate Solution Provider" width="496" height="192">
        <span class="eyebrow">About us</span>
        <h2>Industrial integrity, quality engineering</h2>
      </div>

      <div class="vm">
        <div class="box">
          <span class="label">Vision</span>
          <p>
            To remain East Africa’s premier industrial support partner by setting benchmarks in precision
            engineering, minimizing production downtime and maximizing machine lifecycle efficiency.
          </p>
        </div>
        <div class="box dark">
          <span class="label">Mission</span>
          <p>
            Delivering factory-grade compressor diagnostics, structural overhaul routines and advanced coil
            rewinding services executed by certified field engineers adhering to stringent ISO compliance
            standards.
          </p>
        </div>
      </div>

      <h3 class="sub">Engineering governance</h3>
      <div class="team">
        <article v-for="l in leaders" :key="l.role">
          <h4>{{ l.role }}</h4>
          <p>{{ l.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.brand-logo {
  width: 260px;
  height: auto;
  margin: 0 auto 28px;
}
.vm {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 22px;
}
.box {
  padding: 32px;
  border-radius: var(--radius);
  background: var(--accent-soft);
}
.box.dark {
  background: var(--ink);
  color: #e2e8f0;
}
.label {
  display: inline-block;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #b45309;
  margin-bottom: 10px;
}
.dark .label {
  color: var(--accent);
}
.box p {
  font-size: 1.05rem;
}
.sub {
  margin: 64px 0 22px;
  text-align: center;
  font-size: 1.4rem;
  font-weight: 800;
}
.team {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
}
.team article {
  padding: 26px;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: #fff;
}
h4 {
  margin: 0;
  font-size: 1.05rem;
}
.team p {
  margin-top: 8px;
  font-size: 0.93rem;
  color: var(--ink-soft);
}
@media (max-width: 860px) {
  .vm,
  .team {
    grid-template-columns: 1fr;
  }
}
</style>
