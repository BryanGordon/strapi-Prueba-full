import { query } from './strapi';

const { HOST } = process.env

export function getProducts ({ categoryId }: { categoryId: string }) {
  return query(`products?filters[product_category][slug][$contains]=${categoryId}`)
    .then(res => {
      const { data, meta } = res

      const products = data.map(product => {
        const { name, slug, description, image: rawImage, price } = product
        const image = `${HOST}/${rawImage.url}`
        return { name, slug, description, image, price }
      })

      return { products, pagination: meta.pagination }
    })
}