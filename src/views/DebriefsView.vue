<template>
  <h1>Debriefs</h1>

  <div class="accordion" id="debriefs">
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button
          class="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapse41"
          aria-expanded="true"
          aria-controls="collapse41"
        >
          Project 41: Taxes
        </button>
      </h2>
      <div
        id="collapse41"
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
            <p>Team work, taxes worked, we did it pretty fast.</p>
          </div>
          <div>
            <strong>What did you find confusing?</strong>
            <ul>
              <li class="mb-2">
                <p><span class="badge bg-warning text-dark">Confused</span></p>
                Rebilly tax
                <a href="https://www.rebilly.com/docs/settings/taxes">docs</a>
                and Recomm are not clear enough about automatic tax calculation
                and tax locations feature. Our organization country was not set
                to US, and tax location was not displayed. Then we found another
                another guide
                <a
                  href="https://www.rebilly.com/docs/settings/organizations-and-websites#manage-tax-locations"
                  >here</a
                >
                which mentions "This feature is only available to US-based
                organizations.", after chaning country to US, we were able to
                configure tax locations.
              </li>
              <li class="mb-2">
                <p><span class="badge bg-danger">Bug</span></p>
                Broken links on the
                <a href="https://www.rebilly.com/docs/settings/taxes">docs</a>
                page:
                <p>
                  1. Has description "Manage the tax ID numbers of an
                  organization" but leads to tax locations.
                </p>
                <p>2. Broken link anchor.</p>
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
          data-bs-target="#collapse40"
          aria-expanded="true"
          aria-controls="collapse40"
        >
          Project 40: Lead source attribution
        </button>
      </h2>
      <div
        id="collapse40"
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
            <p>
              Team work, we were able to record lead source attributes via
              hosted payment form and Instruments library by adding UTM fields
              to the query string.
            </p>
          </div>
          <div>
            <strong>What did you find confusing?</strong>
            <ul>
              <li class="mb-2">
                <p><span class="badge bg-warning text-dark">Confused</span></p>
                Rebilly docs mention that FramePay supports lead source. But as
                we tested and confirmed it is supported by Instruments library
                and hosted payment form too. So it is not documented well in our
                docs, and is confusing for users.
                <p>
                  <a
                    href="https://www.rebilly.com/docs/tutorials/lead-source-attribution#integration"
                    >https://www.rebilly.com/docs/tutorials/lead-source-attribution#integration</a
                  >
                </p>
                <p>
                  This page is located in the FramePay section of the docs so it
                  hard to find which attributes are supported.
                  <a href="https://www.rebilly.com/docs/dev-docs/lead-sources"
                    >https://www.rebilly.com/docs/dev-docs/lead-sources</a
                  >
                </p>
              </li>
              <li class="mb-2">
                <p><span class="badge bg-danger">Bug</span></p>
                Seems Cashier library and deposit form does not support lead
                source attribution.
              </li>
              <li class="mb-2">
                <p><span class="badge bg-danger">Bug</span></p>
                Lead source attribute values are being truncated too severely,
                resulting in very short entries in Recomm.
                <div class="mt-4">
                  <img src="../assets/debriefs/40/scr1.png" />
                </div>
              </li>
              <li class="mb-2">
                <p><span class="badge bg-warning text-dark">Confused</span></p>
                Data export URL in email may be adjusted to include organization
                ID for multi-organization merchants.
                <div class="mt-4">
                  <img src="../assets/debriefs/40/scr2.png" />
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
          data-bs-target="#collapse39"
          aria-expanded="true"
          aria-controls="collapse39"
        >
          Project 39: Change orders
        </button>
      </h2>
      <div
        id="collapse39"
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
                <p><span class="badge bg-warning text-dark">Confused</span></p>
                "Edit items" button is hard to find on the page. We forgot how
                to create a change quoted and it took us some time to figure out
                how to create it. Maybe place the button to a more visible place
                to the right button section?
                <div class="mt-4">
                  <img src="../assets/debriefs/39/scr1.png" />
                </div>
              </li>
              <li class="mb-2">
                <p><span class="badge bg-warning text-dark">Confused</span></p>
                It is not obvious that "Save" and "Create a quote" buttons
                produce different results. There probably should be a checkbox
                to select edit items via quote or directly and single button
                "Save".
                <div class="mt-4">
                  <img src="../assets/debriefs/39/scr2.png" />
                </div>
              </li>
              <li class="mb-2">
                <p><span class="badge bg-warning text-dark">Confused</span></p>
                We've replaced one item with another but timeline shows like
                there was 2 items (Item #1 and Item #2), not very obvious. Maybe
                it is intentional? Or is it bug?
                <div class="mt-4">
                  <img src="../assets/debriefs/39/scr3.png" />
                </div>
              </li>
              <li class="mb-2">
                <p><span class="badge bg-danger">Bug</span></p>
                Recomm shows "Subscription not found" error toast after creating
                an order which confusing. This happens because of the order ETL
                delay in sandbox, OS index is not updated yet, so GET call
                "/experimental/subscriptions/ord_01JV9YH0PGSP30E8TNY5CPZGMV/summary-metrics"
                returns 404. But this should be handled gracefully by Recomm,
                and not result in such error.
                <div class="mt-4">
                  <img src="../assets/debriefs/39/scr4.png" />
                </div>
                <div class="mt-4">
                  <img src="../assets/debriefs/39/scr5.png" />
                </div>
              </li>
              <li class="mb-2">
                <p><span class="badge bg-danger">Bug</span></p>
                After customer accepted and paid quote, the order autopay has
                been disabled. Quote page does not indicated that.
                <div class="mt-4">
                  <img src="../assets/debriefs/39/scr6.png" />
                </div>
                <div class="mt-4">
                  <img src="../assets/debriefs/39/scr7.png" />
                </div>
              </li>
              <li class="mb-2">
                <p><span class="badge bg-danger">Bug</span></p>
                We upgraded to expert training, then downgraded back to beginner
                with effective time "now" and it produced strange result.
                <div class="mt-4">
                  <p>Payment page shows a negative amount with error</p>
                  <img src="../assets/debriefs/39/scr8.png" />
                </div>
                <div class="mt-4">
                  <p>
                    Quotation interim invoice shows negative subtotal and $0
                    amount due
                  </p>
                  <img src="../assets/debriefs/39/scr9.png" />
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
          data-bs-target="#collapse38"
          aria-expanded="true"
          aria-controls="collapse38"
        >
          Project 38: PayPal
        </button>
      </h2>
      <div
        id="collapse38"
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
            <p>
              Team work, we connected PayPal and made initial invoice payments,
              and early issued renewal invoice was autopaid.
            </p>
          </div>
          <div>
            <strong>What did you find confusing?</strong>
            <ul>
              <li class="mb-2">
                <p><span class="badge bg-warning text-dark">Confused</span></p>
                <a
                  href="https://www.rebilly.com/docs/settings/add-paypal-account#1.-locate-your-sandbox-log-in-credentials"
                  target="_blank"
                  >Docs</a
                >
                about how to connect PayPal to Rebilly sandbox are not clear and
                confusing. At first we tried login email/password of the
                developer PayPal account, it onboarded successfully but we were
                not able to make payments because payment agreement token was
                missing then we figured out that we need to use email/password
                found on PayPal "Sandbox accounts" page.
                <div class="mt-4">
                  <img src="../assets/debriefs/38/scr1.png" />
                </div>
                <div class="mt-4">
                  <img src="../assets/debriefs/38/scr2.png" />
                </div>
              </li>
              <li class="mb-2">
                <p><span class="badge bg-warning text-dark">Confused</span></p>
                It is not clear how to test sandbox PayPal payments. Docs don't
                mention that information but you need to use creds from PayPal
                "Sandbox accounts" page as before.
                <div class="mt-4">
                  <img src="../assets/debriefs/38/scr3.png" />
                </div>
              </li>
              <li class="mb-2">
                <p><span class="badge bg-warning text-dark">Confused</span></p>
                After PayPal was successfully onboarded the user got redirected
                to gateway account data tables instead of particular gateway
                which was connected. Is it a bug or intentional?
              </li>
              <li class="mb-2">
                <p><span class="badge bg-warning text-dark">Confused</span></p>
                After we made payment via hosted payment form which was
                initiated on customer page "Collect payment" we immediately got
                redirected and there was no confirmation that payment was
                successful or not successful. When we tried instruments then we
                got that confirmation.
                <div class="mt-4">
                  <img src="../assets/debriefs/38/scr4.png" />
                </div>
              </li>
              <li class="mb-2">
                <p><span class="badge bg-danger">Bug</span></p>
                PayPal instruments are duplicating after each payment.
                <div class="mt-4">
                  <img src="../assets/debriefs/38/scr5.png" />
                </div>
                <div class="mt-4">
                  <img src="../assets/debriefs/38/scr6.png" />
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
