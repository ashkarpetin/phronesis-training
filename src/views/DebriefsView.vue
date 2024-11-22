<template>
  <h1>Debriefs</h1>


  <!-- 
  
  

  -->

  <div class="accordion" id="debriefs">
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button
          class="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapse14"
          aria-expanded="true"
          aria-controls="collapse14"
        >
          Project 15: Casino deposit 3ds
        </button>
      </h2>
      <div
        id="collapse14"
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
                  by test sandbox gateway, because this generated card is not supported (as expected). 
                  To get approved 3ds transaction for this card we cheated, we checked TestProcessor code, and used magic amount of $71.00.
                </p>
              </li>
              <li class="mb-2">
                After 3ds failed a message is shown "3DS failed or abandoned by player". This is incorrect, our pages should not mention any relation to casino.
                <div class="mt-4">
                  <img src="../assets/debriefs/15/scr3.png" />
                </div>
              </li>
              <li class="mb-2">
                Clicking on "Choose another payment method" after failed 3ds redirected us to hosted payment form the casion website breaking the seamless UX.
                Seems this flow is not supported by Rebilly Instruments natively?
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
