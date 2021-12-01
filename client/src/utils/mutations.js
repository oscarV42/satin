import { gql } from '@apollo/client';

export const LOGIN_USER = gql `
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_POST = gql`
  mutation addPost($img: String, $postBody: String!, $postAuthor: String!) {
    addPost(img: $img, postBody: $postBody, postAuthor: $postAuthor) {
      _id
      postBody
      postAuthor
      postDate
      comments {
        _id
        commentText
      }
      likes
      img
    }
  }
`;

export const REMOVE_POST = gql`
  mutation removePost($postId: ID!) {
    removePost(postId: $postId) {
      _id
      postBody
      postAuthor
      postDate
      comments {
        _id
        commentText
      }
      likes
      img
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment(
    $postId: ID!
    $commentText: String!
    $commentAuthor: String!
  ) {
    addComment(
      postId: $postId
      commentText: $commentText
      commentAuthor: $commentAuthor
    ) {
      _id
      postBody
      postAuthor
      postDate
      comments {
        _id
        commentText
        createdAt
      }
      likes
      img
    }
  }
`;

export const REMOVE_COMMENT = gql`
  mutation removePost(
    $postId: ID!
    $commentId: ID!
  ) {
    removePost(
      postId: $postId
      commentId: $commentId
    ) {
      _id
      postBody
      postAuthor
      postDate
      comments {
        _id
        commentText
        createdAt
      }
      likes
      img
    }
  }
`;

export const ADD_CONVO = gql `
  mutation addConvo($members: Array!) {
    addConvo(members: $members) {
      _id
      members
      messages {
        sender
        text
        createdAt
      }
    }
  }
`;

export const ADD_MESSAGE = gql`
  mutation addMessage($convoId: ID!, $sender: String!, $text: String!) {
    addMessage(convoId: $convoId, sender: $sender, text: $text) {
      _id
      members
      messages {
        sender
        text
        createdAt
      }
    }
  }
`;

export const REMOVE_MESSAGE = gql`
  mutation removeMessage($convoId: ID!, $messageId: ID!) {
    removeMessage(convoId: $convoId, messageId: $messageId) {
      _id
      members
      messages {
        sender
        text
        createdAt
      }
    }
  }
`;