import React from 'react';
import styled from 'styled-components';
import metalShed1 from '../assets/METAL-SHED_pimg1.png';
import metalShed2 from '../assets/METAL-SHED_webimage.png';
import metalShed3 from '../assets/METAL-SHED-LOFTED_pimg2.png';
import woodenShed1 from '../assets/LOFTED-BARN-OHB_pimg1.png';
import woodenShed2 from '../assets/LOFTED-BARN-OHB_pimg2.png';
import woodenShed3 from '../assets/UTILITY-SHED-OHB_pimg1.png';

const CarouselWrapper = styled.div`
  display: flex;
  justify-content: center; /* Center the carousel horizontally */
`;

const CarouselContainer = styled.div`
  display: flex;
  overflow-x: auto;
  width: 80%; /* Set the width of the carousel */
  margin-bottom: 20px;
`;

const Card = styled.div`
  flex: 0 0 auto;
  width: 250px;
  margin-right: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const ProductInfo = styled.div`
  padding: 10px;
`;

const Shop = () => {
  return (
    <div>
      <section className="shop">
        <h2>Shop</h2>
        <div className="products">
          <h3>Metal Shed</h3>
          <CarouselWrapper>
            <CarouselContainer>
              <Card>
                <Image src={metalShed1} alt="Metal Shed 1" />
                <ProductInfo>
                  <h4>Metal Shed 1</h4>
                  <p>Description of Metal Shed 1</p>
                  <button>Add to Cart</button>
                </ProductInfo>
              </Card>
              <Card>
                <Image src={metalShed2} alt="Metal Shed 2" />
                <ProductInfo>
                  <h4>Metal Shed 2</h4>
                  <p>Description of Metal Shed 2</p>
                  <button>Add to Cart</button>
                </ProductInfo>
              </Card>
              <Card>
                <Image src={metalShed3} alt="Metal Shed 3" />
                <ProductInfo>
                  <h4>Metal Shed 3</h4>
                  <p>Description of Metal Shed 3</p>
                  <button>Add to Cart</button>
                </ProductInfo>
              </Card>
            </CarouselContainer>
          </CarouselWrapper>
          <h3>Wooden Shed</h3>
          <CarouselWrapper>
            <CarouselContainer>
              <Card>
                <Image src={woodenShed1} alt="Wooden Shed 1" />
                <ProductInfo>
                  <h4>Wooden Shed 1</h4>
                  <p>Description of Wooden Shed 1</p>
                  <button>Add to Cart</button>
                </ProductInfo>
              </Card>
              <Card>
                <Image src={woodenShed2} alt="Wooden Shed 2" />
                <ProductInfo>
                  <h4>Wooden Shed 2</h4>
                  <p>Description of Wooden Shed 2</p>
                  <button>Add to Cart</button>
                </ProductInfo>
              </Card>
              <Card>
                <Image src={woodenShed3} alt="Wooden Shed 3" />
                <ProductInfo>
                  <h4>Wooden Shed 3</h4>
                  <p>Description of Wooden Shed 3</p>
                  <button>Add to Cart</button>
                </ProductInfo>
              </Card>
            </CarouselContainer>
          </CarouselWrapper>
        </div>
      </section>
    </div>
  );
};

export default Shop;
