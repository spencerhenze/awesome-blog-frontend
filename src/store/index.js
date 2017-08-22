import $ from 'jquery'
import vue from 'vue'
import vuex from 'vuex'
// import Vueditor, { createEditor } from 'vueditor'

// WYSIWUG Setup
// let config = {
//     toolbar: [
//         'removeFormat', 'undo', '|', 'elements', 'fontName', 'fontSize', 'foreColor', 'backColor', 'divider',
//         'bold', 'italic', 'underline', 'strikeThrough', 'links', 'divider', 'subscript', 'superscript',
//         'divider', 'justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull', '|', 'indent', 'outdent',
//         'insertOrderedList', 'insertUnorderedList', '|', 'emoji', 'picture', 'tables', '|', 'switchView'
//     ],
//     // the font-family select's options, "val" refer to the actual css value, "abbr" refer to the option's text
//     // "abbr" is optional when equals to "val";
//     fontName: [
//       {val: "", abbr: ""},
//       {val: "arial black"}, {val: "times new roman"}, {val: "Courier New"}
//     ],

//     // the font-size select's options
//     fontSize: ['12px', '14px', '16px', '18px', '0.8rem', '1.0rem', '1.2rem', '1.5rem', '2.0rem'],

//     // the emoji list, you can get full list here: http://unicode.org/emoji/charts/full-emoji-list.html
//     emoji: ["1f600", "1f601", "1f602", "1f923", "1f603"],

//     // default is Chinese, to set to English use lang: 'en'
//     lang: 'en',

//     // mode options: default | iframe
//     mode: 'default',

//     // if mode is set to 'iframe', specify a HTML file path here
//     iframePath: '',

//      // your file upload url, the return result must be a string refer to the uploaded image, leave it empty will end up with local preview
//     fileuploadUrl: ''
// };


vue.use(vuex)
// vue.use(Vueditor, config);
//create a root instance
// new vue({
//     el: '#editor1'
// })

// let parent = new vue({
//     el:"#editor1"
// })
// let inst = parent.$children[0];
// inst.setContent('your content here');
// inst.getContent();


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
            debugger
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
        getBlogById({ commit, dispatch }, blogId) {
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