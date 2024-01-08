$(()=> {
  $(".btn-primary").click(handleClick);
})

const url = "http://localhost:5000/send_data"

async function handleClick(event) {
  const clickedButton = $(this);
  const productDiv = clickedButton.closest(".icecream-card");

  const productName = productDiv.find(".card-title").text().trim();
  const productPrice = Number(productDiv.find(".card-price").text().trim().slice(1,-2));


  const clickData = {
    productName,
    productPrice
  };

  console.log(clickData);

  try {
    await fetch(url, {
      method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(clickData)
    })
  }
  catch (error) {
    console.error("Error sending click data:", error)
  }
}