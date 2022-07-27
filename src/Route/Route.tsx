import Home from '../Components/Home/Home'
import About from '../Pages/About/About'
import Contact from '../Pages/Contact/Contact'
import Blog from '../Pages/Blog/Blog'


const routes = [
   {
       title: "Home",
       path: "/",
       component: <Home/>
       
   },
   {
       title: "About",
       path: "/about",
       component: <About/>
   },
   {
       title: "Blog",
       path: "/blog",
       component: <Blog/>
   },
   {
       title: "Contact",
       path: "/contact",
       component: <Contact />
   }
]

export default routes;