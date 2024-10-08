window.addEventListener("load", () => {
  const container = document.getElementById("our-product-section");
  const container2 = document.getElementById("our-product-section-2");

  fetch("http://localhost:3000/grid_images")
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      let html = "";

      for (let i = 0; i < response.length; i++) {
        const element = response[i];

        html = `
          ${html}
          <li class="OPItemListItem">
              <div class="ForPositining">
                  <div class="OnHover">

                      <img src="${element.image}" alt="Product Image" class="ProductImage">
                      <div class="discountCircle">
                          <h5 class="H5discount">-30%</h5>
                      </div>
                      <div class="changeDispPr">
                          <button class="AddToCartButton">Add to cart</button>
                          <div>
                              <ul class="unorderedList">
                                  <li class="rowFlex">
                                      <img src="images/gridicons_share.svg" alt="Share Icon"
                                          class="ShareIcon">
                                      <h5 class="changeDispPr h5property">Share</h5>
                                  </li>
                                  <li class="rowFlex">
                                      <img src="images/compare-svgrepo-com 1.svg" alt="Share Icon"
                                          class="ShareIcon">
                                      <h5 class="changeDispPr h5property">Compare</h5>
                                  </li>
                                  <li class="rowFlex">
                                      <img src="images/Heart.svg" alt="Share Icon" class="ShareIcon">
                                      <h5 class="changeDispPr h5property">Like</h5>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
                  <h2 id="ILH2" class="OPItemListItemH2">${element.title}</h2>
                  <p id="ILD" class="OPItemListItemP">${element.descripton}</p>
                  <ul class="OPItemListItemUL">
                      <li class="OPItemListItemULLiH">
                          <h3 id="ILP">${element.price}</h2>
                      </li>
                      <li class="OPItemListItemULLiP">
                          <p id="ILPO">${element.oldprice}</p>
                      </li>
                  </ul>
          </li>`;
      }

      container.innerHTML = html;
    });

    fetch("http://localhost:3000/grid_images_2")
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      let html2 = "";

      for (let i = 0; i < response.length; i++) {
        const element = response[i];

        html2 = `
          ${html2}
          <li class="OPItemListItem">
              <div class="ForPositining">
                  <div class="OnHover">

                      <img src="${element.image}" alt="Product Image" class="ProductImage">
                      <div class="discountCircle">
                          <h5 class="H5discount">-30%</h5>
                      </div>
                      <div class="changeDispPr">
                          <button class="AddToCartButton">Add to cart</button>
                          <div>
                              <ul class="unorderedList">
                                  <li class="rowFlex">
                                      <img src="images/gridicons_share.svg" alt="Share Icon"
                                          class="ShareIcon">
                                      <h5 class="changeDispPr h5property">Share</h5>
                                  </li>
                                  <li class="rowFlex">
                                      <img src="images/compare-svgrepo-com 1.svg" alt="Share Icon"
                                          class="ShareIcon">
                                      <h5 class="changeDispPr h5property">Compare</h5>
                                  </li>
                                  <li class="rowFlex">
                                      <img src="images/Heart.svg" alt="Share Icon" class="ShareIcon">
                                      <h5 class="changeDispPr h5property">Like</h5>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
                  <h2 id="ILH2" class="OPItemListItemH2">${element.title}</h2>
                  <p id="ILD" class="OPItemListItemP">${element.descripton}</p>
                  <ul class="OPItemListItemUL">
                      <li class="OPItemListItemULLiH">
                          <h3 id="ILP">${element.price}</h2>
                      </li>
                      <li class="OPItemListItemULLiP">
                          <p id="ILPO">${element.oldprice}</p>
                      </li>
                  </ul>
          </li>`;
      }

      container2.innerHTML = html2;
    });
});
