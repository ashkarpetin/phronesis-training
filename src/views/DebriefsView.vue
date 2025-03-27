<template>
  <h1>Debriefs</h1>

  <div class="accordion" id="debriefs">
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button
          class="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapse31"
          aria-expanded="true"
          aria-controls="collapse31"
        >
          Project 32: Support team
        </button>
      </h2>
      <div
        id="collapse31"
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

    <div class="accordion-item">
      <h2 class="accordion-header">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapse31"
          aria-expanded="true"
          aria-controls="collapse31"
        >
          Project 31: Orders Early Access
        </button>
      </h2>
      <div
        id="collapse31"
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
                Overall the UI feels unpolished and the UX is not great. A lot
                of free space on the page:
                <ul>
                  <li>Status badge color is not consistent (1)</li>
                  <li>
                    Labels "view" and "Qty": inconsistent capitalization, and
                    inappropiate abbreviation (2)
                  </li>
                  <li>
                    The panel takes up a lot of space, and seems redundant (3)
                  </li>
                  <li>
                    "Create reactivation quote" button is displayed of active
                    order (4)
                  </li>
                  <li>
                    "Order details" panel is duplicated, "Edit button" is
                    duplicated (5)
                  </li>
                  <li>
                    Invalid capitalization "Upcoming invoice for this
                    Order"/"Invoices for this Order"
                  </li>
                </ul>
                <div class="mt-4">
                  <img src="../assets/debriefs/31/scr1.png" />
                </div>
              </li>
              <li class="mb-2">
                <p><span class="badge bg-warning text-dark">Confused</span></p>
                Order items details page seems redundant, because it duplicates
                information from order details page.
                <div class="mt-4">
                  <img src="../assets/debriefs/31/scr5.png" />
                </div>
              </li>
              <li class="mb-2">
                <p><span class="badge bg-danger">Bug</span></p>
                1. On order details page you can pause the order, but there is
                no button to unpause it.
                <div class="mt-4">
                  <img src="../assets/debriefs/31/scr2.png" />
                </div>
                <div class="mt-4">
                  <img src="../assets/debriefs/31/scr3.png" />
                </div>
                2.On order items details page a button "Pause order" displayed
                for paused order.
                <div class="mt-4">
                  <img src="../assets/debriefs/31/scr4.png" />
                </div>
              </li>
              <li class="mb-2">
                <p><span class="badge bg-warning text-dark">Confused</span></p>
                There is no data tables for new orders, which is very
                inconvenient.
              </li>
              <li class="mb-2">
                <p><span class="badge bg-danger">Bug</span></p>
                Error is shown when you try to early pay the upcoming invoice.
                Seems Recomm bug as no API requests are made.
                <div class="mt-4">
                  <img src="../assets/debriefs/31/scr6.png" />
                </div>
              </li>
              <li class="mb-2">
                <p><span class="badge bg-danger">Bug</span></p>
                Missing created time and updated time on order item when editing
                order.
                <div class="mt-4">
                  <img src="../assets/debriefs/31/scr10.png" />
                </div>
              </li>
              <li class="mb-2">
                <p><span class="badge bg-danger">Bug</span></p>
                Unable to update usages of a metered billing plan order item,
                got error "Invoice not found" when clicking on "Update usages"
                button on upcoming invoice.
                <div class="mt-4">
                  <img src="../assets/debriefs/31/scr7.png" />
                </div>
              </li>
              <li class="mb-2">
                <p><span class="badge bg-warning text-dark">Confused</span></p>
                "Draft" badge does not make sense for upcoming invoice.
                <div class="mt-4">
                  <img src="../assets/debriefs/31/scr8.png" />
                </div>
              </li>
              <li class="mb-2">
                <p><span class="badge bg-warning text-dark">Confused</span></p>
                After editing order item getting redirected to initial invoice.
                We would expect to be redirected to the order details page or to
                the upcoming invoice.
              </li>
              <li class="mb-2">
                <p><span class="badge bg-warning text-dark">Confused</span></p>
                Metered billing can be enabled for a plan only if post paid
                billing timing is selected above, which might be confusing. Also
                text "can also be prepaid when a customer purchases an allowance
                of some quantity and then depletes the allowance" is incorrect,
                metered billing can be post paid only in our case.
                <div class="mt-4">
                  <img src="../assets/debriefs/31/scr9.png" />
                </div>
              </li>
              <li class="mb-2">
                <p><span class="badge bg-danger">Bug</span></p>
                1. "Cancel at next renewal" is missing actual renewal time.
                <div class="mt-4">
                  <img src="../assets/debriefs/31/scr11.png" />
                </div>
                2. "Upcoming invoice not found" error is display every time you
                open a canceled order.
                <div class="mt-4">
                  <img src="../assets/debriefs/31/scr12.png" />
                </div>
                3. Error and empty modal is shown after clicling on "Update
                cancellation time" button.
                <div class="mt-4">
                  <img src="../assets/debriefs/31/scr13.png" />
                </div>
                4. "Cancel order" and "Update renewal" buttons are shown for
                churned order on order details page.
                <div class="mt-4">
                  <img src="../assets/debriefs/31/scr14.png" />
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
          data-bs-target="#collapse30"
          aria-expanded="true"
          aria-controls="collapse30"
        >
          Project 30: Collect KYC documents
        </button>
      </h2>
      <div
        id="collapse30"
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
              Team work, simple rules engine configuration, we tried gatherer UI
              versions 1 and 2.
            </p>
          </div>
          <div>
            <strong>What did you find confusing?</strong>
            <ul>
              <li class="mb-2">
                <p><span class="badge bg-warning text-dark">Confused</span></p>
                Inconstistency between API definitions and Recomm, in API defs
                "Match level" 2/moderate, in Recomm "Document verification
                level" relaxed/moderate.
                <div class="mt-4">
                  <img src="../assets/debriefs/30/scr1.png" />
                </div>
                <div class="mt-4">
                  <img src="../assets/debriefs/30/scr2.png" />
                </div>
              </li>
              <li class="mb-2">
                <p><span class="badge bg-warning text-dark">Confused</span></p>
                "Request KYC" action configured for "Gateway account requested"
                event. TestProcessor with enabled sticky gateways is preventing
                "Gateway account requested" event dispatching, so transaction
                was immediately approved, no KYC documents were requested. We
                probably can add action to "Transaction process requested"
                event.
              </li>
              <li class="mb-2">
                <p><span class="badge bg-danger">Bug</span></p>
                After adding a new card, an address remained displayed on the
                screen. Seems issue with input z-index.
                <div class="mt-4">
                  <img src="../assets/debriefs/30/scr3.png" />
                </div>
                <div class="mt-4">
                  <img src="../assets/debriefs/30/scr4.png" />
                </div>
              </li>
              <li class="mb-2">
                <p><span class="badge bg-danger">Bug</span></p>
                "Issue the KYC request: After processing the transaction" does
                not work because it is not implemented on backend. Maybe we
                should remove this option from the rule engine, does not seem
                there is case when KYC document are requested after transaction
                is processed.
                <div class="mt-4">
                  <img src="../assets/debriefs/30/scr5.png" />
                </div>
              </li>
              <li class="mb-2">
                <p><span class="badge bg-danger">Bug</span></p>
                All buttons are hidden if image is too big, unable to proceed
                further (UI version 2, desktop Chrome browser).
                <div class="mt-4">
                  <img src="../assets/debriefs/30/scr6.png" />
                </div>
              </li>
              <li class="mb-2">
                <p><span class="badge bg-danger">Bug</span></p>
                Configuring action as "address-proof" only (and probably other
                non-identity types too) + selfie breaks the gatherer for both UI
                versions. You upload image but cannot proceed further, because
                StorefrontPostKycDocument API operation returns a validation
                error "Invalid number of files" (it expects 2 files, because of
                selfie), but the gatherer shows confusing error "Maximmum upload
                attempts reached".
                <div class="mt-4">
                  <img src="../assets/debriefs/30/scr9.png" />
                </div>
                <div class="mt-4">
                  <img src="../assets/debriefs/30/scr7.png" />
                </div>
                <div class="mt-4">
                  <img src="../assets/debriefs/30/scr8.png" />
                </div>
              </li>
              <li class="mb-2">
                <p><span class="badge bg-danger">Bug</span></p>
                Configured action as "identity-proof" with subtypes (for example
                "id-card", "passport", or "driver-license") breaks the gatherer
                flow. You cannot proceed further to transaction processing after
                uploading the image, notification is shown "Your request is
                still processing, please try again later", API returns 422 "KYC
                request is not fulfilled.", because KYC request expects subtype
                on KYC document filled while KYC document is accepted.
                <div class="mt-4">
                  <img src="../assets/debriefs/30/scr10.png" />
                </div>
                <div class="mt-4">
                  <img src="../assets/debriefs/30/scr11.png" />
                </div>
                <div class="mt-4">
                  <img src="../assets/debriefs/30/scr12.png" />
                </div>
              </li>
              <li class="mb-2">
                <p><span class="badge bg-warning text-dark">Confused</span></p>
                Not able to get selfie in Chrome desktop browser, got "Camera is
                not authorized" error. Chrome configured to ask camera
                permissions by default, but no permissions were requested.
                Didn't work even after explicitly allowing camera for the
                website. Not clear how to enable those permissions, maybe add
                instructions for different browsers. In browser console there is
                an error "Permissions policy violation: camera is not allowed in
                this document"
                <div class="mt-4">
                  <img src="../assets/debriefs/30/scr13.png" />
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
          data-bs-target="#collapse29"
          aria-expanded="true"
          aria-controls="collapse29"
        >
          Project 29: Deposits again
        </button>
      </h2>
      <div
        id="collapse29"
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
                Confusing validation message "Please enter a multiple of 1".
                <div class="mt-4">
                  <img src="../assets/debriefs/29/scr3.png" />
                </div>
              </li>
              <li class="mb-2">
                If customer amounts limits are different from base amount and
                increments, I can select an amount $10095 but cannot enter
                $10095 as a custom amount. Strange UX, not sure if this bug or
                feature.
                <div class="mt-4">
                  <img src="../assets/debriefs/29/scr4.png" />
                </div>
                <div class="mt-4">
                  <img src="../assets/debriefs/29/scr5.png" />
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
  </div>
</template>
<script setup lang="ts"></script>
