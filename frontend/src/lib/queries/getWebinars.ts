import gql from 'graphql-tag';

export const GET_WEBINARS = gql`
  query getWebinars($Ids: [ObjectId!]!) {
    getWebinars(ids: $Ids ) {
        title
        _id
        keywords
        thumbnail      
        presentDate
        description
        coverImageAddress
        Attachment{
          URL
          Title
          Kind
          Duration
          Thumbnail
          format
          Iframe{
             Source
             Width
             Height
          }
        }  
        presenters{
          _id
          title
          profileImage
          affiliation
        }
  }
}
`;