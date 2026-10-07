<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container row">
      <div class="brand">
        <span class="logo"><img src="/logo-mark.png" alt="DanViRay logo" width="32" height="32"></span>
        <div>
          <strong>DanViray Solutions Ltd</strong>
          <p>Industrial integrity • Quality engineering</p>
        </div>
      </div>
      <address>
        North Airport Road, next to Autoexpress, Viwandani<br>
        P.O. Box 78209-00507, Nairobi<br>
        <a href="tel:+254725692770">+254 725 692 770</a> / <a href="tel:+254105871189">+254 105 871 189</a><br>
        <a href="mailto:danviraylimited@gmail.com">danviraylimited@gmail.com</a>
      </address>
      <nav>
        <a href="#services">Services</a>
        <a href="#brands">Brands</a>
        <a href="#about">About</a>
        <a href="#workflow">How it works</a>
        <a href="https://invoicing-erp-frontend.invoicing-erp.workers.dev/" target="_blank" rel="noopener">ERP</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
    <div class="container copy">© {{ year }} DanViray Solutions Ltd. All rights reserved.</div>
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
