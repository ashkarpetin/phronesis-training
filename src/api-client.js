import RebillyAPI from 'rebilly-js-sdk';
import { APP_CONFIG } from './config';

export const rebillyApi = RebillyAPI({
  sandbox: true,
  apiKey: APP_CONFIG.apiKey,
});

export async function getCustomers() {
  const { items: customers } = await rebillyApi.customers.getAll({
    data: {
      websiteId: APP_CONFIG.websiteId,
    },
  });
  return customers.map(({ fields }) => fields);
}

export async function getCustomerJwt(customerId) {
  const { fields: authenticationToken } =
    await rebillyApi.customerAuthentication.login({
      data: {
        mode: 'passwordless',
        customerId,
      },
    });

  const { fields: exchangeToken } =
    await rebillyApi.customerAuthentication.exchangeToken({
      token: authenticationToken.token,
      data: {
        acl: [
          {
            scope: {
              organizationId: [APP_CONFIG.organizationId],
            },
            permissions: [
              'PostToken',
              'PostDigitalWalletValidation',
              'StorefrontGetAccount',
              'StorefrontPatchAccount',
              'StorefrontPostPayment',
              'StorefrontGetTransactionCollection',
              'StorefrontGetTransaction',
              'StorefrontGetPaymentInstrumentCollection',
              'StorefrontPostPaymentInstrument',
              'StorefrontGetPaymentInstrument',
              'StorefrontPatchPaymentInstrument',
              'StorefrontPostPaymentInstrumentDeactivation',
              'StorefrontGetWebsite',
              'StorefrontGetInvoiceCollection',
              'StorefrontGetInvoice',
              'StorefrontGetProductCollection',
              'StorefrontGetProduct',
              'StorefrontPostReadyToPay',
              'StorefrontGetPaymentInstrumentSetup',
              'StorefrontPostPaymentInstrumentSetup',
              'StorefrontGetDepositRequest',
              'StorefrontGetDepositStrategy',
              'StorefrontPostDeposit',
              'StorefrontGetPayoutRequestCollection',
              'StorefrontGetPayoutRequest',
              'StorefrontPatchPayoutRequest',
              'StorefrontPostReadyToPayout',
            ],
          },
        ],
        customClaims: {
          websiteId: APP_CONFIG.websiteId,
        },
      },
    });

  return exchangeToken.token;
}
