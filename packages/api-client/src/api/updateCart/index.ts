/* eslint-disable @typescript-eslint/no-unused-vars */
import type { CustomQuery } from '@vue-storefront/core';
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default async function updateCart(context, params, _customQuery?: CustomQuery) {
  const { currentCart, product, quantity } = params;
  // Existing Checkout ID
  const checkoutID = currentCart.id;
  // todo remediate ts issue, itemID not used
  // @ts-ignore
  const itemID = product.id;

  // Add an item to the checkout
  // todo remediate typescript issue with line items
  // @ts--ignore
  return await context.client.checkout.updateLineItems(checkoutID, {id: product.id, quantity}).then((checkout) => checkout);
}
