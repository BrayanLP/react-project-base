const urlsList = {
  develop: {
    security: 'http://develop.rcp.pe/api/v1',
    sonqo: 'http://develop.rcp.pe/dashboard/api/v1',
    socket: 'http://localhost:8000',
    bo: 'http://172.20.60.62:8011/bo/api/v1',
    customers: 'http://172.20.60.62:8012/bo/api/v1',
    mixLogin: 'http://develop.rcp.pe/login',
    demo: 'https://jsonplaceholder.typicode.com'
    //   pe: 'https://pre1a.pagoefectivo.pe',
    //   culqi_key: 'pk_test_DDrkoWhUkNV12dx9'
  },
  staging: {
    security: 'http://staging.rcp.pe/api/v1',
    sonqo: 'http://staging.rcp.pe/dashboard/api/v1',
    socket: 'http://172.20.60.62:8000',
    bo: 'http://172.20.60.62:8011/bo/api/v1',
    customers: 'http://172.20.60.62:8012/bo/api/v1',
    mixLogin: 'http://staging.rcp.pe/login',
    demo: 'https://jsonplaceholder.typicode.com'
    //   pe: 'https://pre1a.pagoefectivo.pe',
    //   culqi_key: 'pk_test_DDrkoWhUkNV12dx9'
  },
  // pre_do: {
  //   security: 'http://pre_do.rcp.pe/api/v1',
  //   sonqo: 'http://pre_do.rcp.pe/dashboard/api/v1',
  //   bo: 'http://pre_do.rcp.pe/bo/api/v1',
  //   mixLogin: 'http://pre_do.rcp.pe/login'
  //   //   pe: 'https://pre1a.pagoefectivo.pe',
  //   //   culqi_key: 'pk_test_DDrkoWhUkNV12dx9'
  // },
  pre_production: {
    security: 'http://pre_production.rcp.pe/api/v1',
    sonqo: 'http://pre_production.rcp.pe/dashboard/api/v1',
    socket: 'http://172.20.60.65:8000',
    bo: 'http://172.20.60.65:8011/bo/api/v1',
    customers: 'http://172.20.60.65:8012/bo/api/v1',
    mixLogin: 'http://pre_production.rcp.pe/login'
    //   pe: 'https://pre1a.pagoefectivo.pe',
    //   culqi_key: 'pk_test_DDrkoWhUkNV12dx9'
  },
  production: {
    security: 'https://production.yachay.pe/api/v1',
    sonqo: 'https://production.yachay.pe/dashboard/api/v1',
    socket: 'https://production.yachay.pe:8000',
    bo: 'https://production.yachay.pe/bo/api/v1',
    mixLogin: 'https://production.yachay.pe/login'
    //   pe: 'https://cip.pagoefectivo.pe',
    //   culqi_key: 'pk_live_PkTwBNbRWC7CUw09'
  }
};

export const urls =
  urlsList[
    process.env.REACT_APP_URL_ENV ? process.env.REACT_APP_URL_ENV : 'staging'
  ];
