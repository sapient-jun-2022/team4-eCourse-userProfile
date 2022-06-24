import { addUser, getAllUser, getUserById, home, updateUserDetails } from '../controllers/user-controller';

const routes = (app) =>{
    app.route("/")
    .get(home)


    app.route("/addUser/")
    .post(addUser)


    app.route("/getAllUser")
    .get(getAllUser)


    app.route("/user/:userId")
    .get(getUserById)
    .put(updateUserDetails)


}

export default routes;