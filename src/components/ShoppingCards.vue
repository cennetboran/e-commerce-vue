<template>
  <div className="card">
      <div className="card-image">
        <img
          className="img-fluid w-100 "
          src=""
          alt="Cardimg"
        />
      </div>
      <div className="container-body text-center">
       
        <p className="desc">{product.desc}</p>
        <h4 className="product-names">
          Marka:<span className="product-answername">{product.brand}</span>
        </h4>
        <h4 className="product-names">
          Renk:<span className="product-answername">{product.color}</span>
        </h4>

        {/* <h3 className="text-danger mr-1">{mockdata.price}</h3> */}
        <h3 className="price text-danger mr-1">{product.price} TL</h3>
        <h3 className="price-sale mr-1">
          <span className="first">{product.actualPrice} TL</span>
          <span className="sale">{" " + product.sale}</span>
        </h3>
        {/* <i className="fas fa-shopping-cart pr-2"></i>Add to cart */}
      </div>
      <button
        className="basket-button"
        disabled={isDisabled}
      
      >
        <span>
          {isDisabled ? "Bu ürünü sepete ekleyemezsiniz." : "Sepete Ekle"}
        </span>
      </button>
    </div>
</template>
<script>
import mockdata from "../lib/mockdata"
export default {
    components:{
        mockdata
    }
}
</script>