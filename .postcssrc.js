//노드에서는 require , module.exports를 사용
//import autoprefixer from 'autoprefixer';
// const autoprefixer = require("autoprefixer");
// export {
//     plugins: [
//         autoprefixer
//     ]
// }
module.exports = {
    plugins: [
        require("autoprefixer")
    ]
};