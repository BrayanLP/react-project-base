import { urls } from '../../utils/constants';
export default {
  state: {},
  reducers: {
    // handle state changes with pure functions
    increment(state, payload) {
      return state + payload;
    },
    list(state, payload) {
      return {
        ...state,
        result: payload
      };
    },
    listObject(state, payload) {
      return {
        ...state,
        resultId: payload
      };
    }
  },
  effects: dispatch => ({
    async fetchData() {
      fetch(`${urls.demo}/users`)
        .then(response => response.json())
        .then(json => {
          console.log(json);
          this.list(json);
        })
        .catch(e => console.error('Something went wrong'));
    },
    async fetchIdData(id) {
      fetch(`${urls.demo}/users/${id}`)
        .then(response => response.json())
        .then(json => this.listObject(json))
        .catch(e => console.error('Something went wrong'));
    },
    async fetchDeleteData(id) {
      //  const params = {
      //    method: 'DELETE',
      //    headers: new Headers( {
      //       'Content-Type': 'application/json'
      // }
      fetch(`${urls.demo}/users/${id}`, {
        method: 'DELETE',
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      })
        .then(response => response.json())
        .then(json => this.listObject(json))
        .catch(e => console.error('Something went wrong'));
    },
    async fetchCreateData(data) {
      fetch(`${urls.demo}/users/${data.id}`, {
        method: 'DELETE',
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        body: data
      })
        .then(response => response.json())
        .then(json => this.listObject(json))
        .catch(e => console.error('Something went wrong'));
    }
  })
};
