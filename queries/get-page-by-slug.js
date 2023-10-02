// ./queries/get-page-by-slug.js

export const GetPageBySlug = gql`
  query ($slug: String) {
    Page(slug: $slug) {
      _id
      title
      _slug
      page_header { 
        _id
        header
        banner_image { 
          _id
          url
        }
        header_icon { 
          _id
          url
        }
      }
      # Retrieve the stack and two components: 
      # Page Header and Image and Text 
      stack {
        __typename
        ... on PageHeader  {
          heading
          cta_url
          cta_label
          image {
            url(width: 1600)
          }
          _id
          text
        }
        ... on ImageAndText {
          image {
            url(width: 800)
          }
          text
          title
          image_position
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
