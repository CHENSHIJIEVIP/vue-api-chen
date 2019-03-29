import Mock from 'mockjs'
import { getUserInfo} from './response/user'

Mock.mock('/v2/movie/top250',getUserInfo)

Mock.setup({    //设置请求延迟
    timeout:'100-600'
})

export default Mock
