/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import type { CartGetters, AgnosticPrice, AgnosticTotals, AgnosticCoupon, AgnosticDiscount } from '@vue-storefront/core';
import type { Cart, LineItem } from '@vue-storefront/shopify-api/src/types';
import { formatSelectedAttributeList } from './_utils';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getCartItems = (cart: Cart): LineItem[] => {
  return cart.lineItems;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getCartItemName = (product: any): string => product?.title || 'Product\'s name';
export const getCartItemId = (product: any): string => product.id || '0';
export const getCartItemSlug = (product: any): string => {
  return product.slug || '0';
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getCartItemImage = (product: any): string => {
  if (product.variant && product?.variant?.image !== null) {
    const imgPath = product?.variant?.image?.src.substring(0, product?.variant.image.src.lastIndexOf('.'));
    const imgext = product?.variant?.image?.src.split('.').pop();
    const cartImg = imgPath + '_120x120.' + imgext;
    return cartImg;
  }
  return '';
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getCartItemPrice = (product: any): AgnosticPrice => {
  return {
    regular: product?.variant.compareAtPrice || null,
    special: product?.variant.price || null
  };
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
// todo refactor Type setup for qty
// @ts-ignore
export const getCartItemQty = (product: LineItem): number => product?.quantity;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
// @ts-ignore
export const getCartItemAttributes = (product: LineItem, filterByAttributeName?: string[]) => {
  const formatAttedattributeList = formatSelectedAttributeList(product?.variant.selectedOptions);
  if (formatAttedattributeList.length) {
    const attribArr = [];
    formatAttedattributeList.forEach((attr) => {
      // todo refactor to remediate use of undefined as index type
      // @ts-ignore
      attribArr[attr.name] = attr.value;
    });
    return { ...attribArr };
  }
  return {};
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getCartItemSku = (product: any): string => product?.variant.sku || '-';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
// @ts-ignore
export const getCartTotals = (cart: Cart): AgnosticTotals => {
  if (cart && cart !== null) {
    return {
      // todo refactor type assignment to number
      // @ts-ignore
      total: parseFloat(cart.totalPrice),
      // todo refactor type assignment to number
      // @ts-ignore
      subtotal: parseFloat(cart.subtotalPrice)
    };
  }
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
// @ts-ignore
export const getCartShippingPrice = (cart: Cart): number => 0;

export const getcheckoutURL = (cart: Cart): string => {
  return cart.webUrl || '';
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getCartTotalItems = (cart: Cart): number => {
  if (cart && cart.lineItems && cart.lineItems.length > 0) {
    return cart.lineItems.reduce((n, { quantity }) => n + quantity, 0);
  }
  return 0;
};

export const getFormattedPrice = (price: number) => String(price);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
// @ts-ignore
export const getCoupons = (cart: Cart): AgnosticCoupon[] => [];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
// @ts-ignore
export const getDiscounts = (cart: Cart): AgnosticDiscount[] => [];

const cartGetters: CartGetters<Cart, LineItem> = {
  getTotals: getCartTotals,
  getShippingPrice: getCartShippingPrice,
  getItems: getCartItems,
  getItemName: getCartItemName,
  getItemImage: getCartItemImage,
  getItemId: getCartItemId,
  getItemSlug: getCartItemSlug,
  getItemPrice: getCartItemPrice,
  getItemQty: getCartItemQty,
  getItemAttributes: getCartItemAttributes,
  getItemSku: getCartItemSku,
  getFormattedPrice,
  getTotalItems: getCartTotalItems,
  getCoupons,
  getDiscounts,
  getcheckoutURL
};

export default cartGetters;
