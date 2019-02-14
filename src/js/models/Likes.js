export default class Likes {
    constructor() {
        this.likes = [];
    }

    addLike(id, title, author, img) {
        const like = { id, title, author, img }
        this.likes.push(like);
        return like;
    }
    
    deleteLike(id){
        const index = this.likes.findIndex(el => el.id === id);
        if (index !== -1) { this.likes.splice(index, 1) };
    }
    
    isLiked(id){
        return this.like.findIndex(el => el.id === id) !== -1;
    }
    
    getNumLikes(){
        return this.likes.length;
    }
}