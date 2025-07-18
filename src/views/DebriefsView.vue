<template>
  <h1>Debriefs</h1>

  <div class="accordion" id="debriefs">
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button
          class="accordion-button"
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
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button
          class="accordion-button collapsed"
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
                Clicking on "External identifiers" link refreshes the Journal
                entry data tables for some reason.
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
  </div>
</template>
<script setup lang="ts"></script>
