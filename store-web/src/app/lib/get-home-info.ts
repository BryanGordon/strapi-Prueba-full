import { query } from './strapi';
const { HOST } = process.env

export function getHomeInfo() {
  return query("home?populate=cover")
    .then(res => { 
      const { title, description, cover } = res.data 
      const image = `${HOST}/${cover.url}`
      console.log(image)
      return { title, description, image}
    })
}