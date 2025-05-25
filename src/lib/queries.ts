export const getAllCategoriesQuery = `*[_type == "category"]{
  _id,
  title,
  "slug": slug.current,
  description
}`;

export const fetchAllPostsQuery = `
  *[_type == "post"]{
    _id,
    title,
    "slug": slug.current,
    excerpt,
    postType,
    "author": {
      "name": author->name,
      "image": author->image
    },
    "categories": categories[]->title,
    publishedAt,
    "mainImage": mainImage.asset->url,
    redirectUrl
  }
`;

export const fetchAllSkillsQuery = `*[_type == "skill"] | order(_createdAt desc){
    _id,
    name,
    icon {
      asset->{
        _id,
        url
      }
    }
  }`;


  export const fetchCertificationsQuery = `*[_type == "certification"] | order(date desc){
    _id,
    name,
    issuer,
    date,
    certificateImage,
    certificateLink,
    highlighted
  }`

  export const fetchProjectsQuery = `*[_type == "project"] | order(_createdAt desc){
    _id,
    title,
    image,
    description,
    link,
    tags
  }`

  export const fetchWorkExperienceQuery = `*[_type == "workExperience"] | order(_createdAt desc){
    _id,
    company,
    role,
    duration,
    description
  }` 