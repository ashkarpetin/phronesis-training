<script setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import RebillyInstruments from '@rebilly/instruments';
import { APP_CONFIG } from '../config';
import { getCustomerJwt, rebillyApi } from '../api-client';

const route = useRoute();

onMounted(initDeposit);

async function initDeposit() {
  const jwt = await getCustomerJwt(APP_CONFIG.customerId);

  const { fields: depositRequest } = await rebillyApi.depositRequests.create({
    data: {
      websiteId: APP_CONFIG.websiteId,
      customerId: APP_CONFIG.customerId,
      currency: route.params.currency,
    },
  });

  RebillyInstruments.mount({
    apiMode: 'sandbox',
    deposit: {
      depositRequestId: depositRequest.id,
    },
    jwt,
  });
}
</script>

<template>
  <h2>Make deposit</h2>
  <div class="container">
    <div class="row">
      <div class="col-md-6 mx-auto">
        <div class="rebilly-instruments"></div>
        <div class="rebilly-instruments-summary"></div>
      </div>
    </div>
  </div>
</template>
