import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const sanityClient = createClient({
  projectId: 'cq69q11x',
  dataset: 'production',
  apiVersion: '2024-05-22',
  useCdn: true,
})


const builder = imageUrlBuilder(sanityClient)

export function urlFor(source: any) {
  return builder.image(source)
}