<template>
  <h1>Debriefs</h1>

  <div class="accordion" id="debriefs">
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button
          class="accordion-button"
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

    <div class="accordion-item">
      <h2 class="accordion-header">
        <button
          class="accordion-button collapsed"
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
  </div>
</template>
<script setup lang="ts"></script>
