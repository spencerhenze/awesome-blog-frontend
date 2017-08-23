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




export default store