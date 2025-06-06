<template>
  <h1>Debriefs</h1>

  <div class="accordion" id="debriefs">
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button
          class="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapse42"
          aria-expanded="true"
          aria-controls="collapse42"
        >
          Project 42: Email invoices
        </button>
      </h2>
      <div
        id="collapse42"
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
              Team work, we've configured email notifications and confirmed that
              payment link (placeholder "invoice.paymentFormUrl") works. For the
              invice issued notification we used condition
              "/invoice/type:initial".
            </p>
          </div>
          <div>
            <strong>What did you find confusing?</strong>
            <ul>
              <li class="mb-2">
                <p><span class="badge bg-warning text-dark">Confused</span></p>
                There is no placeholder for organization logo, so we used
                placeholder "invoice.website.logoUrl" for website logo URL
                instead.
              </li>
              <li class="mb-2">
                <p><span class="badge bg-warning text-dark">Confused</span></p>
                Invoice paid event payload and invoice entity payload do not
                contain any order details like renewal time, so there is no way
                to include the date of the next renewal payment in email body.
              </li>
              <li class="mb-2">
                <p><span class="badge bg-info text-dark">Suggestion</span></p>
                Perhaps we should add templates for all email notifications
                events or most used ones, so users can use them, change them,
                instead of trying to figure out which placeholder to use.
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
          data-bs-target="#collapse41"
          aria-expanded="true"
          aria-controls="collapse41"
        >
          Project 41: Taxes
        </button>
      </h2>
      <div
        id="collapse41"
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
            <p>Team work, taxes worked, we did it pretty fast.</p>
          </div>
          <div>
            <strong>What did you find confusing?</strong>
            <ul>
              <li class="mb-2">
                <p><span class="badge bg-warning text-dark">Confused</span></p>
                Rebilly tax
                <a href="https://www.rebilly.com/docs/settings/taxes">docs</a>
                and Recomm are not clear enough about automatic tax calculation
                and tax locations feature. Our organization country was not set
                to US, and tax location was not displayed. Then we found another
                another guide
                <a
                  href="https://www.rebilly.com/docs/settings/organizations-and-websites#manage-tax-locations"
                  >here</a
                >
                which mentions "This feature is only available to US-based
                organizations.", after chaning country to US, we were able to
                configure tax locations.
              </li>
              <li class="mb-2">
                <p><span class="badge bg-danger">Bug</span></p>
                Broken links on the
                <a href="https://www.rebilly.com/docs/settings/taxes">docs</a>
                page:
                <p>
                  1. Has description "Manage the tax ID numbers of an
                  organization" but leads to tax locations.
                </p>
                <p>2. Broken link anchor.</p>
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
          data-bs-target="#collapse40"
          aria-expanded="true"
          aria-controls="collapse40"
        >
          Project 40: Lead source attribution
        </button>
      </h2>
      <div
        id="collapse40"
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
              Team work, we were able to record lead source attributes via
              hosted payment form and Instruments library by adding UTM fields
              to the query string.
            </p>
          </div>
          <div>
            <strong>What did you find confusing?</strong>
            <ul>
              <li class="mb-2">
                <p><span class="badge bg-warning text-dark">Confused</span></p>
                Rebilly docs mention that FramePay supports lead source. But as
                we tested and confirmed it is supported by Instruments library
                and hosted payment form too. So it is not documented well in our
                docs, and is confusing for users.
                <p>
                  <a
                    href="https://www.rebilly.com/docs/tutorials/lead-source-attribution#integration"
                    >https://www.rebilly.com/docs/tutorials/lead-source-attribution#integration</a
                  >
                </p>
                <p>
                  This page is located in the FramePay section of the docs so it
                  hard to find which attributes are supported.
                  <a href="https://www.rebilly.com/docs/dev-docs/lead-sources"
                    >https://www.rebilly.com/docs/dev-docs/lead-sources</a
                  >
                </p>
              </li>
              <li class="mb-2">
                <p><span class="badge bg-danger">Bug</span></p>
                Seems Cashier library and deposit form does not support lead
                source attribution.
              </li>
              <li class="mb-2">
                <p><span class="badge bg-danger">Bug</span></p>
                Lead source attribute values are being truncated too severely,
                resulting in very short entries in Recomm.
                <div class="mt-4">
                  <img src="../assets/debriefs/40/scr1.png" />
                </div>
              </li>
              <li class="mb-2">
                <p><span class="badge bg-warning text-dark">Confused</span></p>
                Data export URL in email may be adjusted to include organization
                ID for multi-organization merchants.
                <div class="mt-4">
                  <img src="../assets/debriefs/40/scr2.png" />
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
          data-bs-target="#collapse39"
          aria-expanded="true"
          aria-controls="collapse39"
        >
          Project 39: Change orders
        </button>
      </h2>
      <div
        id="collapse39"
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
                "Edit items" button is hard to find on the page. We forgot how
                to create a change quoted and it took us some time to figure out
                how to create it. Maybe place the button to a more visible place
                to the right button section?
                <div class="mt-4">
                  <img src="../assets/debriefs/39/scr1.png" />
                </div>
              </li>
              <li class="mb-2">
                <p><span class="badge bg-warning text-dark">Confused</span></p>
                It is not obvious that "Save" and "Create a quote" buttons
                produce different results. There probably should be a checkbox
                to select edit items via quote or directly and single button
                "Save".
                <div class="mt-4">
                  <img src="../assets/debriefs/39/scr2.png" />
                </div>
              </li>
              <li class="mb-2">
                <p><span class="badge bg-warning text-dark">Confused</span></p>
                We've replaced one item with another but timeline shows like
                there was 2 items (Item #1 and Item #2), not very obvious. Maybe
                it is intentional? Or is it bug?
                <div class="mt-4">
                  <img src="../assets/debriefs/39/scr3.png" />
                </div>
              </li>
              <li class="mb-2">
                <p><span class="badge bg-danger">Bug</span></p>
                Recomm shows "Subscription not found" error toast after creating
                an order which confusing. This happens because of the order ETL
                delay in sandbox, OS index is not updated yet, so GET call
                "/experimental/subscriptions/ord_01JV9YH0PGSP30E8TNY5CPZGMV/summary-metrics"
                returns 404. But this should be handled gracefully by Recomm,
                and not result in such error.
                <div class="mt-4">
                  <img src="../assets/debriefs/39/scr4.png" />
                </div>
                <div class="mt-4">
                  <img src="../assets/debriefs/39/scr5.png" />
                </div>
              </li>
              <li class="mb-2">
                <p><span class="badge bg-danger">Bug</span></p>
                After customer accepted and paid quote, the order autopay has
                been disabled. Quote page does not indicated that.
                <div class="mt-4">
                  <img src="../assets/debriefs/39/scr6.png" />
                </div>
                <div class="mt-4">
                  <img src="../assets/debriefs/39/scr7.png" />
                </div>
              </li>
              <li class="mb-2">
                <p><span class="badge bg-danger">Bug</span></p>
                We upgraded to expert training, then downgraded back to beginner
                with effective time "now" and it produced strange result.
                <div class="mt-4">
                  <p>Payment page shows a negative amount with error</p>
                  <img src="../assets/debriefs/39/scr8.png" />
                </div>
                <div class="mt-4">
                  <p>
                    Quotation interim invoice shows negative subtotal and $0
                    amount due
                  </p>
                  <img src="../assets/debriefs/39/scr9.png" />
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
