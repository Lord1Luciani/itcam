
const getFile = async (id) => {
    return await fetch(`/file/${id}`, {
        "method": "GET",
        credentials: 'include',
    })
    .then(res => res.json())
    .then((res) => {
        if(res.link) return res
        else return 'https://media0.giphy.com/media/3o72EXEE4c4Z45Hgt2/giphy.webp'
    })
}

export default getFile;


// const getFile = (id) => {
//     return new Promise((resolve, reject) => {
//         fetch(`/file/${id}`, {
//             "method": "GET",
//             credentials: 'include',
//         })
//     })
// }