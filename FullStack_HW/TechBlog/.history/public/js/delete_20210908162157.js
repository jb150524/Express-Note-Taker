const deletePostHandler = async (event) =>{
    event.preventDefault();

    const postId = document.querySelector('#post').value.trim();