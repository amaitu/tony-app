module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/tony-app/'
        : '/'
};