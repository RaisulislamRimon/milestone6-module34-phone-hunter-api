const loadPhones = async (phone) => {
  const url = `https://openapi.programming-hero.com/api/phones?search=${phone}`;
  const response = await fetch(url);
  const data = await response.json();
  displayPhones(data.data);
};

const displayPhones = (phones) => {
  // console.log(phones);
  const phoneContainer = document.getElementById("phone-container");
  phones = phones.slice(0, 5);
  // phoneContainer.innerHTML = "";
  phoneContainer.textContent = "";
  phones.forEach((phone) => {
    const phoneDiv = document.createElement("div");
    phoneDiv.classList.add("col");
    phoneDiv.innerHTML = `
      <div class="card m-2 p-3 bg-dark text-white border  ">
        <img src="${phone.image}" class="card-img-top" alt="no image found" />
        <div class="card-body">
          <h5 class="card-title">${phone.phone_name}</h5>
          <p class="card-text">${phone.brand}</p>
          <p class="card-text">${phone.slug}</p>
        </div>
      </div>
    `;
    phoneContainer.appendChild(phoneDiv);
  });
};

document.getElementById("btn-search").addEventListener("click", function () {
  const searchField = document.getElementById("search-field");
  const searchValue = searchField.value;
  loadPhones(searchValue);
});

loadPhones("iphone");
