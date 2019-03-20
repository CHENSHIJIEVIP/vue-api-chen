const saveInLocal = store => {
    console.log('插件被加载了。。。')
    //储存到localStorage中，刷新页面时如果重载state的值（字符串），然后转换成对象替换给store的仓库
    if(localStorage.state) store.replaceState(JSON.parse(localStorage.state))
    store.subscribe((mutation, state) => {
        console.log('提交mutation')
        localStorage.state = JSON.stringify(state)
    })
}

export default saveInLocal
