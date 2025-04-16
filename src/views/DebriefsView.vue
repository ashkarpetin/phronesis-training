<template>
  <h1>Debriefs</h1>

  <div class="accordion" id="debriefs">
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button
          class="accordion-button"
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

    <div class="accordion-item">
      <h2 class="accordion-header">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapse32"
          aria-expanded="true"
          aria-controls="collapse32"
        >
          Project 32: Support team
        </button>
      </h2>
      <div
        id="collapse32"
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
                Unable to edit role name (input is disabled), although API
                allows it.
                <div class="mt-4">
                  <img src="../assets/debriefs/32/scr1.png" />
                </div>
              </li>
              <li class="mb-2">
                <p><span class="badge bg-warning text-dark">Confused</span></p>
                Permissions management UX is not great. You need to either
                manually copy permissions from
                <a
                  href="https://www.rebilly.com/docs/settings/user-permissions"
                  target="_blank"
                  >Rebilly docs</a
                >. We probably can improve the UX by adding UI where user can
                filter/add permissions by resource (for example customers,
                transactions) and by operation type (read: GET*; write: Post*,
                Put*, Patch*; delete: Delete*) instead of copy-paste from a
                Rebilly docs page.
              </li>
              <li class="mb-2">
                <p><span class="badge bg-warning text-dark">Confused</span></p>
                Recomm does not remove extra whitespace and empty rows from
                permission input, so it often leads to validation errors on
                save, and it is not clear what is wrong.
                <div class="mt-4">
                  <img src="../assets/debriefs/32/scr2.png" />
                </div>
                <div class="mt-4">
                  <img src="../assets/debriefs/32/scr3.png" />
                </div>
              </li>
              <li class="mb-2">
                <p><span class="badge bg-warning text-dark">Confused</span></p>
                We were not clear about the task to allow customer to edit
                payment instrument by link. So we used billing portals. Billing
                portal link was showing in menu on customer although user didn't
                have any billing portal permissions. After clicking on the link
                a modal appeared with text that we have no billing portals
                (although we have one), and error showed "Unable to fetch
                billing portals".
                <div class="mt-4">
                  <img src="../assets/debriefs/32/scr4.png" />
                </div>
                <div class="mt-4">
                  <img src="../assets/debriefs/32/scr5.png" />
                </div>

                After we added billing portal permissions
                GetBillingPortalCollection and GetBillingPortal we still were
                unable to generate link because of missing
                PostAuthenticationToken permission. After adding missing
                permission we were able to generate link.
                <div class="mt-4">
                  <img src="../assets/debriefs/32/scr6.png" />
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
