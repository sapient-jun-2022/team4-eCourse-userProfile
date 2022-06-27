import {
    addItemWishList,
    deleteItemWishList
} from '../controllers/wishList-controller';
import {
    addUser,
    deleteById,
    getAllUser,
    getUserById,
    home,
    updateUserDetails
} from '../controllers/user-controller';

const routes = (app) => {
    app.route("/")
        .get(home)


    app.route("/addUser/")
        .post(addUser)


    app.route("/getAllUser")
        .get(getAllUser)


    app.route("/user/:userId")
        .get(getUserById)


    app.route("/user/update/:userId")
        .put(updateUserDetails)


    app.route("/user/delete/:userId")
        .put(deleteById);


    //Adding in wishlist
    app.route("/user/wishList/:userId")
        .post(addItemWishList);


    // Remove Item from WishList

    app.route("/user/wishList/delete/:userId")
        .post(deleteItemWishList);



}

export default routes;