<template>
  <h1>Debriefs</h1>

  <div class="accordion" id="debriefs">
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button
          class="accordion-button"
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

    <div class="accordion-item">
      <h2 class="accordion-header">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapse37"
          aria-expanded="true"
          aria-controls="collapse37"
        >
          Project 37: Quickbooks integration
        </button>
      </h2>
      <div
        id="collapse37"
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
              Not much, we were not able to complete the training due to various
              issues.
            </p>
          </div>
          <div>
            <strong>What did you find confusing?</strong>
            <ul>
              <li class="mb-2">
                <p><span class="badge bg-danger">Bug</span></p>
                We've disconnected from Quickbooks and then reconnected again
                with other QB account but Recomm still shows previous inactive
                credential, and this is misleading.
                <div class="mt-4">
                  <img src="../assets/debriefs/37/scr1.png" />
                </div>
              </li>
              <li class="mb-2">
                <p><span class="badge bg-warning text-dark">Confused</span></p>
                Sync button does not have any visual feedback, and it is not
                clear if you clicked on it or not.
                <div class="mt-4">
                  <img src="../assets/debriefs/37/scr2.png" />
                </div>
              </li>
              <li class="mb-2">
                <p><span class="badge bg-danger">Bug</span></p>
                Seems
                <a
                  href="https://app-sandbox.rebilly.com/phronesis-alex-arman/customers/qb-test-4"
                  target="_blank"
                  >customer</a
                >
                email and phone are not synced with Quickbooks.
                <div class="mt-4">
                  <img src="../assets/debriefs/37/scr4.png" />
                </div>
              </li>
              <li class="mb-2">
                <p><span class="badge bg-danger">Bug</span></p>
                We updated
                <a
                  href="https://app-sandbox.rebilly.com/phronesis-alex-arman/customers/qb-test-4"
                  target="_blank"
                  >customer</a
                >
                details including first name, last name, billing address
                country, phone, emails and it was not reflected in QuickBooks
                even after manual sync.
              </li>
              <li class="mb-2">
                <p><span class="badge bg-danger">Bug</span></p>
                We were not able to synchronize invoices, an error recorded in
                timeline "Failed to communicate with QuickBooks due to failed to
                get item id for invoice item ii_01JT33YM6Y05F4EXMRYGA6G1M2".
                <div class="mt-4">
                  <img src="../assets/debriefs/37/scr3.png" />
                </div>
              </li>
              <li class="mb-2">
                <p><span class="badge bg-danger">Bug</span></p>
                We were not able to synchronize transactions, nothing is
                recorded in timeline. If try to synchronize manually and check
                <a
                  href="https://app-sandbox.rebilly.com/phronesis-alex-arman/data-tables/read-only-api-logs?filter=id:554f9f9f-d9a7-44d0-9122-1f944dd18d3b,97f69589-037b-4d81-9407-e154511db109"
                  target="_blank"
                  >API logs</a
                >: First request "POST
                https://api-sandbox.rebilly.com/transactions/txn_01JT33Z6NA2314SXADZ3HVHX9H/external-identifiers/quickbooks-online"
                returns 204, but second request "GET
                https://api-sandbox.rebilly.com/transactions/txn_01JT33Z6NA2314SXADZ3HVHX9H/external-identifiers/quickbooks-online"
                returns 404.
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
          data-bs-target="#collapse36"
          aria-expanded="true"
          aria-controls="collapse36"
        >
          Project 36: Custom domains
        </button>
      </h2>
      <div
        id="collapse36"
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
  </div>
</template>
<script setup lang="ts"></script>
