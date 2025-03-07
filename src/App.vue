<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <RouterLink to="/" class="navbar-brand">Phronesis training</RouterLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <RouterLink to="/" class="nav-link">Home</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/casino" class="nav-link">Casino</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/debriefs" class="nav-link">Debriefs</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

  <div class="container my-5">
    <RouterView />
  </div>

  <footer class="bg-light text-dark text-center py-3 mt-auto">
    <div class="container">
      <p class="mb-0">&copy; 2025</p>
    </div>
  </footer>
</template>
