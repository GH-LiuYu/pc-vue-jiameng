
module.exports={
    chainWebpack: (config) => {
        config
            .plugin('html')
            .tap((args) => {
                args[0].title = '加盟网—品牌招商加盟连锁创业门户';
                return args;
            });
    }
}

