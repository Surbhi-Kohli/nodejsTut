import * as user from "../users";
describe('user handler',()=>{

    it("Should create a new user ",async()=>{

    const req = {body: {username: 'testuser', password:'hi'}};//if this test runs more than once, it will fail, since the user already exists
    //so better have local db for testing rather than hosted db
    const res= {json({token}){
        console.log(token)
        expect(token).toBeTruthy()
    }
    }
     await user.createNewUser(req,res,()=>{})
    })
})


//Can we run test by simply writing jest command in terminal?
/*If you go to your terminal and type in jest, you'll probably get an error,because-
If you install a CLI into your application,just like we did, jest is a CLI. But we installed it locally into our project.We didn't install it globally onto our computer,
 so we can't actually just type in jest like this, because we didn't globally install it.
 We locally installed it, 
so we'd have to go into like node_modules, right and then will we be able to run that command
But when we mention jest as a script in package.json, npm is smart enough to check if package.json has jest
as an entry, it knows that local jest is to be used Whereas the terminal is not that smart, your terminal is not gonnaknow that you have something called jest installed in this project.It's actually looking on the root of your computer for it, in the bin folder.So it won't work here, unless you install it globally.

Every test that u write should be stateless and non-reliant on any other test that runs before or after the test in concern
*/