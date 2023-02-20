document.addEventListener('DOMContentLoaded', () => {

    const logo = document.querySelector('#logo');
    const subNavTab = document.querySelector('#sub-nav-tab');
    const subNavBar = document.querySelector('#sub_nav_bar');
    const subNavBlocks = document.querySelectorAll('#sub_nav_blocks')
    const mainNavBarRight = document.querySelector('#main-navbar-right')
    const profileMenContainer = document.querySelector('#profile-menu-container')

    // SUB-NAV DISPLAY ON LOGO HOVER
    logo.addEventListener('mouseover', (e) => {
        subNavBar.style.display = 'block';
        profileMenContainer.style.display = 'none';
    });
    subNavTab.addEventListener('mouseover', (e) => {
        subNavBar.style.display = 'block';
        profileMenContainer.style.display = 'none';
    });
    subNavBar.addEventListener('mouseover', (e) => {
        subNavBar.style.display = 'block';
    });
    subNavBar.addEventListener('mouseout', (e) => {
        subNavBar.style.display = 'none';
    });
    subNavBlocks.forEach(block => {
        block.addEventListener('mouseover', (e) => {
            subNavBar.style.display = 'block';
        });
    });
    mainNavBarRight.addEventListener('mouseover', (e) => {
        profileMenContainer.style.display = 'block';
        subNavBar.style.display = 'none';
    });
    profileMenContainer.addEventListener('mouseleave', (e) => {
        profileMenContainer.style.display = 'none';
    });



    // BLOGS SCRIPT
    fetch('./blogs/blogs.json')
        .then(response => response.json())
        .then(data => {
            const blogs = data.blogs;
            let html = '';
            for (const blog of blogs) {
                html += `
                <article id="blog_[i]" class="blogs">
                    <div class="blog_header"><strong class="blog_title" style="color: white;">${blog.title}</strong></div>
                    <div class="blog_tag">${blog.tag}</div>
                    <div class="blog_copy">${blog.teaser}</div>
                    <a class="blog_cta blog_cta_link" href="${blog.link}" target="_blank">LEARN MORE</a>
                </article>
                  `;
            }
            document.getElementById('blogs_section').innerHTML = html;
        }
        );





});
