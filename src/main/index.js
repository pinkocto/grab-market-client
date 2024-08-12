import React from 'react';
import './index.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

function MainPage() {
  const [products, setProducts] = React.useState([]);
  // state가 변화됨에 따라 렌더링이 계속되는 것을 방지하기 위해 useEffect라는 함수를 사용.
  React.useEffect(function () {
    axios // 네트워크 통신을 위해 axios 라이브러리 설치
      .get(
        'https://c845adfa-9751-484e-90f6-65754f0458a4.mock.pstmn.io/products',
      )
      .then(function (result) {
        // console.log(result);
        const products = result.data.products;
        setProducts(products); // 결과를 받았을 때 setProducts로 state를 업데이트 시킴.
      })
      .catch(function (error) {
        console.error('에러 발생: ', error);
      });
  }, []);

  return (
    // jsx 문법을 사용해서 products.map으로 접근.
    <div>
      <div id="header">
        <div id="header-area">
          <img src="images/icons/logo.png" />
        </div>
      </div>
      <div id="body">
        <div id="banner">
          <img src="images/banners/banner1.png" />
        </div>
        <h1>판매되는 상품들</h1>
        <div id="product-list">
          {products.map(function (product, index) {
            return (
              <div className="product-card">
                <Link className="product-link" to={`/products/${index}`}>
                  <div>
                    <img
                      className="product-img"
                      // src="images/products/keyboard1.jpg"
                      src={product.imageUrl} // jsx 문법을 이용해서 각각의 필요한 값들을 넣어줌.
                    />
                  </div>

                  <div className="product-contents">
                    {/* jsx 문법을 이용해 각각의 필요한 값들을 넣어줌. */}
                    <span className="product-name">{product.name}</span>
                    <span className="product-price">{product.price}원</span>
                    <div className="product-seller">
                      <img
                        className="product-avatar"
                        src="images/icons/avatar.png"
                      />
                      <span>{product.seller}</span>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default MainPage;
