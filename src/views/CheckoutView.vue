<script setup>
import { onMounted } from 'vue';
import RebillyInstruments from '@rebilly/instruments';

onMounted(init);

async function init() {
  RebillyInstruments.mount({
    organizationId: 'phronesis-alex-arman',
    publishableKey: 'pk_sandbox_2gSUL0x1ZTvSkdE0KjqJ4p5Mr2qGr-daWkfJ002',
    websiteId: 'test.com',
    apiMode: 'sandbox',
    items: [
      {
        planId: 'silver-monthly',
        quantity: 1,
      },
    ],
  });
}
</script>

<template>
  <h2>Checkout</h2>
  <div class="container">
    <div class="row">
      <div class="col-md-6 mx-auto">
        <div class="rebilly-instruments"></div>
        <div class="rebilly-instruments-summary"></div>
      </div>
    </div>
  </div>
</template>
