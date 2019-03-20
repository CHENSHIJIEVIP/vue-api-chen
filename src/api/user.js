import axios from './index'

const getUser = ({id}) => {
    return axios.request({
      url: '/v2/movie/top250',
      method: 'get',
      data:{
          id
      }
    })
  }

export { getUser }
