<template>
  <SfSection :title-heading="title" class="section pdc-sec-title pdp-upsell-section">
    <SfLoader :class="{ loading }" :loading="loading">
      <SfCarousel
        ref="bscarousel"
        data-cy="related-products-carousel"
        :settings="pdpUpsellSettings"
        class="carousel"
      >
        <SfCarouselItem v-for="(product, i) in products" :key="i" class="carousel__item">
          <SfProductCard
            :title="productGetters.getName(product)"
            :image="productGetters.getPDPCoverImage(product, 'medium')"
            :link="localePath(`/p/${productGetters.getId(product)}/${productGetters.getSlug(product)}`)"
            :wishlist-icon="false"
            :image-width="295"
            :image-height="295"
            class="pdp-product-card"
          >
            <template #title>
              <!-- RYVIU APP :: COLLECTION-WIDGET-TOTAL -->
              <SfLink
                class="sf-product-card__link"
                :link="localePath(`/p/${productGetters.getId(product)}/${productGetters.getSlug(product)}`)"
              >
                  <h3 class="sf-product-card__title">
                  {{ productGetters.getName(product) }}
                </h3>
              </SfLink>
            </template>
            <template #price>
              <SfPrice
                class="sf-product-card__price"
              >
                <template v-if="productGetters.getPrice(product).special" #special>
                  <ins class="sf-price__special">{{ $n(productGetters.getPrice(product).special, 'currency') }}</ins>
                </template>
                <template #old><span/></template>
                <template v-if="productGetters.getPrice(product).regular > 0" #regular>
                  <del class="sf-price__old">{{ $n(productGetters.getPrice(product).regular, 'currency') }}</del>
                </template>
              </SfPrice>
            </template>
          </SfProductCard>
        </SfCarouselItem>
      </SfCarousel>
    </SfLoader>
  </SfSection>
</template>

<script lang="ts">

import {
  SfCarousel,
  SfProductCard,
  SfSection,
  SfLoader,
  SfLink,
  SfPrice
} from '@storefront-ui/vue';
import { productGetters } from '@vue-storefront/shopify';

export default {
  name: 'RelatedProducts',
  components: {
    SfCarousel,
    SfProductCard,
    SfSection,
    SfLoader,
    SfLink,
    SfPrice
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    products: {
      type: Array,
      required: true
    },
    loading: {
      type: Boolean,
      default: false,
    }
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup() {
    return { productGetters };
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data () {
    return {
      pdpUpsellSettings: {
        type: 'slider',
        perView: 4,
        peek: 0,
        autoplay: false,
        animationDuration: 600,
        gap: 20,
        breakpoints: {
          1023: {
            perView: 3,
            peek: {
              before: 0,
              after: 72
            }
          },
          767: {
            perView: 2,
            peek: {
              before: 0,
              after: 72
            }
          },
          510: {
            perView: 1,
            peek: {
              before: 0,
              after: 72
            }
          }
        }
      }
    };
  }
};
</script>

<style lang="scss">
.pdp-upsell-section {
  margin: 0;
  padding-bottom: 164px;
  @include for-mobile {
    padding-bottom: 40px;
  }
  .sf-section__content {
    margin: 0;
  }
  .sf-carousel {
    @include for-desktop {
      margin: 0 -10px;
    }
  }
  .sf-carousel__controls {
    display: none;
  }
  .sf-carousel__wrapper {
    max-width: 100%;
    margin: 0;
    @include for-desktop {
      padding: 10px;
    }
  }
  .glide__slide {
    height: auto;
  }
}
</style>
