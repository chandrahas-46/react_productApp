import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { ProductContext } from "./productContext";

// all the pages and component to render
import Navbar from "./Component/Navbar/Navbar";
import { Home } from "./Pages/Home";
import { Categories } from "./Pages/categories";
import { ProductDetails } from "./Pages/productDetails";
import { Error } from "./Pages/Error";

// main app function 
function App() {
  // all the link routes
  const router = createBrowserRouter([
    {
      path:"/", 
      element: <Navbar />,
      errorElement: <Error />,
      children:[
        { index:true, element: <Home />},
        { 
          path:"/products", 
          children: [
            { index:true, element: <Home />},
            { path:"categories", element: <Categories />},
            { path:"category/:category_name", element: <Home />},
            { path:":id", element: <ProductDetails />},
          ]
        }
      ]
    }
  ]);

  return (
    <>
      {/* custom product context provider */}
      <ProductContext>
        {/* routes */}
        <RouterProvider router={router} />    
      </ProductContext>
    </>
  );
}

export default App;
