import './App.css';
import MainPageComponent from './main/index';
import { Switch, Route } from 'react-router-dom';
import UploadPage from './upload';
import ProductPage from './product';

function App() {
  return (
    <div>
      {/* 경로별로 다른 화면을 보여주는 작업 */}
      <Switch>
        <Route exact={true} path="/">
          <MainPageComponent />
        </Route>
        <Route exact={true} path="/products/:id">
          <ProductPage />
        </Route>
        <Route exact={true} path="/upload">
          <UploadPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
