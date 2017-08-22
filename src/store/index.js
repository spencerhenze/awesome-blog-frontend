import $ from 'jquery'
import vue from 'vue'
import vuex from 'vuex'

vue.use(vuex)

var ip = "//localhost:3000"
// PRIVATE PARTS

// PUBLIC PARTS
var store = new vuex.Store({
    state: {
        blogs: [],
        activeBlog: {}
    },

    mutations: {
        addBlog(state, newBlog) {
            state.blogs.push(newBlog)
        },

        updateBlogs(state, blogs) {
            state.blogs = blogs;
        },

        setActiveBlog(state, blog) {
            state.activeBlog = blog;
        }
    },

    actions: {
        // post a blog
        createBlog({ commit, dispatch }, blog) {
            $.post(ip + '/api/blogs', blog).then(actualBlog => {
                commit('addBlog', actualBlog)
            }).fail(err => {
                console.error(err)
            })
        },

        // update a blog
        updateBlog({ commit, dispatch }, updatedBlog) {
            $.ajax({
                url: ip + '/api/blogs/' + updatedBlog._id,
                method: 'PUT',
                contentType: 'application/json',
                data: JSON.stringify(updatedBlog)
            }).then(res => {
                dispatch.getBlogs()
            })
                .fail(err => {
                    console.error(err)
                })
        },

        // get all blogs
        getBlogs({ commit, dispatch }, blogs) {
            $.get(ip + "/api/blogs").then(blogs => {
                commit('updateBlogs', blogs)
            })
        },

        // get a blog by id
        getBlog({ commit, dispatch }, blogId) {
            $.get(ip + "/api/blogs/" + blogId).then(blog => {
                commit('setActiveBlog', blog)
            })
        },

    }
}) // end of store object






// state: state,
// search(query) {
//     var base = "mongodb://student:student@ds153113.mlab.com:53113/blog_db_henze"
//     var url = `${base}=${query}`

//     return new Promise(function (resolve, reject) {
//         $.get(url)
//             .then(data => { resolve(data) })
//             .catch(error => { reject(error) });
//     })
// },

//         getBlogs() {
//         $.get('//localhost:3000/api/blogs')
//             .then((res) => {
//                 console.log(res)
//                 state.blogs = res
//             })
//             .catch(() => console.log('error'))
//     },


//     addBlog(blog) {
//         $.post(ip + "//localhost:3000/api/blogs", blog)
//             .then((res) => {
//                 if (res.message) {
//                     getBlogs()
//                     alert('Posted')
//                 } else if (res.error) {
//                     alert("Something Broke");
//                 }

//             })
//             .catch(() => console.log('error'))
//     }
//     // state.blogs.push(blog)   this is for saving a local copy. We are using a database because we are awesome.
// }

export default store