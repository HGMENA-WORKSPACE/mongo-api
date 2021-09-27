import Router from "express";
//
import { environments } from "../../environment";
import UserController from "../controller/user.controller";

const router = Router();

const controller: any = {
  userController: new UserController()
};

const { ROUTES }: any = environments;
for (const key in ROUTES) {
  if (Object.prototype.hasOwnProperty.call(ROUTES, key)) {
    const element = ROUTES[key];
    //
    const ctrller = controller[`${element}Controller`];
    //
    router.get(`/${element}`, (req, res) => ctrller.getElements(req, res));
    router.post(`/${element}`, (req, res) => ctrller.postElement(req, res));
    router.get(`/${element}/:id`, (req, res) => ctrller.getElement(req, res));
    router.put(`/${element}/:id`, (req, res) => ctrller.putElement(req, res));
    router.delete(`/${element}/:id`, (req, res) =>
      ctrller.deleteElement(req, res)
    );
  }
}

export default router;
