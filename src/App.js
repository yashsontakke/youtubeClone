import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Body from './Body';
import { store } from './utils/store';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Videos from './Videos';
import Watch from './Watch';
const router = createBrowserRouter([
      {
        path:"/",
        element:<Body/>,
        children:[
          {
            path:"/",
            element:<Videos/>
          },
          {
            path:"watch",
            element:<Watch/>
          }
        ]
      }
   ]
)
function App() {
  return (
  
       <Provider store={store}>
           <Header />
            <RouterProvider router={router}>
            <Body />
            </RouterProvider>
      </Provider>
      
  );
}

export default App;
