<script setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import RebillyInstruments from '@rebilly/instruments';
import { APP_CONFIG } from '../config';
import { getCustomerJwt, rebillyApi } from '../api-client';

const route = useRoute();

onMounted(initPayout);

async function initPayout() {
  const jwt = await getCustomerJwt(APP_CONFIG.customerId);

  const { fields: payoutRequest } = await rebillyApi.payoutRequests.create({
    data: {
      websiteId: APP_CONFIG.websiteId,
      customerId: APP_CONFIG.customerId,
      currency: route.params.currency,
      amount: parseFloat(route.query.amount ?? '100.0'),
    },
  });

  RebillyInstruments.mount({
    apiMode: 'sandbox',
    payout: {
      payoutRequestId: payoutRequest.id,
    },
    jwt,
  });
}
</script>

<template>
  <h2>Request payout</h2>
  <div class="container">
    <div class="row">
      <div class="col-md-6 mx-auto">
        <div class="rebilly-instruments"></div>
        <div class="rebilly-instruments-summary"></div>
      </div>
    </div>
  </div>
</template>
