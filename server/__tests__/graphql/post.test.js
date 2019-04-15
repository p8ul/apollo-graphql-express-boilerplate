import { gql } from 'apollo-server-core';
import { client } from '../base';

describe('postGraphl', () => {
  it('should add a post', async () => {
    const mutation = gql`
    mutation {
        addPost(title: "title", body: "body"){
          title,
          id
        }
    }`;
    const mutationRes = await client.mutate({ mutation });
    expect(mutationRes.data).toEqual({ addPost: null });
  });

  it('should update a post', async () => {
    const mutation = gql`
    mutation {
        updatePost(id: 4, title: "title", body: "body"){
          title,
          id
        }
    }`;
    const mutationRes = await client.mutate({ mutation });
    expect(mutationRes.data).toEqual({ updatePost: null });
  });
  it('should list all posts', async () => {
    const query = gql`
    {
        posts {
          title
          body
        }
    }
    `;
    const clientRes = await client.query({ query });
    expect(clientRes.data).toEqual({
      posts: null,
    });
  });
});
