let allBlogs = [];

// Fetch and display all blogs when the page loads
function viewBlogs() {
    const request = new XMLHttpRequest();

    request.open('GET', '/view-blog', true);
    request.setRequestHeader('Content-Type', 'application/json');

    request.onload = function () {
        if (request.status >= 200 && request.status < 300) {
            allBlogs = JSON.parse(request.responseText); // Store all blogs for filtering
            console.log("Blogs fetched:", allBlogs); // Debug: Log fetched data
            displayBlogs(allBlogs); // Display all blogs initially
        } else {
            console.error("Failed to fetch blogs:", request.status, request.statusText);
        }
    };
        response = JSON.parse(request.responseText);

        var html = '';
            if (response.length === 0) {
                html = '<p class = "no-blog"> No blogs found!</p>';
            } else {
        for (var i = 0; i < response.length; i++) {
            html += `
                <div class="blog-post">
                    <h3>${response[i].title}</h3>
                    <p class="blog-content">${response[i].description}</p>
                    <p><strong>Created by:</strong> ${response[i].author}</p>
                    <div class="blog-actions">
                        <button class="blog actions" onclick="editResource(${JSON.stringify(response[i]).replace(/"/g, '&quot;')})">
                            <i class="fas fa-wrench"></i>
                        </button>
                        <button class="blog actions" onclick="deleteResource(${response[i].id})">
                            <i class="fas fa-trash-alt"></i>
                        </button>
                    </div>
                </div>`;
        }
    }   

    request.onerror = function () {
        console.error("Request failed.");
    };

    request.send();
}

// Display blogs on the page
function displayBlogs(blogs) {
    let html = '';
    blogs.forEach(blog => {
        html += `
            <div class="blog-post">
                <h3>${blog.title}</h3>
                <p class="blog-content">${blog.description}</p>
                <p><strong>Created by:</strong> ${blog.author}</p>
                <div class="blog-actions">
                    <button class="blog actions" onclick="editResource(${JSON.stringify(blog).replace(/"/g, '&quot;')})">
                        <i class="fas fa-wrench"></i>
                    </button>
                    <button class="blog actions" onclick="deleteResource(${blog.id})">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </div>
            </div>`;
    });
    document.getElementById('resourceContainer').innerHTML = html;
    console.log("Blogs displayed:", blogs); // Debug: Log displayed data
}

