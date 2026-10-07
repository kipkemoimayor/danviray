<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container row">
      <div class="brand">
        <span class="logo">D</span>
        <div>
          <strong>DanViray</strong>
          <p>Vehicle, garage &amp; compressor solutions.</p>
        </div>
      </div>
      <address>
        P.O. Box 78209-00507, Viwandani, Nairobi<br>
        <a href="tel:0745122530">0745 122 530</a> / <a href="tel:0725692770">0725 692 770</a><br>
        <a href="mailto:danviraylimited@gmail.com">danviraylimited@gmail.com</a>
      </address>
      <nav>
        <a href="#services">Services</a>
        <a href="#parts">Parts &amp; Kits</a>
        <a href="#workflow">How it works</a>
        <a href="https://invoicing-erp-frontend.invoicing-erp.workers.dev/" target="_blank" rel="noopener">ERP</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
    <div class="container copy">© {{ year }} DanViray. All rights reserved.</div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--bg);
  color: #cbd5e1;
  padding: 48px 0 28px;
}
.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  padding-bottom: 28px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}
.brand {
  display: flex;
  align-items: center;
  gap: 12px;
}
.brand strong {
  color: #fff;
}
.brand p {
  font-size: 0.85rem;
  color: #94a3b8;
}
.logo {
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border-radius: 9px;
  background: var(--accent);
  color: var(--accent-ink);
  font-weight: 800;
}
nav {
  display: flex;
  flex-wrap: wrap;
  gap: 22px;
  font-size: 0.9rem;
}
address {
  font-style: normal;
  font-size: 0.85rem;
  line-height: 1.7;
  color: #94a3b8;
}
address a:hover,
nav a:hover {
  color: #fff;
}
.copy {
  padding-top: 22px;
  font-size: 0.8rem;
  color: #64748b;
}
</style>
