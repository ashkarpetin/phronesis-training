<template>
  <h1>Debriefs</h1>

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
          Project 14: Casino deposit currency
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
                somewhere hidden down the scroll. Default search mode "All" prioritize API docs, most users wants to search documentation instead.
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
