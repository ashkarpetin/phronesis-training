<template>
  <h1>Debriefs</h1>

  <div class="accordion" id="debriefs">
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button
          class="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapse29"
          aria-expanded="true"
          aria-controls="collapse29"
        >
          Project 29: Deposits again
        </button>
      </h2>
      <div
        id="collapse29"
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
            <p>Team work, simple configuration, easy to implement.</p>
          </div>
          <div>
            <strong>What did you find confusing?</strong>
            <ul>
              <li class="mb-2">
                When you enter invalid amount (for example, $15,000), the
                validation error is shown for all methods except Google Pay one.
                Clicking on Google Pay button shows a modal with some different
                valid amount ($1,500), and allows to pay for it.
                <div class="mt-4">
                  <img src="../assets/debriefs/29/scr1.png" />
                </div>
              </li>
              <li class="mb-2">
                There is no way to update billing address for the saved payment
                card, the only way is to add a new card with same PAN.
              </li>
              <li class="mb-2">
                Google Pay button refreshes every time the deposit amount
                changed. Not great UX, not sure if it is feature or bug.
              </li>
              <li class="mb-2">
                Deposit configuration form in Recomm for absolute calculator
                with increments is still confusing. First time we configured it
                incorrectly. To display amounts of $5, $10, $25, $50 and $100 we
                need to set base amount to $5 and increments to $5, $20, $45,
                $95 which is not obvious, and not great UX.
                <div class="mt-4">
                  <img src="../assets/debriefs/29/scr2.png" />
                </div>
              </li>
              <li class="mb-2">
                If you check "Set base amount to match customer’s last deposit",
                and define custom amounts with maximum of $10000. Then make a
                payment with $10000, the next deposit form shows amounts $10000,
                $10005, $10020, $10045, $10045. But custom amounts are still
                limited to $10000. Not sure if this a bug or expected behavior.
                <div class="mt-4">
                  <img src="../assets/debriefs/29/scr3.png" />
                </div>
                <div class="mt-4">
                  <img src="../assets/debriefs/29/scr4.png" />
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
          data-bs-target="#collapse27"
          aria-expanded="true"
          aria-controls="collapse27"
        >
          Project 28: Subscription reactivations
        </button>
      </h2>
      <div
        id="collapse27"
        class="accordion-collapse collapse"
        data-bs-parent="#debriefs"
      >
        <div class="accordion-body">
          <div>
            <strong>Which teammates executed the project?</strong>
            <p>Egor, Alex Sh</p>
          </div>
          <div>
            <strong>What made you smile?</strong>
            <p>
              We used reactivation quotes to reactivate subscriptions. It took
              us around 1 hour to complete the training, didn't find any major
              issues. We were able to test webhooks using
              https://requestcatcher.com/ service which did not require any
              authentication.
            </p>
          </div>
          <div>
            <strong>What did you find confusing?</strong>
            <ul>
              <li class="mb-2">
                Subscription renewal time got modifed to +1 second. Not sure
                why. The message "Subscription renewal time modified" is
                confusing in timeline when time format is 12h, because it looks
                like renewal time didn't change.
                <div class="mt-4">
                  <img src="../assets/debriefs/28/scr1.png" />
                </div>
              </li>
              <li class="mb-2">
                Datetime values in the timelines tables do not adhere to the
                profile's time format. On the screen it is clearly shown that
                timeline creation time is in 24h format according to profile
                settings, but in the table it is shown in 12h format.
                <div class="mt-4">
                  <img src="../assets/debriefs/28/scr1.png" />
                </div>
              </li>
              <li class="mb-2">
                "Reactivate" badge looks confusing because it's a verb though
                title shows "Reactivation quote".
                <div class="mt-4">
                  <img src="../assets/debriefs/28/scr2.png" />
                </div>
              </li>
              <li class="mb-2">
                Capitalization issues.
                <div class="mt-4">
                  <img src="../assets/debriefs/28/scr3.png" />
                </div>
                "Quote for Customer" message seems excessive as all quotes are
                created for customers.
                <div class="mt-4">
                  <img src="../assets/debriefs/28/scr4.png" />
                </div>
              </li>
              <li class="mb-2">
                Might be useful to be able to choose multiple webhook events
                from single search result.
                <div class="mt-4">
                  <img src="../assets/debriefs/28/scr5.png" />
                </div>
              </li>
              <li class="mb-2">
                We were unable to get the subscription upgraded/downgraded
                events in timeline and webhooks when reactivating order with
                quote and removing or adding plan items.
                <div class="mt-4">
                  <img src="../assets/debriefs/28/scr6.png" />
                </div>

                But when we edited item on active subscription then
                upgraded/downgraded events recorded properly, webhooks sent.
                <div class="mt-4">
                  <img src="../assets/debriefs/28/scr7.png" />
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
          data-bs-target="#collapse27"
          aria-expanded="true"
          aria-controls="collapse27"
        >
          Project 27: Notify customers about trial ending
        </button>
      </h2>
      <div
        id="collapse27"
        class="accordion-collapse collapse"
        data-bs-parent="#debriefs"
      >
        <div class="accordion-body">
          <div>
            <strong>Which teammates executed the project?</strong>
            <p>Egor, Alex Sh</p>
          </div>
          <div>
            <strong>What made you smile?</strong>
            <p>It took us around 1 hour to complete the training.</p>
          </div>
          <div>
            <strong>What did you find confusing?</strong>
            <ul>
              <li class="mb-2">
                Reminder emails which were sent are not shown in customer
                timeline.
              </li>
              <li class="mb-2">
                Reminders are processed every 30 minutes. Docs don't mention
                that, and it is hard to test reminders without that knowledge.
              </li>
              <li class="mb-2">
                Clicking cancel button on "Change trial end date" modal, reload
                upcoming invoice and order details. Seems like a bad UX, nothing
                change, no need to reload.
                <div class="mt-4">
                  <img src="../assets/debriefs/27/scr1.png" />
                </div>
              </li>
              <li class="mb-2">
                There is no way to know when reminder was sent. API does not
                return any fields containing this information.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
