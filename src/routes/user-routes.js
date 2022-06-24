import { home } from '../controllers/user-controller'


const routes = (app) => {
    app.route("/")
        .get(home)
}

export default routes;
