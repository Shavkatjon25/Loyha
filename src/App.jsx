import { RouterProvider, createBrowserRouter} from "react-router-dom";
import Kod from "./Kod";
import Kirim from "./Kirim";
import Chqim from "./Chqim";
import MaxsulotKrim from "./MaxsulotKrim";
import MaxsulotChqim from "./MaxsulotChqim";
import Logo from "./Logo";


const router=createBrowserRouter([
  {
    path:'/',
    element:<Kod/>
  },
  {
    path:'/krim',
    element:<Kirim/>
  },
  {
    path:'/chqim',
    element:<Chqim/>
  },
  {
    path:'/maxsulotkrim',
    element:<MaxsulotKrim/>
  },
  {
    path:'/maxsulotchqim',
    element:<MaxsulotChqim/>
  },
])


function App() {


  return (
    <div className="flex flex-col h-[100vh]">
      <Logo/>
      <div className="flex-1 flex">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </div>
  )
}

export default App