<script setup lang="ts">
const services = [
  {
    icon: 'M4 14h16M6 14V9a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v5M7 18a2 2 0 1 0 0-.01M17 18a2 2 0 1 0 0-.01',
    title: 'Air Compressor Servicing',
    text: 'Scheduled maintenance for GA-series and other screw compressors — maint kits, separators, belts, oil changes and full overhauls.'
  },
  {
    icon: 'M5 17h14M6 17l1.5-6h9L18 17M8 11l1-4h6l1 4M7 20a1 1 0 1 0 0-.01M17 20a1 1 0 1 0 0-.01',
    title: 'Vehicle Maintenance & Repair',
    text: 'Routine service, diagnostics, brakes, suspension and engine work for private cars, commercial vehicles and fleets.'
  },
  {
    icon: 'M3 21V9l9-6 9 6v12M8 21v-7h8v7',
    title: 'Garage Equipment & Setup',
    text: 'Supply, installation and upkeep of workshop equipment — lifts, compressors, tools and lubrication systems.'
  },
  {
    icon: 'M20 7 9 18l-5-5',
    title: 'Genuine Parts & Service Kits',
    text: 'Sourcing of genuine and OEM-equivalent filters, belts, wear parts and lubricants, delivered to your site.'
  },
  {
    icon: 'M3 12h4l3-8 4 16 3-8h4',
    title: 'Preventive Maintenance Contracts',
    text: 'Planned service schedules with reminders and service history, so breakdowns are caught before they cost you.'
  },
  {
    icon: 'M12 8v4l3 2M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z',
    title: 'Fleet & Technical Consulting',
    text: 'Advice on fleet costs, equipment selection and maintenance planning for small and mid-sized operations.'
  }
]
</script>

<template>
  <section id="services" class="section">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">What we do</span>
        <h2>Services for vehicles, garages and workshops</h2>
        <p>One provider for parts, labour and paperwork — from the first quote to the final receipt.</p>
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
  padding: 28px;
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
  font-size: 1.12rem;
  font-weight: 700;
}
p {
  margin-top: 8px;
  color: var(--ink-soft);
  font-size: 0.95rem;
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
