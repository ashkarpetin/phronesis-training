<template>
  <h1>Debriefs</h1>

  <div class="accordion" id="debriefs">
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button
          class="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapse20"
          aria-expanded="true"
          aria-controls="collapse20"
        >
          Project 20: Casino deposit improvements
        </button>
      </h2>
      <div
        id="collapse20"
        class="accordion-collapse collapse show"
        data-bs-parent="#debriefs"
      >
        <div class="accordion-body">
          <div>
            <strong>Which teammates executed the project?</strong>
            <p>Arif, Alex Sh</p>
          </div>
          <div>
            <strong>What made you smile?</strong>
            <p>
              Team work, the project was straightforward and easy to implement
              :).
            </p>
          </div>
          <div>
            <strong>What did you find confusing?</strong>
            <ul>
              <li class="mb-2">
                Google Places API is not available for any domain like it's
                allowed in Instruments.
                <div class="mt-4">
                  <img src="../assets/debriefs/20/scr1.png" />
                </div>
              </li>
              <li class="mb-2">
                "Play now" text on the button is not a generic text, it's casino
                specific.
                <div class="mt-4">
                  <img src="../assets/debriefs/20/scr2.png" />
                </div>
              </li>
              <li class="mb-2">
                Missing verb in validation error text.
                <div class="mt-4">
                  <img src="../assets/debriefs/20/scr3.png" />
                </div>
              </li>
              <li class="mb-2">
                "a multiple of 1" is not a user friendly error message.
                <div class="mt-4">
                  <img src="../assets/debriefs/20/scr4.png" />
                </div>
              </li>
              <li class="mb-2">
                If you enter an amount in the "Other" field and switch back and
                forth, the amount resets to the base deposit value ($10 in our
                case).
                <div class="mt-4">
                  <img src="../assets/debriefs/20/scr5.png" />
                </div>
              </li>
              <li class="mb-2">
                Google Pay is intended to be a single-click away from the
                result, not a separate page. This was a part of their
                requirements as far as I remember. Can't it be on the select
                payment method view instead?
                <div class="mt-4">
                  <img src="../assets/debriefs/20/scr6.png" />
                </div>
              </li>
              <li class="mb-2">
                A lot of unknown CSP errors when accessing Google Pay.
                <div class="mt-4">
                  <img src="../assets/debriefs/20/scr7.png" />
                </div>
              </li>
              <li class="mb-2">
                Undesired "console.error" with code "google-pay-error" and
                message "CANCELED" call when closing Google Pay modal without
                selecting card.
                <div class="mt-4">
                  <img src="../assets/debriefs/20/scr8.png" />
                </div>
              </li>
              <li class="mb-2">
                Switch animation of brand logos when gateway account supports 5
                or more card brands looks cheap. "Payment Card" probably should
                be named in sentence case "Payment card".
                <div class="mt-4">
                  <img src="../assets/debriefs/20/scr9.png" />
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
          data-bs-target="#collapse19"
          aria-expanded="true"
          aria-controls="collapse19"
        >
          Project 19: VIP customers
        </button>
      </h2>
      <div
        id="collapse19"
        class="accordion-collapse collapse"
        data-bs-parent="#debriefs"
      >
        <div class="accordion-body">
          <div>
            <strong>Which teammates executed the project?</strong>
            <p>Arif, Alex Sh</p>
          </div>
          <div>
            <strong>What made you smile?</strong>
            <p>
              Team work, the project was straightforward and easy to implement
              :).
            </p>
          </div>
          <div>
            <strong>What did you find confusing?</strong>
            <ul>
              <li class="mb-2">
                "Customer updated" event is misssing in
                <a
                  href="https://www.rebilly.com/docs/automations/event-types"
                  target="_blank"
                  >docs</a
                >
                while it is available in rules engine, email notifications and
                webhooks.
              </li>
              <li class="mb-2">
                Rule engine "Lock/Unlock" button has static tooltip "Unlock
                order" even if order is already unlocked.
                <div class="mt-4">
                  <img src="../assets/debriefs/19/scr1.png" />
                </div>
              </li>
              <li class="mb-2">
                Initially we used "Transaction processed" event for tagging VIP
                customers based on revenue, but it was not working as expected,
                and customer was not tagged. It turned out that customer metrics
                are updated on "Transaction approved" event, and "Transaction
                processed" event handlers are executed earlier, and during that
                time customer metrics are not updated yet. It worked, after we
                updated tag rule to use "Customer updated" event.
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
          data-bs-target="#collapse18"
          aria-expanded="true"
          aria-controls="collapse18"
        >
          Project 18: Add digital wallets to deposit flow
        </button>
      </h2>
      <div
        id="collapse18"
        class="accordion-collapse collapse"
        data-bs-parent="#debriefs"
      >
        <div class="accordion-body">
          <div>
            <strong>Which teammates executed the project?</strong>
            <p>Arif, Alex Sh</p>
          </div>
          <div>
            <strong>What made you smile?</strong>
            <p>Team work, no coding required :).</p>
          </div>
          <div>
            <strong>What did you find confusing?</strong>
            <ul>
              <li class="mb-2">
                Gateway account payment card brand icons are duplicating for
                Visa/Electron/Voyager, Switch/Solo, without labels it looks
                buggy. Not sure why are we still showing old legacy brands
                absorbed by Mastercard/Visa?
                <div class="mt-4">
                  <img src="../assets/debriefs/18/scr1.png" />
                </div>
              </li>
              <li class="mb-2">
                Nothing in docs stated there is a toggle to enable digital
                wallets (neither Apple Pay nor Google Pay).
              </li>
              <li class="mb-2">
                Apple Pay & Google Pay docs sole purpose is to describe FramePay
                setup, no Instruments details except a couple of properties in
                configuration reference.
              </li>
              <li class="mb-2">
                No testing Google Pay docs at all, googled this data to complete
                the training.
              </li>
              <li class="mb-2">
                Previously existing or deactivated payment instrument is getting
                reactivated without digital wallet flag, even when created with
                digital wallet token (see
                <a
                  href="https://github.com/Rebilly/rebilly/blob/0f055b08b44b003aa0df0732bc5f8fb08cf57b6e/backend/core/src/Component/PaymentInstrument/PaymentCard/Service/CreatePaymentCard.php#L59C18-L59C36"
                  target="_blank"
                  >CreatePaymentCard</a
                >). Our
                <a
                  href="https://app-sandbox.rebilly.com/phronesis-bill-flow/customers/foobar"
                  target="_blank"
                  >existing customer</a
                >
                already had an attached test card `4111111111111111`, after
                paying with Google Pay test card with same pan, transaction and
                payment instrument were not recognized as digit wallet ones. We
                deactivated the card, but got the same outcome.
                <div class="mt-4">
                  <img src="../assets/debriefs/18/scr2.png" />
                </div>

                We tried with a brand
                <a
                  href="https://app-sandbox.rebilly.com/phronesis-bill-flow/customers/Buzz-Lightyear"
                  target="_blank"
                  >new customer</a
                >
                without any payment cards, and it worked as expected.

                <div class="mt-4">
                  <img src="../assets/debriefs/18/scr3.png" />
                </div>
              </li>
              <li class="mb-2">
                Apple Pay could not be tested without enrolling in Apple
                Developer Program (which is a paid thing, not available in some
                locations, no access found in Bitwarden as well). Later found
                that Apple Developer Program access is managed by Colin and
                handled on an invitation basis, no pre-created Apple ID exists
                as well as info on how to use it. We found a
                <a
                  href="https://rebilly.slack.com/archives/C7U0AHYJ0/p1720152480728579"
                  target="_blank"
                  >Slack thread</a
                >
                with Junyong requesting access and getting a test Apple ID,
                though we have no idea on how to use it properly.
              </li>
              <li class="mb-2">
                We noticed that digital wallet logo is display in Recomm for
                Apple Pay/Google Pay cards but missing on a Instruments payment
                form. Not sure if it is bug or feature. Recomm:
                <div class="mt-4">
                  <img src="../assets/debriefs/18/scr4.png" />
                </div>

                Instruments:
                <div class="mt-4">
                  <img src="../assets/debriefs/18/scr5.png" />
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
          data-bs-target="#collapse17"
          aria-expanded="true"
          aria-controls="collapse17"
        >
          Project 17: Casino payout payment methods
        </button>
      </h2>
      <div
        id="collapse17"
        class="accordion-collapse collapse"
        data-bs-parent="#debriefs"
      >
        <div class="accordion-body">
          <div>
            <strong>Which teammates executed the project?</strong>
            <p>Arif, Alex Sh</p>
          </div>
          <div>
            <strong>What made you smile?</strong>
            <p>Team work, no coding required :).</p>
          </div>
          <div>
            <strong>What did you find confusing?</strong>
            <ul>
              <li class="mb-2">
                As it was not clearly stated which player location to use
                (customer primary address, risk score, risk metadata country, or
                currency driven one) we decided to use currency for simplicity,
                but filters are quite similar for any case.
              </li>
              <li class="mb-2">
                Billing address that can be sent with RTP payload is missing in
                rule engine conditions for the "Ready to payout requested" event
                (<a
                  href="https://www.rebilly.com/catalog/all/storefront-purchases/storefrontpostreadytopayout#storefront-purchases/storefrontpostreadytopayout/t=request&path=billingaddress"
                  target="_blank"
                  >API defs link</a
                >).
                <div class="mt-4">
                  <img src="../assets/debriefs/17/scr4.png" />
                </div>
              </li>
              <li class="mb-2">
                "Ready to payout requested" event conditions include unrelated
                transactions criteria, they should be removed.
                <div class="mt-4">
                  <img src="../assets/debriefs/17/scr5.png" />
                </div>
              </li>
              <li class="mb-2">
                After configuring Ready To Payout action `echeck` method is not
                displayed by Instruments, although it was returned in API
                response.
                <div class="mt-4">
                  <img src="../assets/debriefs/17/scr1.png" />
                </div>
              </li>
              <li class="mb-2">
                Instruments doesn't handle single method UI rendering (API
                returned 2 methods, but `echeck` method is not supported, so
                only Interac is rendered). Method name or method logo are
                missing.
                <div class="mt-4">
                  <img src="../assets/debriefs/17/scr2.png" />
                </div>
              </li>
              <li class="mb-2">
                Currency symbol for amount in data tables might be misleading as
                currency column is not enabled by default. Should we use CA$?
                <div class="mt-4">
                  <img src="../assets/debriefs/17/scr3.png" />
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
          data-bs-target="#collapse16"
          aria-expanded="true"
          aria-controls="collapse16"
        >
          Project 16: Casino payout form
        </button>
      </h2>
      <div
        id="collapse16"
        class="accordion-collapse collapse"
        data-bs-parent="#debriefs"
      >
        <div class="accordion-body">
          <div>
            <strong>Which teammates executed the project?</strong>
            <p>Arif, Alex Sh</p>
          </div>
          <div>
            <strong>What made you smile?</strong>
            <p>
              Team work, payout form implementation was straightforward,
              copy-pasted the code from deposit forms.
            </p>
          </div>
          <div>
            <strong>What did you find confusing?</strong>
            <ul>
              <li class="mb-2">
                For bank transfer payment method, Rebilly instruments shows text
                "After confirmation, you will be prompted to complete your
                purchase securely". Phrase "purchase" seems incorrect for
                payout. Also not sure if alternative method "bank-transfer" can
                be used for payouts at all.
                <div class="mt-4">
                  <img src="../assets/debriefs/16/scr1.png" />
                </div>

                If only bank transfer payment method is available, Rebilly
                instruments doesn't show any payment methods info.
                <div class="mt-4">
                  <img src="../assets/debriefs/16/scr1.1.png" />
                </div>
              </li>
              <li class="mb-2">
                We couldn't find payment cards in our docs to test payout
                outcomes: approved or declined. We tried test card
                4111111111111111 with payout amount $100 USD and it resulted in
                unknown/timeout transaction. Then we checked TestProcessor, and
                found out that there are several undocumented tests cards, and
                magic amounts to get desired payout result. For example, to get
                approved payout send amount less than or equal to $50 USD, to
                get declined send greater $250 USD.
                <div class="mt-4">
                  <img src="../assets/debriefs/16/scr2.png" />
                </div>
              </li>
              <li class="mb-2">
                Payout request events like "Payout request created", "Instrument
                selected", "Payout request canceled", "Payout request allocated"
                are not shown in customer timeline (for example,
                https://app-sandbox.rebilly.com/phronesis-bill-flow/customers/foobar).
                <div class="mt-4">
                  <img src="../assets/debriefs/16/scr3.png" />
                </div>
              </li>
              <li class="mb-2">
                On payout request details page:
                <ul>
                  <li>
                    Exposure column is empty, although API returns the value.
                  </li>
                  <li>
                    Payout time is not accounting for time zone, API returns
                    last payment and payout time in wrong time format without
                    timezone (should be 2024-11-08T10:18:34+00:00 instead of
                    2024-11-08 10:18:34)
                  </li>
                </ul>
                <div class="mt-4">
                  <img src="../assets/debriefs/16/scr4.png" />
                </div>
              </li>

              <li class="mb-2">
                On payout request details page:
                <ul>
                  <li>
                    Gateway column displays only gateway name. Without ID it is
                    hard to identify gateway with the same name.
                  </li>
                  <li>Seems there is a typo in "Amount Requests" text.</li>
                </ul>
                <div class="mt-4">
                  <img src="../assets/debriefs/16/scr5.png" />
                </div>
              </li>
              <li class="mb-2">
                "Re-allocate" button does not re-allocate, but creates new
                allocation instead. Button should be renamed.
                <div class="mt-4">
                  <img src="../assets/debriefs/16/scr6.png" />
                </div>
              </li>
              <li class="mb-2">
                Transaction filters by deposit request ID and payout request ID
                are missing.
              </li>
              <li class="mb-2">
                Total remaining doesn't match total minus previously allocated.
                Declined and unknown transactions are counting towards remaining
                (PayoutRequest::getRemainingAmount - counts even declined
                transactions), but not shown anywhere on the page. On the
                example screen: payout request amount is $1000, remaining is
                shown $250.00. In reality we have: 1 approved payout of $49, 1
                declined of $500, and 1 unknown of $201.
                <div class="mt-4">
                  <img src="../assets/debriefs/16/scr7.png" />
                </div>
              </li>
              <li class="mb-2">
                After payout request is fulfilled an empty page is shown with
                horizontal line without any details. Probably existing request
                allocations with transaction amount, result, and gateway should
                be displayed instead.
                <div class="mt-4">
                  <img src="../assets/debriefs/16/scr8.png" />
                </div>
              </li>
              <li class="mb-2">
                Creating a payout doesn't respect gateway account settings as it
                still picks gateways that should not be available due to
                configuration. Gateway payout settings are not respected at
                allocations screen in Recomm (at least a warning would be great)
                With "Approved payments" mode you can still pick payment
                instrument without payments.
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
          data-bs-target="#collapse15"
          aria-expanded="true"
          aria-controls="collapse15"
        >
          Project 15: Casino deposit 3ds
        </button>
      </h2>
      <div
        id="collapse15"
        class="accordion-collapse collapse"
        data-bs-parent="#debriefs"
      >
        <div class="accordion-body">
          <div>
            <strong>Which teammates executed the project?</strong>
            <p>Arif, Alex Sh</p>
          </div>
          <div>
            <strong>What made you smile?</strong>
            <p>Team work, no coding required :)</p>
          </div>
          <div>
            <strong>What did you find confusing?</strong>
            <ul>
              <li class="mb-2">
                3D Secure settings are displayed when configuring gateway
                account with non payment card methods.
              </li>
              <li class="mb-2">
                Property description from API definitions are not displayed by
                Recomm for gateway account settings and credential fields. In
                API definitions "threeDSecureServer.threeRIInd" has "Indicates
                the type of 3RI request. Values 06 - 11 are only supported in
                3DS 2.2.0." Recomm does not display it.
                <div class="mt-4">
                  <img src="../assets/debriefs/15/scr1.png" />
                </div>
              </li>
              <li class="mb-2">
                Broken link "Test a generic 3DS flow" on
                https://www.rebilly.com/docs/settings/set-up-a-gateway and
                https://www.rebilly.com/docs/settings/3ds pages.
              </li>
              <li class="mb-2">
                3DS pill on transactions details page is not showing 3ds flow
                (challenge or frictionless) and 3ds version used.
                <div class="mt-4">
                  <img src="../assets/debriefs/15/scr2.png" />
                </div>
              </li>
              <li class="mb-2">
                <p>
                  Need more tests cards. We were able to get approved
                  transaction with 3ds frictionless flow using Rebilly test card
                  issued by Canadian bank (5555555555554444).
                </p>
                <p>
                  We were unable to get approved transaction with 3ds challenge
                  flow using Rebilly test card issued by Canadian bank
                  (5105105105105100), it results in 3ds frictionless flow not
                  authenticated.
                </p>
                <p>
                  We used
                  https://docs.3dsecure.io/3dsv2/sandbox.html#challenge-flow
                  docs to generate a test card with bin `555555` (linked to
                  Canada) and last4 xx72 to trigger and test manual 3ds
                  challenge, but after 3ds completion transaction was declined
                  by test sandbox gateway, because this generated card is not
                  supported (as expected). To get approved 3ds transaction for
                  this card we cheated, we checked TestProcessor code, and used
                  magic amount of $71.00.
                </p>
              </li>
              <li class="mb-2">
                After 3ds failed a message is shown "3DS failed or abandoned by
                player". This is incorrect, our pages should not mention any
                relation to casino.
                <div class="mt-4">
                  <img src="../assets/debriefs/15/scr3.png" />
                </div>
              </li>
              <li class="mb-2">
                Clicking on "Choose another payment method" after failed 3ds
                redirected us to hosted payment form the casion website breaking
                the seamless UX. Seems this flow is not supported by Rebilly
                Instruments natively?
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
          data-bs-target="#collapse14"
          aria-expanded="true"
          aria-controls="collapse14"
        >
          Project 14: Casino deposit currency
        </button>
      </h2>
      <div
        id="collapse14"
        class="accordion-collapse collapse"
        data-bs-parent="#debriefs"
      >
        <div class="accordion-body">
          <div>
            <strong>Which teammates executed the project?</strong>
            <p>Arif, Alex Sh</p>
          </div>
          <div>
            <strong>What made you smile?</strong>
            <p>Team work, no coding required :)</p>
          </div>
          <div>
            <strong>What did you find confusing?</strong>
            <ul>
              <li class="mb-2">
                DCC and Sticky gateway badges are glued together without a gap.
                <div class="mt-4">
                  <img src="../assets/debriefs/14/scr1.png" />
                </div>
              </li>
              <li class="mb-2">
                DCC UI is outdated and doesn't match our Revel styles.
                <div class="mt-4">
                  <img src="../assets/debriefs/14/scr2.png" />
                </div>
              </li>
              <li class="mb-2">
                Recomm messes timeline messages order by sorting them only by
                date & time while API results are already sorted in correct
                order.
                <div class="mt-4">
                  <img src="../assets/debriefs/14/scr3.png" />
                </div>
              </li>
              <li class="mb-2">
                Search results are unrelevant, even search by exact title
                results in non relevant results at the top, while exact match is
                somewhere hidden down the scroll. Default search mode "All"
                prioritize API docs, most users wants to search documentation
                instead.
                <div class="mt-4">
                  <img src="../assets/debriefs/14/scr4.png" />
                </div>
              </li>
              <li class="mb-2">
                Successful payment screen doesn't show DCC amount and currency.
                The data is available in API, but not presented.
                <div class="mt-4">
                  <img src="../assets/debriefs/14/scr5.png" />
                </div>
              </li>
              <li class="mb-2">
                It was quite hard to find test payment cards in our docs, all
                results are non relevant almost to the end of results. Google
                search works better with query `Rebilly test card`.
              </li>
              <li class="mb-2">
                Documentation misses other country test cards so there is no way
                to validate other currencies. Maybe using CVV to alter currency
                on some card would help instead of adding huge number of cards
                for each country and currency.
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
          data-bs-target="#collapse13"
          aria-expanded="false"
          aria-controls="collapse13"
        >
          Project 13: Casino deposit payment methods
        </button>
      </h2>
      <div
        id="collapse13"
        class="accordion-collapse collapse"
        data-bs-parent="#debriefs"
      >
        <div class="accordion-body">
          <div>
            <strong>Which teammates executed the project?</strong>
            <p>Alex Sh</p>
          </div>
          <div>
            <strong>What made you smile?</strong>
            <p>Nothing</p>
          </div>
          <div>
            <strong>What did you find confusing?</strong>
            <ul>
              <li class="mb-2">
                Deposit strategy custom minumum amount is 50 and maximum is
                5000. Deposit form show invalid validation errors.
                <div class="mt-4">
                  <img src="../assets/debriefs/13/scr1.png" />
                  <p>
                    Should be "Deposit amount must be greater than or equal to
                    50"
                  </p>
                </div>
                <div class="mt-4">
                  <img src="../assets/debriefs/13/scr2.png" />
                  <p>
                    Should be "Deposit amount must be less than or equal to
                    5000"
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
