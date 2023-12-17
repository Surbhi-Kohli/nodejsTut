import { Router } from "express";
import { body, validationResult } from "express-validator";
import { handleInputErrors } from "./modules/middleware";
import { createProduct, deleteProduct, getOneProduct, getProducts, updateProduct } from "./handlers/product";
import { createUpdate, deleteUpdate, getOneUpdate, getUpdates, updateUpdate } from "./handlers/update";
const router = Router();
/**
 * Product
 */
router.get("/product",getProducts)

router.get("/product/:id",getOneProduct)

router.post("/product",body('name').isString(),handleInputErrors,createProduct)

router.put("/product/:id",body('name').isString(),handleInputErrors,updateProduct)
// (req,res)=>{
//     console.log("in put /product/id")
//     //ensure that req.body has a field called name
//     //The body middleware wont actually respond with any errors.Because express-validator wants us
//     // as the creators to have control of how we wanna send those errors back.
//     //The body middleware is attaching some info with req object, which can be accessed by validationResult(if not using handleInputErrors middleware, we put code here itself)
//     // const errors = validationResult(req);
//     // if (!errors.isEmpty()) {
//     //     res.status(400);
//     //     res.json({ errors: errors.array() });
//     //   }
// })

router.delete("/product/:id",deleteProduct);

/**
 * Update
 */

router.get("/update", getUpdates);

router.get("/update/:id", getOneUpdate);

router.post("/update", 
body('title').exists(),
body('body').exists().isString(),
body('productId').exists().isString(),
 createUpdate);

router.put("/update/:id",
            body('title').optional(),
            body('body').optional(),
            body('status').isIn(['IN_PROGRESS','SHIPPED','DEPRECATED']),
            updateUpdate);

router.delete("/update/:id", deleteUpdate);


/**UpdatePoint: */

router.get("/updatepoint", (req, res) => {});

router.get("/updatepoint/:id", (req, res) => {});

router.post("/updatepoint", 
             body('name').isString(),
             body('description').isString(), 
             body('updateId').exists().isString(),
             (req, res) => {});

router.put("/updatepoint/:id",
            body('name').optional().isString(),
            body('description').optional().isString(), 
            (req, res) => {});

router.delete("/updatepoint/:id", (req, res) => {});


/*So because the handlers forall the resources that aren't user are in the subrouter,
their errors aren't gonna bubble up to the main router's error handling.
So if you have a subrouter, you also have to add an erro handler for 
that router at the bottom of those routes as well.*/
router.use((error,req,res,next)=>{
console.log(error);
})
export default router;