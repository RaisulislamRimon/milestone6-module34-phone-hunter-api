const loadPhone = () => {
  const url = `https://openapi.programming-hero.com/api/phones?search=iphone`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      displayPhone(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

const displayPhone = (data) => {
  console.log(data.data);
  const phone = data.data;
  phone.forEach((phn) => {
    console.log(phn.brand);
  });
};

loadPhone();
