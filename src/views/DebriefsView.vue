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
            <p>Team work</p>
          </div>
          <div>
            <strong>What did you find confusing?</strong>
            <ul>
              <li>DCC and Sticky gateway badges are glued togather without a gap.<br><img src="../assets//debriefs/14/scr1.png"/></li>
              <li>DCC UI is outdated and doesn't match our Revel styles.<br><img src="../assets//debriefs/14/scr2.png"/></li>
              <li>Recomm messes timeline messages order by sorting them only by date & time while API results are already sorted as required.<br><img src="../assets//debriefs/14/scr3.png"/></li>
              <li>Search results are unrelevant, event search by exact title results in non relevant results at the top, while exact match is somewhere hidden down the scroll.<br><img src="../assets//debriefs/14/scr4.png"/></li>
              <li>Successful payment screen doesn't show DCC amount and currency. The data is available in API, but not presented.<br><img src="../assets//debriefs/14/scr5.png"/></li>
              <li>It was quite hard to find test payment cards in our docs, all results are non relevant almost to the end of results. Google search works better with query `Rebilly test card`.</li>
              <li>Documentation misses other country test cards so there is no way to validate other currencies. Maybe using CVV to alter currency on some card would help instead of adding huge number of cards for each country and currency.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
