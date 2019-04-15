import { gql } from 'apollo-server-core';
import { client } from '../base';

describe('userGraphl', () => {
  it('should register a user', async () => {
    const mutation = gql`
    mutation {
        register(name: "paul", email: "admin@example.com", password: "123456"){
          token
        }
    }`;
    const mutationRes = await client.mutate({ mutation });
    expect(mutationRes.data).toEqual({ register: null });
  });
  it('should login a user', async () => {
    const mutation = gql`
    mutation {
        login(email: "admin@example.com", password: "123456"){
          token
        }
    }`;
    const mutationRes = await client.mutate({ mutation });
    expect(mutationRes.data).toEqual({ login: null });
  });
  it('should delete a user', async () => {
    const mutation = gql`
    mutation {
        deleteUser(id: 1){
          count
        }
    }`;
    const mutationRes = await client.mutate({ mutation });
    expect(mutationRes.data).toEqual({ deleteUser: null });
  });
  it('should update a user', async () => {
    const mutation = gql`
    mutation {
        updateUser(id: 1, name: "newName"){
          email
          name
          id
        }
    }`;
    const mutationRes = await client.mutate({ mutation });
    expect(mutationRes.data).toEqual({ updateUser: null });
  });
  it('should list all users', async () => {
    const query = gql`
    {
        users {
          email
          name
          id
          active
        }
    }
    `;
    const clientRes = await client.query({ query });
    expect(clientRes.data).toEqual({
      users: null,
    });
  });
  it('should retrive a user', async () => {
    const query = gql`
    {
        user(id: 1) {
          email
          name
          id
          active
        }
    }
    `;
    const clientRes = await client.query({ query });
    expect(clientRes.data).toEqual({
      user: null,
    });
  });
});
