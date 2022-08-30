const loadPhones = async (phone, dataLimit) => {
  const url = `https://openapi.programming-hero.com/api/phones?search=${phone}`;
  const response = await fetch(url);
  const data = await response.json();
  displayPhones(data.data, dataLimit);
};

const displayPhones = (phones, dataLimit) => {
  // console.log(phones);
  const phoneContainer = document.getElementById("phone-container");
  // display limited phones
  const showAll = document.getElementById("show-all");
  if (dataLimit && phones.length > 10) {
    phones = phones.slice(0, 10);
    showAll.classList.remove("d-none");
  } else {
    showAll.classList.add("d-none");
  }
  // phoneContainer.innerHTML = "";
  phoneContainer.textContent = "";

  // display no phone found
  if (phones.length === 0) {
    const noPhoneFound = document.getElementById("no-phone-found");
    noPhoneFound.classList.remove("d-none");
  }
  // we can hide/display none simply by adding/removing the class d-none to the element in html file: line no: 54
  else {
    const noPhoneFound = document.getElementById("no-phone-found");
    noPhoneFound.classList.add("d-none");
  }
  // display all phone found
  phones.forEach((phone) => {
    const phoneDiv = document.createElement("div");
    phoneDiv.classList.add("col");
    phoneDiv.innerHTML = `
      <div class="card m-2 p-3 bg-dark text-white border  ">
        <img src="${phone.image}" class="card-img-top rounded" alt="no image found" />
        <div class="card-body">
          <h5 class="card-title">${phone.phone_name}</h5>
          <p class="card-text">${phone.brand}</p>
          <p class="card-text">${phone.slug}</p>
        </div>
      </div>
    `;
    phoneContainer.appendChild(phoneDiv);
  });
  // stop spinner
  toggleSpinner(false);
};

const processSearch = (dataLimit) => {
  // start spinner
  toggleSpinner(true);
  const searchField = document.getElementById("search-field");
  const searchValue = searchField.value;
  loadPhones(searchValue, dataLimit);
};

// handle search button click
document.getElementById("btn-search").addEventListener("click", function () {
  // // start spinner
  // toggleSpinner(true);
  // const searchField = document.getElementById("search-field");
  // const searchValue = searchField.value;
  // loadPhones(searchValue);
  processSearch(10);
});

// spinner toggle
const toggleSpinner = (isLoading) => {
  const spinnerSection = document.getElementById("spinner");
  if (isLoading) {
    spinnerSection.classList.remove("d-none");
  } else {
    spinnerSection.classList.add("d-none");
  }
};

document.getElementById("btn-show-all").addEventListener("click", function () {
  processSearch();
});

loadPhones("iphone");
// loadPhones();
