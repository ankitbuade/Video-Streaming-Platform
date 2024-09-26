
import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import store from './Utils/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';

const appRouter = createBrowserRouter([{
  path :"/",
  element : <Body/>,
    children:[{
      path: "/",
      element : <MainContainer/>
    },
    {
      path: "watch",
      element : <WatchPage/>
    }
  ]



}])

function App() {
  return (
    <Provider store = {store}> 
    <div className="">
    <Header/>
    <RouterProvider router={appRouter}/>


    </div>
    </Provider>
  );
 
}

export default App;
