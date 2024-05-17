 // JavaScript code

 const addToCartButtons = document.querySelectorAll('button');

 addToCartButtons.forEach(button => {
   button.addEventListener('click', () => {
     alert('Item added to cart!');
   });
 });

  // function searchProducts() {
  //   // Get the search input value
  //   var searchTerm = document.getElementById("searchInput").value.toLowerCase();

  //   // Get all the product items
  //   var productItems = document.getElementsByClassName("product");

  //   // Loop through the product items
  //   for (var i = 0; i < productItems.length; i++) {
  //     var product = productItems[i];
  //     var productName = product.getElementsByTagName("h3")[0].innerText.toLowerCase();

  //     // Check if the product name contains the search term
  //     if (productName.includes(searchTerm)) {
  //       product.style.display = "block";  // Show the product
  //     } else {
  //       product.style.display = "none";   // Hide the product
  //     }
  //   }
  // }

  // Add an event listener to the search button
  document.getElementsByClassName("search").addEventListener("click", search);