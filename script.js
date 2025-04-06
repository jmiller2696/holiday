const drinks = [
    {
      name: "Eggnog Martini",
      ingredients: "Eggnog, Vodka, Nutmeg",
      recipe: "Mix eggnog with vodka, shake well, and garnish with nutmeg.",
      calories: 200,
      image: "images/eggnog_martini.jpg",
    },
    {
      name: "Cranberry Mocktail",
      ingredients: "Cranberry Juice, Ginger Ale, Lime",
      recipe: "Combine cranberry juice and ginger ale. Squeeze in lime juice.",
      calories: 120,
      image: "images/cranberry_mocktail.jpg",
    },
    {
      name: "Peppermint Hot Chocolate",
      ingredients: "Hot Chocolate, Peppermint Schnapps, Whipped Cream",
      recipe:
        "Prepare hot chocolate, stir in peppermint schnapps, and top with whipped cream.",
      calories: 250,
      image: "images/peppermint_hot_chocolate.jpg",
    },
    {
      name: "Holiday Mule",
      ingredients: "Vodka, Ginger Beer, Cranberry Juice, Lime",
      recipe:
        "Mix vodka, ginger beer, and cranberry juice. Garnish with lime slices.",
      calories: 180,
      image: "images/holiday_mule.jpg",
    },
    {
      name: "Candy Cane Spritzer",
      ingredients: "Sparkling Water, Mint Syrup, Cranberry Juice",
      recipe:
        "Combine sparkling water, mint syrup, and cranberry juice. Serve chilled.",
      calories: 100,
      image: "images/candy_cane_spritzer.jpg",
    },
  ];
  
  const setUpCards = () => {
    const wrapper = $(".wrapper");
    drinks.forEach((drink) => {
      const card = `
        <div class="card">
          <img src="${drink.image}" />
          <div class="info">
            <h3>${drink.name}</h3>
            <p>${drink.ingredients}</p>
          </div>
        </div>`;
      wrapper.append(card);
    });
  };
  
  // Add interactivity
  const addCardInteractivity = () => {
    $(".card").each(function (index) {
      const drink = drinks[index];
  
      $(this).on("mouseover", function () {
        $(this).find(".info p").text(drink.recipe);
      });
  
      $(this).on("mouseout", function () {
        $(this).find(".info p").text(drink.ingredients);
      });
  
      $(this).on("click", function () {
        $(this).find(".info p").text(`${drink.calories} calories`);
      });
    });
  };
  
  $(document).ready(() => {
    setUpCards();
    addCardInteractivity();
  });
  