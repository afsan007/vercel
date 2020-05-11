/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getWebinars
// ====================================================

export interface getWebinars_getWebinars_Attachment_Iframe {
  __typename: "Webinar_Attachment_Iframe";
  Source: string | null;
  Width: string | null;
  Height: string | null;
}

export interface getWebinars_getWebinars_Attachment {
  __typename: "Webinar_Attachment";
  URL: string | null;
  Title: string | null;
  Kind: string | null;
  Duration: string | null;
  Thumbnail: string | null;
  format: string | null;
  Iframe: getWebinars_getWebinars_Attachment_Iframe | null;
}

export interface getWebinars_getWebinars_presenter {
  __typename: "Webinar_Presenter";
  presenterName: string | null;
  presenterImage: string | null;
  presenterEducation: string | null;
}

export interface getWebinars_getWebinars {
  __typename: "Webinar";
  title: string;
  _id: GraphQLObjectId;
  keywords: string[] | null;
  thumbnail: string | null;
  presentDate: GraphQLDateTime | null;
  description: string | null;
  coverImageAddress: string | null;
  Attachment: getWebinars_getWebinars_Attachment[] | null;
  presenter: getWebinars_getWebinars_presenter | null;
}

export interface getWebinars {
  /**
   * Get all items of type Webinar by id
   */
  getWebinars: getWebinars_getWebinars[];
}

export interface getWebinarsVariables {
  Ids: GraphQLObjectId[];
}
