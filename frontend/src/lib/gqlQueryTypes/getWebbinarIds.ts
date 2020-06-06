/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getWebbinarIds
// ====================================================

export interface getWebbinarIds_search_items {
  __typename: "Collection" | "Webinar" | "Presenter" | "General" | "RootCollection" | "_BaseItem";
  _id: GraphQLObjectId;
  title: string;
}

export interface getWebbinarIds_search {
  __typename: "SearchResults";
  items: getWebbinarIds_search_items[];
  total: number;
}

export interface getWebbinarIds {
  search: getWebbinarIds_search;
}

export interface getWebbinarIdsVariables {
  parentId: GraphQLObjectId;
  offset: number;
  limit: number;
}
