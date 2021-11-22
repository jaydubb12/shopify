// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const enhanceProduct = (productResponse: any[]) => {
  if (Object.keys(productResponse).length === 0) return;
  return productResponse.map((product) => ({
    ...product,
    name: product.variantBySelectedOptions && true ? product.variantBySelectedOptions.title : product.title,
    images: product?.images,
    price: {
      original: product.variantBySelectedOptions && true ? product.variantBySelectedOptions?.compareAtPriceV2?.amount : product.variants[0].compareAtPrice,
      current: product.variantBySelectedOptions && true ? product.variantBySelectedOptions?.priceV2?.amount : product.variants[0].price
    },
    available: product.variantBySelectedOptions && true ? product.variantBySelectedOptions?.quantityAvailable : product.variants[0].available,
    productType: product.productType,
    options: product.options,
    _id: product.id,
    variantId: product.variants[0].id,
    _description: product.description,
    _descriptionHtml: product.descriptionHtml,
    _categoriesRef: [],
    _slug: product.handle,
    _coverImage: product?.images[0],
    _mainPrice: product.variants[0].price
  }));
};

export default enhanceProduct;
