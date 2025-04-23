<template>
  <h1>Debriefs</h1>

  <div class="accordion" id="debriefs">
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button
          class="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapse36"
          aria-expanded="true"
          aria-controls="collapse36"
        >
          Project 36: Custom domains
        </button>
      </h2>
      <div
        id="collapse36"
        class="accordion-collapse collapse show"
        data-bs-parent="#debriefs"
      >
        <div class="accordion-body">
          <div>
            <strong>Which teammates executed the project?</strong>
            <p>Arman, Alex Sh</p>
          </div>
          <div>
            <strong>What made you smile?</strong>
            <p>Team work, we configured custom domain without any issues.</p>
          </div>
          <div>
            <strong>What did you find confusing?</strong>
            <ul>
              <li class="mb-2">
                <p><span class="badge bg-warning text-dark">Confused</span></p>
                URL displayed in payment form URL modal in Recomm still contains
                "secure-payments.app" domain instead of configured custom
                domain.
                <div class="mt-4">
                  <img src="../assets/debriefs/36/scr1.png" />
                </div>

                <div class="mt-4">
                  <div>
                    Same issue with "Generate request payout link" modal.
                  </div>
                  <img src="../assets/debriefs/36/scr2.png" />
                </div>
              </li>
              <li class="mb-2">
                <p><span class="badge bg-warning text-dark">Confused</span></p>
                After payment completion, payment form redirects from custom
                domain to "forms-sandbox.secure-payments.app" domain, which
                further redirects to orignal redirecs URL. Seems it should
                redirect to custom domain instead.
                <div class="mt-4">
                  <img src="../assets/debriefs/36/scr3.png" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="accordion-item">
      <h2 class="accordion-header">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapse35"
          aria-expanded="true"
          aria-controls="collapse35"
        >
          Project 35: Shipping rates
        </button>
      </h2>
      <div
        id="collapse35"
        class="accordion-collapse collapse"
        data-bs-parent="#debriefs"
      >
        <div class="accordion-body">
          <div>
            <strong>Which teammates executed the project?</strong>
            <p>Arman, Alex Sh</p>
          </div>
          <div>
            <strong>What made you smile?</strong>
            <p>Team work, it was a pretty short training session.</p>
          </div>
          <div>
            <strong>What did you find confusing?</strong>
            <ul>
              <li class="mb-2">
                <p><span class="badge bg-danger">Bug</span></p>
                Some shipping rates filters are not working, resulting in 422
                errors or wrong shipping rate picked when creating a
                subscription with shippable product and shipping rate calculator
                "Rebilly".
                <a
                  href="https://github.com/Rebilly/rebilly/issues/11308"
                  target="_blank"
                  >Github issue</a
                >
                <div class="mt-4">
                  <img src="../assets/debriefs/35/scr1.png" />
                </div>
              </li>
              <li class="mb-2">
                Default shipping type is "Manual" with amount $0 on order
                creation in Recomm even if you have shipping rates configured.
                Not sure if it is intentional.
                <div class="mt-4">
                  <img src="../assets/debriefs/35/scr2.png" />
                </div>
              </li>
              <li class="mb-2">
                <p><span class="badge bg-danger">Bug</span></p>
                Getting 422 when trying change invoice shipping from "Rebilly"
                to "Manual". Probably because Recomm sends this shipping payload
                `{calculator: "manual", amount: 1, rateId: "vip-free"}`, which
                included both amount and rateId. One of those values should be
                omitted, or backend might ignore one of them.
                <div class="mt-4">
                  <img src="../assets/debriefs/35/scr3.png" />
                </div>
                <div class="mt-4">
                  <img src="../assets/debriefs/35/scr4.png" />
                </div>
              </li>
              <li class="mb-2">
                <p><span class="badge bg-danger">Bug</span></p>
                Unable to change invoice shipping from "Manual" to "Rebilly",
                save button disabled.
                <div class="mt-4">
                  <img src="../assets/debriefs/35/scr5.png" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="accordion-item">
      <h2 class="accordion-header">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapse34"
          aria-expanded="true"
          aria-controls="collapse34"
        >
          Project 34: AML
        </button>
      </h2>
      <div
        id="collapse34"
        class="accordion-collapse collapse"
        data-bs-parent="#debriefs"
      >
        <div class="accordion-body">
          <div>
            <strong>Which teammates executed the project?</strong>
            <p>Arman, Alex Sh</p>
          </div>
          <div>
            <strong>What made you smile?</strong>
            <p>Team work, it was a pretty short training session.</p>
          </div>
          <div>
            <strong>What did you find confusing?</strong>
            <ul>
              <li class="mb-2">
                <p><span class="badge bg-danger">Bug</span></p>
                Seems "PostAmlCheckReview" API endpoint has an undocumented
                behavior. We were not able to confirm matches and receiving
                404/422 API errors until we created 3 customer tags:
                aml-match-possible, aml-match-false-positive,
                aml-match-confirmed.
                <div class="mt-4">
                  <img src="../assets/debriefs/34/scr1.png" />
                </div>
                <div class="mt-4">
                  <img src="../assets/debriefs/34/scr2.png" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="accordion-item">
      <h2 class="accordion-header">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapse33"
          aria-expanded="true"
          aria-controls="collapse33"
        >
          Project 33: Coupons
        </button>
      </h2>
      <div
        id="collapse33"
        class="accordion-collapse collapse"
        data-bs-parent="#debriefs"
      >
        <div class="accordion-body">
          <div>
            <strong>Which teammates executed the project?</strong>
            <p>Arman, Alex Sh</p>
          </div>
          <div>
            <strong>What made you smile?</strong>
            <p>Team work</p>
          </div>
          <div>
            <strong>What did you find confusing?</strong>
            <ul>
              <li class="mb-2">
                <p><span class="badge bg-danger">Bug</span></p>
                Unable to create coupon with "Restrict to countries"
                restriction, getting validation error "Restrictions > 0 >
                Country IDs: This value should not be blank."
                <div class="mt-4">
                  <img src="../assets/debriefs/33/scr1.png" />
                </div>
              </li>
              <li class="mb-2">
                <p><span class="badge bg-danger">Bug</span></p>
                No error message is shown if coupon redemption failed on a
                customer page while API returns 422 "Cannot redeem the coupon,
                disallowed by restrictions". To reproduce: create a redeemable
                once per customer coupon, try to apply coupon to a customer 2
                times.
                <div class="mt-4">
                  <img src="../assets/debriefs/33/scr2.png" />
                </div>
              </li>
              <li class="mb-2">
                <p><span class="badge bg-warning text-dark">Confused</span></p>
                Coupon code and description are displayed on invoice pdf, but
                not displayed on invoice details page except timeline.
                <div class="mt-4">
                  Recomm:
                  <img src="../assets/debriefs/33/scr3.png" />
                </div>
                <div class="mt-4">
                  PDF file:
                  <img src="../assets/debriefs/33/scr4.png" />
                </div>
              </li>
              <li class="mb-2">
                <p><span class="badge bg-warning text-dark">Confused</span></p>
                Missing sort by redemption time when creating segment with type
                "Coupon redemptions".
                <div class="mt-4">
                  <img src="../assets/debriefs/33/scr5.png" />
                </div>
              </li>
              <li class="mb-2">
                <p><span class="badge bg-danger">Bug</span></p>
                Restrictions column shows [object Object] in coupons data
                tables.
                <div class="mt-4">
                  <img src="../assets/debriefs/33/scr6.png" />
                </div>
              </li>
              <li class="mb-2">
                <p><span class="badge bg-danger">Bug</span></p>
                Unable to change order of coupon ID and ID columns on coupons
                redemptions data table, both elements are disabled.
                <div class="mt-4">
                  <img src="../assets/debriefs/33/scr7.png" />
                </div>
              </li>
              <li class="mb-2">
                <p><span class="badge bg-danger">Bug</span></p>
                Segment defined columns order is not consistent with the actual
                column order in data table.
                <div class="mt-4">
                  Segment creation page:
                  <img src="../assets/debriefs/33/scr8.png" />
                </div>
                <div class="mt-4">
                  Data table:
                  <img src="../assets/debriefs/33/scr9.png" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
