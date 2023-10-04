// ./queries/get-page-by-slug.js

export const GetPageBySlug = gql`
  query ($slug: String) {
    Page(slug: $slug) {
      _id
      page_header { 
        _id
        logo { 
          _id
          url
        }
      }
      title
      _slug
      stack {
        __typename
        ... on ImageAndText {
          image {
            url(width: 800)
          }
          _id
        }
        ... on TextComponent {
          paragraph
          _id
          paragraph_color
        }
        ... on ImageGrid {
          _id
          asset_grid {
            url(width: 800)
            name
          }
        }
        ... on RichText {
          _id
          title
          paragraph
        }
        ... on WideImage {
          _id
          asset {
            url(width: 1600)
            name
          }
        }
      }
    }
  }
`;
