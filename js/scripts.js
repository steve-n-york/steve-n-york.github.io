document.addEventListener('DOMContentLoaded', () => {

    const logo = document.querySelector('#logo');
    const subNavTab = document.querySelector('#sub-nav-tab');
    const subNavBar = document.querySelector('#sub_nav_bar');
    const subNavBlocks = document.querySelectorAll('#sub_nav_blocks')
    const mainNavBarRight = document.querySelector('#main-navbar-right')
    const profileMenContainer = document.querySelector('#profile-menu-container')
    const hambMenuBtn = document.querySelector('#hamb-menu-btn')
    const mobileNavMenu = document.querySelector('#mobile-nav-menu')
    const mobileNavBlocks = document.querySelectorAll('.mobile-nav-blocks')
    const mobileMainSection = document.querySelector('#mobile-main-section')
    const blogContent = document.querySelector('#blog_content')
    const mobileMainBlocks = document.querySelectorAll('.mobile-main-blocks')

    // NAVIGATION FUNCTIONALITY
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


    // MOBILE NAVIGATION FUNCTIONALITY

    hambMenuBtn.addEventListener('click', (e) => {
        if (mobileNavMenu.style.display === 'block') {
            mobileNavMenu.style.display = 'none';
            mobileMainSection.style.display = 'block';
            // blogContent.style.display = 'block';
        }
        else {
            mobileNavMenu.style.display = 'block';
            mobileMainSection.style.display = 'none';
            // blogContent.style.display = 'none';
        }
        window.scroll(0,0);
    });
    mobileNavBlocks.forEach(block => {
            block.addEventListener('click', (e) => {
                mobileNavMenu.style.display = 'none';
                mobileMainSection.style.display = 'block';
                // blogContent.style.display = 'block';
        })
    });


    // MOBILE MAIN PAGE BUTTON FUNCTIONALITY
    mobileMainBlocks.forEach(block => {
        block.addEventListener('click', (e) => {
            console.log('clicked')
            e.stopPropagation();

            const nextElement = block.parentElement.nextElementSibling.childNodes[1].childNodes[1]
            if (nextElement.style.display === "none") {
                nextElement.style.display = "block";
                console.log(nextElement)
              } else {
                nextElement.style.display = "none";
                console.log(nextElement)
              }
        })
    })
    


    // function toggleMobileBlock() {
    //     // Get the next element after the clicked element
    //     const nextElement = this.parentElement.nextElementSibling;
      
    //     // Toggle the display style of the next element
    //     if (nextElement.style.display === "block") {
    //       nextElement.style.display = "none";
    //     } else {
    //       nextElement.style.display = "block";
    //     }
    //   }


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
