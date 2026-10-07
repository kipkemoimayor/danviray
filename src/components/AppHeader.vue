<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
const open = ref(false)
const scrolled = ref(false)

const links = [
  { href: '#services', label: 'Services' },
  { href: '#brands', label: 'Brands' },
  { href: '#about', label: 'About' },
  { href: '#erp', label: 'ERP' },
  { href: '#contact', label: 'Contact' }
]

function onScroll() {
  scrolled.value = window.scrollY > 10
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header class="header" :class="{ scrolled, open }">
    <div class="container bar">
      <a href="#top" class="brand" @click="open = false">
        <span class="logo"><img src="/logo-mark.png" alt="DanViRay logo" width="32" height="32"></span>
        <span>DanViray<small>Engineering Excellence &amp; Technical Support</small></span>
      </a>

      <nav class="nav" :class="{ show: open }">
        <a v-for="l in links" :key="l.href" :href="l.href" @click="open = false">{{ l.label }}</a>
        <a
          href="https://invoicing-erp-frontend.invoicing-erp.workers.dev/"
          target="_blank"
          rel="noopener"
          class="btn btn-primary nav-cta"
        >Visit ERP</a>
      </nav>

      <button class="burger" :aria-expanded="open" aria-label="Toggle menu" @click="open = !open">
        <span /><span /><span />
      </button>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 50;
  transition: background 0.2s ease, box-shadow 0.2s ease;
}
.header.scrolled,
.header.open {
  background: rgba(11, 18, 32, 0.92);
  backdrop-filter: blur(10px);
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.06);
}
.bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
}
.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #fff;
  font-weight: 800;
  font-size: 1.15rem;
}
.brand small {
  display: block;
  font-size: 0.7rem;
  font-weight: 500;
  color: #94a3b8;
  letter-spacing: 0.02em;
}
.logo {
  display: grid;
  place-items: center;
  flex: none;
  width: 42px;
  height: 42px;
  padding: 5px;
  border-radius: 10px;
  background: #fff;
}
.logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.nav {
  display: flex;
  align-items: center;
  gap: 28px;
}
.nav a:not(.btn) {
  color: #cbd5e1;
  font-size: 0.93rem;
  font-weight: 500;
}
.nav a:not(.btn):hover {
  color: #fff;
}
.nav-cta {
  padding: 9px 16px;
}
.burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: 0;
  padding: 8px;
  cursor: pointer;
}
.burger span {
  width: 22px;
  height: 2px;
  background: #fff;
  border-radius: 2px;
}

@media (max-width: 880px) {
  .burger {
    display: flex;
  }
  .nav {
    position: absolute;
    top: 72px;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: stretch;
    gap: 4px;
    padding: 12px 20px 20px;
    background: rgba(11, 18, 32, 0.98);
    display: none;
  }
  .nav.show {
    display: flex;
  }
  .nav a:not(.btn) {
    padding: 10px 0;
  }
  .nav-cta {
    justify-content: center;
    margin-top: 8px;
  }
}
</style>
