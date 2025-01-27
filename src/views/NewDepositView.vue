<script setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { APP_CONFIG } from '../config';
import { getCustomers, rebillyApi } from '../api-client';
import { ref, useTemplateRef } from 'vue';

const route = useRoute();
const customers = ref([]);
const selectedCustomer = ref(null);
const mountElement = useTemplateRef('deposit');
onMounted(init);

async function init() {
  customers.value = await getCustomers();
}

async function initDeposit() {
  let customerId = selectedCustomer.value;
  if (!customerId) {
    // create new customer
    const { fields: customer } = await rebillyApi.customers.create({
      data: {
        websiteId: APP_CONFIG.websiteId,
        email: 'test@test.com',
      },
    });
    customerId = customer.id;
  }

  const { fields: depositRequest } = await rebillyApi.depositRequests.create({
    data: {
      websiteId: APP_CONFIG.websiteId,
      customerId: customerId,
      currency: route.params.currency,
    },
  });

  RebillyCashier.renderDeposit({
    mountElement: mountElement.value,
    cashierToken: depositRequest.cashierToken,
  });
}
</script>

<template>
  <h2>Make deposit</h2>
  <div class="container">
    <div class="row justify-content-md-center py-4">
      <div class="col col-lg-3">
        <div class="customer-picker">
          <select v-model="selectedCustomer" class="form-select">
            <option value="" selected>New customer</option>
            <option
              v-for="customer in customers"
              :key="customer.id"
              :value="customer.id"
              v-text="
                customer.lastName || customer.firstName
                  ? `${customer.firstName} ${customer.lastName}`
                  : customer.id
              "
            ></option>
          </select>
        </div>
      </div>
      <div class="col col-lg-2">
        <button @click="initDeposit" class="btn btn-primary">
          Initiate deposit
        </button>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 mx-auto">
        <div id="deposit" ref="deposit"></div>
      </div>
    </div>
  </div>
</template>
