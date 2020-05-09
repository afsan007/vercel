import gql from 'graphql-tag';

export const GET_WEBINARS = gql`
  query getWebinars($Ids: [ObjectId!]!) {
    getWebinars(ids: $Ids ) {
        title
        _id
        keywords
        thumbnail      
        presentDate
        coverImageAddress
        Attachment{
          URL
          Title
          Kind
          Duration
          Thumbnail
          Iframe{
             Source
             Width
             Height
          }
        }  
        presenter{
          presenterName
          presenterImage
        }
  }
}
`;