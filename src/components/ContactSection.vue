<script setup lang="ts">
import { reactive, ref } from 'vue'
const CONTACT = {
  phones: ['0745 122 530', '0725 692 770'],
  email: 'danviraylimited@gmail.com',
  address: 'P.O. Box 78209-00507, Viwandani, Nairobi'
}

const form = reactive({ name: '', phone: '', service: '', message: '' })
const sent = ref(false)

const services = [
  'Air compressor servicing',
  'Vehicle maintenance & repair',
  'Garage equipment & setup',
  'Parts & service kits',
  'Preventive maintenance contract',
  'Consulting',
  'Other'
]

// No backend yet: opens the visitor's email client with the request pre-filled.
function submit() {
  const subject = encodeURIComponent(`Quotation request — ${form.service || 'General'}`)
  const body = encodeURIComponent(
    `Name: ${form.name}\nPhone: ${form.phone}\nService: ${form.service}\n\n${form.message}`
  )
  window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`
  sent.value = true
}
</script>

<template>
  <section id="contact" class="section section-alt">
    <div class="container inner">
      <div class="info">
        <span class="eyebrow">Get in touch</span>
        <h2>Request a quotation</h2>
        <p class="lead">
          Send us the equipment model or vehicle details and what you need done. We'll reply with an
          itemised quote, usually within 24 hours.
        </p>
        <dl>
          <div>
            <dt>Phone</dt>
            <dd class="phones">
              <a v-for="p in CONTACT.phones" :key="p" :href="`tel:${p.replace(/\s/g, '')}`">{{ p }}</a>
            </dd>
          </div>
          <div><dt>Email</dt><dd><a :href="`mailto:${CONTACT.email}`">{{ CONTACT.email }}</a></dd></div>
          <div><dt>Address</dt><dd>{{ CONTACT.address }}</dd></div>
        </dl>
      </div>

      <form class="form" @submit.prevent="submit">
        <label>
          Full name
          <input v-model="form.name" required placeholder="Jane Doe">
        </label>
        <label>
          Phone
          <input v-model="form.phone" type="tel" required placeholder="+254 7…">
        </label>
        <label>
          Service
          <select v-model="form.service" required>
            <option value="" disabled>Select a service</option>
            <option v-for="s in services" :key="s">{{ s }}</option>
          </select>
        </label>
        <label>
          Details
          <textarea v-model="form.message" rows="4" placeholder="e.g. GA 11 compressor service: maint kit, separator, V belt kit, oil" />
        </label>
        <button type="submit" class="btn btn-dark">Send request</button>
        <p v-if="sent" class="ok">Your email app should open with the request ready to send.</p>
      </form>
    </div>
  </section>
</template>

<style scoped>
.inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 56px;
  align-items: start;
}
h2 {
  font-size: clamp(1.8rem, 3.5vw, 2.4rem);
  font-weight: 800;
}
.lead {
  margin-top: 14px;
  color: var(--ink-soft);
}
dl {
  margin: 30px 0 0;
  display: grid;
  gap: 16px;
}
dt {
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--ink-soft);
}
dd {
  margin: 2px 0 0;
  font-weight: 600;
}
.phones {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 18px;
}
dd a:hover {
  color: var(--blue);
}
.form {
  background: #fff;
  border-radius: 18px;
  padding: 28px;
  box-shadow: var(--shadow);
  display: grid;
  gap: 16px;
}
label {
  display: grid;
  gap: 6px;
  font-size: 0.88rem;
  font-weight: 600;
}
input,
select,
textarea {
  font: inherit;
  font-weight: 400;
  padding: 11px 13px;
  border: 1px solid var(--line);
  border-radius: 10px;
  background: #fff;
  color: var(--ink);
  width: 100%;
}
input:focus,
select:focus,
textarea:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.2);
}
.form .btn {
  justify-content: center;
}
.ok {
  font-size: 0.88rem;
  color: #166534;
}
@media (max-width: 860px) {
  .inner {
    grid-template-columns: 1fr;
  }
}
</style>
