import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import { ProductOverviewContainer, Container, GlobalStyle } from "./styles/App.styles.js";
import ProductHeader from './components/ProductHeader/ProductHeader.jsx';
import ProductImagesViewer from './components/ProductImagesViewer/ProductImagesViewer.jsx';
import ProductInfo from './components/ProductInfo/ProductInfo.jsx';


const axios = require('axios');

const App = () => {
  const [productData, setProductData] = useState();
  useEffect(() => {
    getProductData();
  }, []);

  const getProductData = () => {
    axios.get(`/api/products${window.location.pathname}`)
      .then(response => {
        console.log(response.data);
        setProductData(response.data);
      });
  }

  return (
    <div>
      <GlobalStyle />
      {
        productData &&
          <ProductOverviewContainer>
            <ProductHeader productData={productData} />
            <Container>
              <ProductImagesViewer productData={productData} />
              <ProductInfo productData={productData} />
            </Container>
          </ProductOverviewContainer>
      }
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));