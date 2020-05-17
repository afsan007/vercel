/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getPresenters
// ====================================================

export interface getPresenters_getPresenters_Webinars {
  __typename: "Webinar";
  title: string;
  coverImageAddress: string | null;
  keywords: string[] | null;
  _id: GraphQLObjectId;
  presentDate: GraphQLDateTime | null;
}

export interface getPresenters_getPresenters {
  __typename: "Presenter";
  _id: GraphQLObjectId;
  title: string;
  fieldOfStudy: string | null;
  affiliation: string | null;
  profileImage: string | null;
  biography: string | null;
  Webinars: getPresenters_getPresenters_Webinars[] | null;
}

export interface getPresenters {
  /**
   * Get all items of type Presenter by id
   */
  getPresenters: getPresenters_getPresenters[];
}

export interface getPresentersVariables {
  PresenterIds: GraphQLObjectId[];
}
