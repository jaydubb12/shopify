/* istanbul ignore file */
import type {
  Context,
  UseWishlistFactoryParams
} from '@vue-storefront/core';
import {
  useWishlistFactory
} from '@vue-storefront/core';
import type { Ref } from '@nuxtjs/composition-api';
import { ref } from '@nuxtjs/composition-api';
import type { Wishlist, WishlistProduct, Product } from '../types';

// todo remediate type issue with wishlist
// @ts-ignore
export const wishlist: Ref<Wishlist> = ref(null);

const params: UseWishlistFactoryParams<Wishlist, WishlistProduct, Product> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // @ts-ignore
  load: async (context: Context) => {
    console.log('Mocked: loadWishlist');
    return {};
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // @ts-ignore
  addItem: async (context: Context, { currentWishlist, product }) => {
    console.log('Mocked: addToWishlist');
    return {};
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // @ts-ignore
  removeItem: async (context: Context, { currentWishlist, product }) => {
    console.log('Mocked: removeFromWishlist');
    return {};
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // @ts-ignore
  clear: async (context: Context, { currentWishlist }) => {
    console.log('Mocked: clearWishlist');
    return {};
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // @ts-ignore
  isInWishlist: (context: Context, { currentWishlist }) => {
    console.log('Mocked: isInWishlist');
    return false;
  }
};

export default useWishlistFactory<Wishlist, WishlistProduct, Product>(params);
