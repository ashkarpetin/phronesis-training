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
              <h5 class="card-title">Weekly Free Spins</h5>
              <p class="card-text">
                Enjoy free spins every week on our top slot games.
              </p>
              <button class="btn btn-primary">Claim Offer</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
