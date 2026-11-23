const categories = [
  "animal",
  "beard",
  "business",
  "cars",
  "city",
  "flowers",
  "nature",
  "people",
  "sports",
  "tech",
  "travel",
  "food",
];

const products = categories.flatMap((category) =>
  Array.from({ length: 10 }, (_, index) => ({
    id: `${category}-${index + 1}`,
    category,
    image: `https://picsum.photos/300/300?random=${category}${index}`,
  }))
);

console.log(products);