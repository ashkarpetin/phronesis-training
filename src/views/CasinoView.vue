<script setup>
import { ref } from 'vue';

const selectedCurrency = ref('USD');
const amount = ref(100);
</script>

<template>
  <section class="promotions-section py-5 bg-light">
    <div class="container">
      <h2 class="text-center mb-4">Exclusive Promotions</h2>
      <div class="row">
        <div class="col-md-6">
          <div class="card promo-card shadow-sm">
            <div class="card-body text-center">
              <h5 class="card-title">Welcome Bonus</h5>
              <p class="card-text">Get a 100% bonus on your first deposit.</p>
              <div class="dropdown">
                <button
                  class="btn btn-primary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Claim Offer
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <RouterLink to="/deposit/USD" class="dropdown-item"
                      >USD</RouterLink
                    >
                  </li>
                  <li>
                    <RouterLink to="/deposit/CAD" class="dropdown-item"
                      >CAD</RouterLink
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card promo-card shadow-sm">
            <div class="card-body text-center">
              <h5 class="card-title">Win Big, Withdraw Anytime!</h5>
              <p class="card-text">
                No waiting, no hassle - enjoy the thrill of winning and cash
                out.
              </p>
              <div class="row">
                <div class="col">
                  <input
                    type="number"
                    v-model="amount"
                    class="form-control mb-3"
                    placeholder="Enter amount"
                    value="100"
                  />
                </div>

                <div class="col">
                  <select v-model="selectedCurrency" class="form-select mb-3">
                    <option value="USD">USD</option>
                    <option value="CAD">CAD</option>
                  </select>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <RouterLink
                    :to="`/payout/${selectedCurrency}?amount=${amount}`"
                    class="btn btn-primary"
                  >
                    Withdraw
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
