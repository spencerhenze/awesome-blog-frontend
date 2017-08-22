import $ from 'jquery'

// PRIVATE PARTS

// PUBLIC PARTS
var store = new vuex.Store({
    state: {
        blogs: []
    }


})

var store = {
    state: state,
    search(query) {
        var base = "mongodb://student:student@ds153113.mlab.com:53113/blog_db_henze"
        var url = `${base}=${query}`

        return new Promise(function (resolve, reject) {
            $.get(url)
                .then(data => { resolve(data) })
                .catch(error => { reject(error) });
        })
    },

    getBlogs() {
        $.get('//localhost:3000/api/blogs')
            .then((res) => {
                console.log(res)
                state.blogs = res
            })
            .catch(() => console.log('error'))
    },


    addBlog(blog) {
        $.post(ip + "//localhost:3000/api/blogs", blog)
            .then((res) => {
                if (res.message) {
                    getBlogs()
                    alert('Posted')
                } else if (res.error) {
                    alert("Something Broke");
                }

            })
            .catch(() => console.log('error'))
    }
    // state.blogs.push(blog)   this is for saving a local copy. We are using a database because we are awesome.
}

export default store