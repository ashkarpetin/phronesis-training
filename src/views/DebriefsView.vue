<template>
  <h1>Debriefs</h1>

  <div class="accordion" id="debriefs">
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button
          class="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapse52"
          aria-expanded="true"
          aria-controls="collapse52"
        >
          Project 52: Risk scores
        </button>
      </h2>
      <div
        id="collapse52"
        class="accordion-collapse collapse show"
        data-bs-parent="#debriefs"
      >
        <div class="accordion-body">
          <div>
            <strong>Which teammates executed the project?</strong>
            <p>Bogdan, Alex Sh</p>
          </div>
          <div>
            <strong>What made you smile?</strong>
            <p>Team work.</p>
          </div>
          <div>
            <strong>What did you find confusing?</strong>
            <ul>
              <li class="mb-2">
                <p><span class="badge bg-warning text-dark">Confused</span></p>
                Cannot set infinite max value. Min and max are required. So for
                requirement "customer's lifetime is $100 or more" you need to
                set min to 100 and max to some random big value 999999.
                <div class="mt-4">
                  <img src="../assets/debriefs/52/scr1.png" />
                </div>
                <div class="mt-4">
                  <img src="../assets/debriefs/52/scr2.png" />
                </div>
              </li>
              <li class="mb-2">
                <p><span class="badge bg-danger">Bug</span></p>
                Recomm validation message seems contains extra empty line.
                <div class="mt-4">
                  <img src="../assets/debriefs/52/scr1.png" />
                </div>
              </li>
              <li class="mb-2">
                <p><span class="badge bg-info text-dark">Suggestion</span></p>
                Might be helpful to be able to specify "Temporary block
                duration" in minutes/hours/days.
                <div class="mt-4">
                  <img src="../assets/debriefs/52/scr3.png" />
                </div>
              </li>
              <li class="mb-2">
                <p><span class="badge bg-warning text-dark">Confused</span></p>
                Button "Show more rows" hides only single row which looks
                strange.
                <div class="mt-4">
                  <img src="../assets/debriefs/52/scr4.png" />
                </div>
                <div class="mt-4">
                  <img src="../assets/debriefs/52/scr5.png" />
                </div>
              </li>
              <li class="mb-2">
                <p><span class="badge bg-warning text-dark">Confused</span></p>
                Seems we don't record negative risk score on transaction, only
                >0.
                <div>
                  <a
                    target="_blank"
                    href="https://app-sandbox.rebilly.com/yet-another-training-org/transactions/txn_01K2PJAQ0EZMY7CK46SBV04V9H"
                    >https://app-sandbox.rebilly.com/yet-another-training-org/transactions/txn_01K2PJAQ0EZMY7CK46SBV04V9H</a
                  >
                </div>

                <div class="mt-4">
                  <img src="../assets/debriefs/52/scr6.png" />
                </div>
                <div class="mt-4">
                  <img src="../assets/debriefs/52/scr7.png" />
                </div>
              </li>
              <li class="mb-2">
                <p><span class="badge bg-danger">Bug</span></p>
                Seems Recomm and backend don't validate properly if the value is
                integer, backend returns 500 when float is passed.

                <div>
                  <a
                    target="_blank"
                    href="https://sentry.rebilly.com/rebilly/rebilly-app/issues/34278/?environment=sandbox"
                    >https://sentry.rebilly.com/rebilly/rebilly-app/issues/34278/?environment=sandbox</a
                  >
                </div>

                <div class="mt-4">
                  <img src="../assets/debriefs/52/scr8.png" />
                </div>
              </li>
              <li class="mb-2">
                <p><span class="badge bg-info text-dark">Suggestion</span></p>
                Risk score simulated transaction does not show new calculated
                risk score, might be helpful to have it.
                <div class="mt-4">
                  <img src="../assets/debriefs/52/scr9.png" />
                </div>
              </li>
              <li class="mb-2">
                <p><span class="badge bg-danger">Bug</span></p>
                Risk factor "Customer lifetime value" is not evaluated
                correctly. Customer has lifetime value $4 USD but transaction
                risk score assigned to 10.

                <div>
                  <a
                    target="_blank"
                    href="https://app-sandbox.rebilly.com/yet-another-training-org/customers/test-risk-score"
                    >https://app-sandbox.rebilly.com/yet-another-training-org/customers/test-risk-score</a
                  >
                </div>

                <div>
                  <a
                    target="_blank"
                    href="https://app-sandbox.rebilly.com/yet-another-training-org/transactions/txn_01K2PK8FKYJB99VFPXRXNHG4ZN"
                    >https://app-sandbox.rebilly.com/yet-another-training-org/transactions/txn_01K2PK8FKYJB99VFPXRXNHG4ZN</a
                  >
                </div>

                <div class="mt-4">
                  <img src="../assets/debriefs/52/scr10.png" />
                </div>
                <div class="mt-4">
                  <img src="../assets/debriefs/52/scr11.png" />
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
          data-bs-target="#collapse50"
          aria-expanded="true"
          aria-controls="collapse50"
        >
          Project 50: Automated tagging
        </button>
      </h2>
      <div
        id="collapse50"
        class="accordion-collapse collapse"
        data-bs-parent="#debriefs"
      >
        <div class="accordion-body">
          <div>
            <strong>Which teammates executed the project?</strong>
            <p>Bogdan, Alex Sh</p>
          </div>
          <div>
            <strong>What made you smile?</strong>
            <p>Team work, short project.</p>
          </div>
          <div>
            <strong>What did you find confusing?</strong>
            <ul>
              <li class="mb-2">
                <p><span class="badge bg-warning text-dark">Confused</span></p>
                Subsciptions are paused every 10 minutes, while pauses are
                canceled immediately. It might be confusing for users when you
                pause subscription with effective time "now", but it is paused
                after 10 minutes.
                <div class="mt-4">
                  <img src="../assets/debriefs/50/scr1.png" />
                </div>
              </li>
              <li class="mb-2">
                <p><span class="badge bg-danger">Bug</span></p>
                Incorrect description in Recomm because automated tagging
                supports only customer tags.
                <div class="mt-4">
                  <img src="../assets/debriefs/50/scr2.png" />
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
          data-bs-target="#collapse49"
          aria-expanded="true"
          aria-controls="collapse49"
        >
          Project 49: Segments
        </button>
      </h2>
      <div
        id="collapse49"
        class="accordion-collapse collapse"
        data-bs-parent="#debriefs"
      >
        <div class="accordion-body">
          <div>
            <strong>Which teammates executed the project?</strong>
            <p>Bogdan, Alex Sh</p>
          </div>
          <div>
            <strong>What made you smile?</strong>
            <p>Team work, we were able to complete the project pretty fast.</p>
          </div>
          <div>
            <strong>What did you find confusing?</strong>
            <ul>
              <li class="mb-2">
                <p><span class="badge bg-warning text-dark">Confused</span></p>
                25 characters limit for grid segment title seems too short.
                <div class="mt-4">
                  <img src="../assets/debriefs/49/scr1.png" />
                </div>
              </li>
              <li class="mb-2">
                <p><span class="badge bg-danger">Bug</span></p>
                When you share a link to a grid segment or data table with a
                filter that includes two consecutive dots (..) via Slack or
                another app, it may not work as expected because the application
                does not recognize the final two dots as part of the URL. For
                example, we had a link with query params
                "?filter=lifetimeRevenue/amount:300.." meaning greater or equals
                to 300, but after opening the link from Slack it became
                "?filter=lifetimeRevenue/amount:300" meaning equals to 300.
                <div class="mt-4">
                  <img src="../assets/debriefs/49/scr2.png" />
                </div>
              </li>
              <li class="mb-2">
                <p><span class="badge bg-danger">Bug</span></p>
                When a user opens a grid segment link they don't have access to,
                instead of displaying an "Access Denied" error, Recomm shows a
                default customer segment. This can be confusing for users,
                especially when a shared link leads to a segment they aren't
                authorized to view.
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
          data-bs-target="#collapse48"
          aria-expanded="true"
          aria-controls="collapse48"
        >
          Project 48: Custom webhooks
        </button>
      </h2>
      <div
        id="collapse48"
        class="accordion-collapse collapse"
        data-bs-parent="#debriefs"
      >
        <div class="accordion-body">
          <div>
            <strong>Which teammates executed the project?</strong>
            <p>Bogdan, Alex Sh</p>
          </div>
          <div>
            <strong>What made you smile?</strong>
            <p>Team work.</p>
          </div>
          <div>
            <strong>What did you find confusing?</strong>
            <ul>
              <li class="mb-2">
                <p><span class="badge bg-danger">Bug</span></p>
                Missing placeholders list, we had to copy placeholders from
                email notifications.
                <div class="mt-4">
                  <img src="../assets/debriefs/48/scr1.png" />
                </div>
              </li>
              <li class="mb-2">
                <p><span class="badge bg-danger">Bug</span></p>
                Placeholders list in email notifications is too narrow. Long
                placeholders are truncated, making them difficult to read and
                navigate.
                <div class="mt-4">
                  <img src="../assets/debriefs/48/scr2.png" />
                </div>
              </li>
              <li class="mb-2">
                <p><span class="badge bg-warning text-dark">Confused</span></p>
                We were unable to make product custom fields placeholders
                working, so we added custom fields on plan and used
                "subscription.items.0.plan.customFields.crm_product_code"
                placeholder. It is not clear from training docs which custom
                fields to use.
              </li>
              <li class="mb-2">
                <p><span class="badge bg-danger">Bug</span></p>
                "Subscription -> Plan" conditions are incorrect and not working.
                <a
                  href="https://www.rebilly.com/catalog/all/orders/getsubscription"
                  target="_blank"
                  >Subscription resource</a
                >
                does not have field or embedded object with "plan" name, looks
                like it is hardcoded in Recomm.
                <div class="mt-4">
                  <img src="../assets/debriefs/48/scr3.png" />
                </div>
              </li>
              <li class="mb-2">
                <p><span class="badge bg-danger">Bug</span></p>
                Placeholders for subscription embedded (recentInvoice,
                initialInvoice, shippingRate, paymentInstrument,
                upcomingInvoice) are missing in the placholders list. We
                manually used "subscription.initialInvoice.amount" and
                "subscription.initialInvoice.currency" placeholders and it
                worked, because we checked
                <a
                  href="https://www.rebilly.com/catalog/all/orders/getsubscription#orders/getsubscription/t=response&c=200&path=&d=0/_embedded/initialinvoice"
                  >API docs</a
                >.
                <div class="mt-4">
                  <img src="../assets/debriefs/48/scr4.png" />
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
          data-bs-target="#collapse47"
          aria-expanded="true"
          aria-controls="collapse47"
        >
          Project 47: Marketing emails
        </button>
      </h2>
      <div
        id="collapse47"
        class="accordion-collapse collapse"
        data-bs-parent="#debriefs"
      >
        <div class="accordion-body">
          <div>
            <strong>Which teammates executed the project?</strong>
            <p>Bogdan, Alex Sh</p>
          </div>
          <div>
            <strong>What made you smile?</strong>
            <p>Team work, first time doing training together.</p>
          </div>
          <div>
            <strong>What did you find confusing?</strong>
            <ul>
              <li class="mb-2">
                <p><span class="badge bg-danger">Bug</span></p>
                Placeholders list is empty for email content.
                <div class="mt-4">
                  <img src="../assets/debriefs/47/scr1.png" />
                </div>
              </li>
              <li class="mb-2">
                <p><span class="badge bg-warning text-dark">Confused</span></p>
                Title can be moved from message content block to the very top,
                at first we confused it with email subject.
                <div class="mt-4">
                  <img src="../assets/debriefs/47/scr2.png" />
                </div>
              </li>
              <li class="mb-2">
                <p><span class="badge bg-info text-dark">Suggestion</span></p>
                Maybe show placeholders list for email subject, otherwise you
                have to select and copy/paste from email content.
                <div class="mt-4">
                  <img src="../assets/debriefs/47/scr3.png" />
                </div>
              </li>
              <li class="mb-2">
                <p><span class="badge bg-danger">Bug</span></p>
                "Send date" in local timezone is not properly converted to UTC
                timezone, resulting in wrong datetime recorded.
                <div class="mt-4">
                  <img src="../assets/debriefs/47/scr4.png" />
                </div>
                <div class="mt-4">
                  <img src="../assets/debriefs/47/scr5.png" />
                </div>
              </li>
              <li class="mb-2">
                <p><span class="badge bg-warning text-dark">Confused</span></p>
                Email broadcasts are processed every hour at 13:00, 14:00, etc
                which causes confusion. We've configured email to be sent 5
                minutes later creation, but it was sent an hour later.
              </li>
              <li class="mb-2">
                <p><span class="badge bg-warning text-dark">Confused</span></p>
                Email content editor UI looks clunky with strange text indents
                and grey line.
                <div class="mt-4">
                  <img src="../assets/debriefs/47/scr6.png" />
                </div>
              </li>
              <li class="mb-2">
                <p><span class="badge bg-danger">Bug</span></p>
                In some cases tabs are not removed after removing split test
                version.
                <div class="mt-4">
                  <img src="../assets/debriefs/47/scr7.png" />
                </div>
              </li>
              <li class="mb-2">
                <p><span class="badge bg-info text-dark">Suggestion</span></p>
                It would be nice to have a way to repeat completed campaign
                again without need to create and configure it again.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
