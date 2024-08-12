document.addEventListener('DOMContentLoaded', () => {
    // change color
    
    document.querySelector('#change-color').addEventListener('click', () => {
        document.querySelector('body').classList.toggle('change-color');
        // document.querySelector('nav').classList.toggle('change-color');
        // document.querySelector('.toggled').style.color = "white";
        // document.querySelector('.patients-cont').classList.toggle('change-color');
        // document.querySelector('.toggled').classList.toggle('change-color');
        
    })

    document.querySelector('#more').addEventListener('mouseover', () => {
        document.querySelector('.more').style.display = 'flex';
    })
    document.querySelector('#more').addEventListener('mouseout', () => {
        document.querySelector('.more').style.display = 'none';
    })

    
    var postTitle = document.getElementById('title');
    var postBtn = document.getElementById('post-button');
    var postContent = document.getElementById('post-content');
    var posts = document.querySelector('.patients');

    postBtn.addEventListener('click', () => {
        if(postContent.value === ""|| postTitle.value === "") {
            alert('You cannot post an empty content')
        }
        else {
            const postItem = document.createElement('div');

            postItem.innerHTML = ` <div class="patient">
            <div class="patient-profile">
            <img src="images/dlcf.png" alt="Emily Williams" width="30" height="30">
            <div class="patient-text">
                <h4 class="body-emphasized-14pt" id="blogtitle">${postTitle.value}</h4>
                <p class="body-secondary-info-14pt">By Admin</p>
            </div>
            </div>

            <div class="img">
                <img src="images/delete.png" alt="more" width="16" height="16" class="delete-img"> 
            </div>

            
        </div>`;

        posts.appendChild(postItem);

        postTitle.value = "";
        postContent.value = "";

        const closeBtn = postItem.querySelector('.delete-img');
        closeBtn.addEventListener('click', () => {
        postItem.remove();
         });
        }
    })

//   const announceBtn = document.querySelector('#announce-button');

//   announceBtn.addEventListener('click', () => {
//       if ()
//   })

})