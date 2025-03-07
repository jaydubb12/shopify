/* eslint-disable @typescript-eslint/no-unused-vars */
import type { CustomQuery } from '@vue-storefront/core';
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
/**
 *
 * @param context
 * @param params
 * @param _customQuery
 */
export default async function addToCart(context, params, _customQuery?: CustomQuery) {
  const { currentCart, product, quantity, customQuery } = params;
  // Existing Checkout ID
  const checkoutID = currentCart.id;
  // Items to be add to cart
  const lineItemsToAdd = [{
    variantId: product.variantBySelectedOptions && product.variantBySelectedOptions !== null ? product.variantBySelectedOptions.id : product.variantId,
    quantity,
    customAttributes: customQuery
  }];
  // Add an item to the checkout
  return await context.client.checkout.addLineItems(checkoutID, lineItemsToAdd).then((checkout) => checkout);
}
