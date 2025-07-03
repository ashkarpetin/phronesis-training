<template>
  <h1>Debriefs</h1>

  <div class="accordion" id="debriefs">
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button
          class="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapse46"
          aria-expanded="true"
          aria-controls="collapse46"
        >
          Project 46: Revenue recognition
        </button>
      </h2>
      <div
        id="collapse46"
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
              Team work, it did not take long to complete, journal records are
              created automatically.
            </p>
          </div>
          <div>
            <strong>What did you find confusing?</strong>
            <ul>
              <li class="mb-2">
                <p><span class="badge bg-warning text-dark">Confused</span></p>
                Revenue recognition in
                <a
                  href="https://www.rebilly.com/docs/tutorials/tax-management#revenue-recognition"
                  target="_blank"
                  >docs</a
                >
                is placed under "Tax management", it seems belongs to
                accounting.
              </li>
              <li class="mb-2">
                <p><span class="badge bg-danger">Bug</span></p>
                A lot of duplicate columns in journal entries data tables.
                <div class="mt-4">
                  <img src="../assets/debriefs/46/scr1.png" />
                </div>
              </li>
              <li class="mb-2">
                <p><span class="badge bg-info text-dark">Suggestion</span></p>
                Maybe allow to assign journal accounts for products on journal
                accounts settings page. Otherwise, you need to create all
                accounts first, then go to product, find each product and assign
                accounts for each product. Right now journal accounts settings
                page seems not very useful, you can change name and description
                only, no information on how many entries, etc.
                <div class="mt-4">
                  <img src="../assets/debriefs/46/scr2.png" />
                </div>
              </li>
              <li class="mb-2">
                <p><span class="badge bg-danger">Bug</span></p>
                Error "Something went wrong, please try again or contact
                support" displayed after clicking "Export as CSV" button on
                Revenue Audit data tables. No API request is made.
                <div class="mt-4">
                  <img src="../assets/debriefs/46/scr3.png" />
                </div>
              </li>
              <li class="mb-2">
                <p><span class="badge bg-warning text-dark">Confused</span></p>
                Clunky UI to select customer on manual journal record creation,
                there is no autocomplete. You have to enter search word, and
                then click "Search".
                <div class="mt-4">
                  <img src="../assets/debriefs/46/scr4.png" />
                </div>
              </li>
              <li class="mb-2">
                <p><span class="badge bg-warning text-dark">Confused</span></p>
                Clicking on "External identifiers" link refreshes the Journal entry data tables for some reason.
                <div class="mt-4">
                  <img src="../assets/debriefs/46/scr5.png" />
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
          data-bs-target="#collapse45"
          aria-expanded="true"
          aria-controls="collapse45"
        >
          Project 45: Extending resources
        </button>
      </h2>
      <div
        id="collapse45"
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
            <p>Team work, we've completed it pretty fast.</p>
          </div>
          <div>
            <strong>What did you find confusing?</strong>
            <ul>
              <li class="mb-2">
                <p><span class="badge bg-warning text-dark">Confused</span></p>
                "Label" label in Recomm is confusing, because we have only
                "name" in the API, and it does not allow spaces. If you fill
                label with spaces like "My test field" Recomm will save it under
                "My-test-field" name which is not obvious. So we probably should
                not silently convert spaces to hyphens, and properly validate
                label and show error message instead.
                <p>
                  <a
                    href="https://www.rebilly.com/catalog/all/custom-fields/putcustomfield#custom-fields/putcustomfield/t=request&in=path&path=name"
                    target="_blank"
                    >API docs</a
                  >
                </p>
                <div class="mt-4">
                  <img src="../assets/debriefs/45/scr1.png" />
                </div>
              </li>
              <li class="mb-2">
                <p><span class="badge bg-danger">Bug</span></p>
                Additional custom field schema "Required" seems does not work.
                We created a customer and order without any custom fields, and
                did not get any errors.
                <div class="mt-4">
                  <img src="../assets/debriefs/45/scr2.png" />
                </div>
                <div class="mt-4">
                  <img src="../assets/debriefs/45/scr3.png" />
                </div>
              </li>
              <li class="mb-2">
                <p><span class="badge bg-danger">Bug</span></p>
                We have custom field of array type with allowed values defined.
                Clicking on "Add default value" clears allowed values, and seems
                breaks the form, the button does not work after that.
                <div class="mt-4">
                  <img src="../assets/debriefs/45/scr4.png" />
                </div>
                <div class="mt-4">
                  <img src="../assets/debriefs/45/scr5.png" />
                </div>
              </li>
              <li class="mb-2">
                <p><span class="badge bg-danger">Bug</span></p>
                Additional custom field schema "Default value" seems does not
                work. We created a customer and order without any custom fields,
                and no default values were set.
                <div class="mt-4">
                  <img src="../assets/debriefs/45/scr6.png" />
                </div>
                <div class="mt-4">
                  <img src="../assets/debriefs/45/scr7.png" />
                </div>
              </li>
              <li class="mb-2">
                <p><span class="badge bg-danger">Bug</span></p>
                Unable to clear default value for boolean type field. There is a
                clear difference between those custom fields values:
                <ul>
                  <li>"{"customFields":{"isActive":true}}"</li>
                  <li>"{"customFields":{"isActive":false}}"</li>
                  <li>"{"customFields":{}}"</li>
                </ul>
                <div class="mt-4">
                  <img src="../assets/debriefs/45/scr8.png" />
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
          data-bs-target="#collapse44"
          aria-expanded="true"
          aria-controls="collapse44"
        >
          Project 44: Cancellations (again)
        </button>
      </h2>
      <div
        id="collapse44"
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
              Team work, with enabled feature a credit memo is created
              automatically.
            </p>
          </div>
          <div>
            <strong>What did you find confusing?</strong>
            <ul>
              <li class="mb-2">
                <p><span class="badge bg-warning text-dark">Bug</span></p>
                Incorrect validation error message, should be "Amount must be
                less than or equal to 50" (GH ticket:
                https://github.com/Rebilly/rebilly/issues/13019).
                <div class="mt-4">
                  <img src="../assets/debriefs/44/scr1.png" />
                </div>
              </li>
              <li class="mb-2">
                <p><span class="badge bg-warning text-dark">Bug</span></p>
                Sometimes validation error does not show up, and nothing happens
                when clicking on "Apply credit memo" button.
                <div class="mt-4">
                  <img src="../assets/debriefs/44/scr2.png" />
                </div>
              </li>
              <li class="mb-2">
                <p><span class="badge bg-warning text-dark">Confused</span></p>
                Credit memo are always applied automatically to renewal invoice
                during autopay, and there is no way to disable it for particular
                credit memo or for all credit memos. So we might want to
                introduce a setting on organization level and on credit memo
                level.
              </li>
              <li class="mb-2">
                <p><span class="badge bg-info text-dark">Suggestion</span></p>
                It would be nice to render available (issued and partially
                applied) credit memo list and balance on customer details page
                instead of opening a credit memo segment and filter by customer
                ID. Right now credit memo events are only shown in customer
                timeline but it is hard to track them.
              </li>
              <li class="mb-2">
                <p><span class="badge bg-warning text-dark">Confused</span></p>
                When credit memo allocation is removed from invoice it is not
                shown on invoice timeline.
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
          data-bs-target="#collapse43"
          aria-expanded="true"
          aria-controls="collapse43"
        >
          Project 43: Cancellations
        </button>
      </h2>
      <div
        id="collapse43"
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
                Checkbox "Add pro rata credit" seems should be placed near
                "Now".
                <div class="mt-4">
                  <img src="../assets/debriefs/43/scr1.png" />
                </div>
              </li>
              <li class="mb-2">
                <p><span class="badge bg-info text-dark">Confused</span></p>
                When cancelling subscription with pro rata credit a cancellation
                invoice with negative amount is created. Credit memo should be
                created automatically or there should be way to issue a refund
                from the invoice.
                <div class="mt-4">
                  <img src="../assets/debriefs/43/scr2.png" />
                </div>
              </li>
              <li class="mb-2">
                <p><span class="badge bg-danger">Bug</span></p>
                Recomm shows invoice total "0" although total is negative
                "-3.24".
                <div class="mt-4">
                  <img src="../assets/debriefs/43/scr2.png" />
                </div>
              </li>
              <li class="mb-2">
                <p><span class="badge bg-warning text-dark">Confused</span></p>
                Seems credit memo are always applied automatically to renewal
                invoice during autopay, and there is no way to disable it for
                particular credit memo or for all credit memo. For example, what
                if merchant does not want credit memo to be applied
                automatically?
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
