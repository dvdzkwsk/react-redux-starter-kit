module.exports = {
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: "style"
            },{
                loader: "css"
            }, {
                loader: "postcss"
            }, {
                loader: "sass"
            }]
        }]
    }
};
