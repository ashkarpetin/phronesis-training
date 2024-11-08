<template>
  <h1>Debriefs</h1>

  <div class="accordion" id="accordionExample">
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
          TODO
        </button>
      </h2>
      <div
        id="collapse14"
        class="accordion-collapse collapse show"
        data-bs-parent="#accordionExample"
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
              <li>item 1</li>
              <li>item 2</li>
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
        data-bs-parent="#accordionExample"
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
              <li class="mb-2">Deposit strategy custom minumum amount is 50 and maximum is 5000. Deposit form show invalid validation errors.
                <div class="mt-4">
                  <img src="../assets/debriefs/13/scr1.png" class="img-fluid" style="max-width: 640px">
                  <p>Should be "Deposit amount must be greater than or equal to 50"</p>
                </div>
                <div class="mt-4">
                  <img src="../assets/debriefs/13/scr2.png" class="img-fluid" style="max-width: 640px">
                  <p>Should be "Deposit amount must be less than or equal to 5000"</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
