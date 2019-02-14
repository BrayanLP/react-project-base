const fetcher = (...params) => {
  return fetch(...params).then(response => {
    if (response.status === 401 || response.status === 400) {
      return response.json().then(error => {
        return error;
      });
    }

    return response;
  });
};

export const request = (method, info, data) => {
  const options = {
    method,
    headers: new Headers({
      Accept: 'application/json',
      'Content-Type': 'application/json'
      //  Authorization: `Bearer ${localStorage.getItem('YACHAY_ACCESS_TOKEN')}`,
    })
  };
  let params = '';
  // Limit
  info.limit === undefined || null
    ? (info.limit = '?')
    : (info.limit = '?limit=' + info.limit + '&');
  // Offset
  info.offset === undefined || null
    ? (info.offset = '')
    : (info.offset = 'offset=' + info.offset + '&');
  // Search By
  info.searchBy === undefined || null
    ? (info.searchBy = '')
    : (info.searchBy = info.searchBy + '__like=');
  // Search Text
  info.searchText === undefined || null
    ? (info.searchText = '')
    : (info.searchText = info.searchText + '&');
  // Includes
  info.includes === undefined || null
    ? (info.includes = '')
    : (info.includes = 'includes=' + info.includes + '&');
  // Sort

  info.sort === undefined || null
    ? (info.sort = '')
    : (info.sort = 'sort=' + info.sort + '&');

  info.isEnable === undefined || null
    ? (info.isEnable = '')
    : (info.isEnable = 'isEnable=' + info.isEnable + '&');
  if (info.params !== undefined || null) {
    for (let index = 0; index < info.params.length; index++) {
      params += info.params[index].id + '=' + info.params[index].name + '&';
    }
  }
  const filtros =
    info.limit +
    info.offset +
    info.searchBy +
    info.searchText +
    info.includes +
    info.sort +
    info.isEnable +
    params;
  // console.log(filtros, info);

  if (method === 'POST' || method === 'PUT' || method === 'DELETE') {
    // console.log(data);
    options.body = JSON.stringify(data);
  }

  return fetcher(info.url + filtros, options).then(response => {
    if (response.status > 400) {
      return response.json().then(errorResponse => {
        throw errorResponse;
      });
    } else if (response.status === 400) {
      throw response;
    }

    return response.json();
  });
};

export const get = url => request('GET', url);

export const post = (url, data) => request('POST', url, data);

export const put = (url, data) => request('PUT', url, data);

export const destroy = url => request('DELETE', url);

export const destroyWithData = (url, data) => request('DELETE', url, data);
