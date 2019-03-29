import Mock from 'mockjs'

const Random = Mock.Random

export const getUserInfo = (options) => {
    console.log('mock:',options)
    const template = {
        'str|2-5': 'lison',
        'age|+2': 18,
        'num|4-10':0,
        'float|3-10.2-5':0,
        'boolean|1':true,
        'boolean2|1-9':true,
        'obj|3':{
            a:'aa',
            b:'bb',
            c:'cc'
        },
        'reg':/[0-9][a-z]/,
        //email: Random.email()
        email: Mock.mock('@email')
    }
    //返回的data是个数组
    let i = 3
    let arr = []
    while(i--){
        arr.push(template)
    }
    return Mock.mock(template)

}
