const loadPhones = async () => {
  const url = `https://openapi.programming-hero.com/api/phones?search=iphone`;
  const response = await fetch(url);
  const data = await response.json();
  displayPhones(data.data);
};

const displayPhones = (phones) => {
  console.log(phones);
  const phoneContainer = document.getElementById("phone-container");
  phones.forEach((phone) => {
    console.log(phone);
  });
};

loadPhones();
