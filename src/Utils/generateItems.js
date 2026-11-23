

const sampleProducts = [
  "Drift Wood",
  "Hands Clap",
  "Concrete Angles",
  "California Poppy",
  "Night Lamp",
  "Canal Street",
  "Green Birds",
  "Eye Rest",
  "No Battery",
  "Green Birds",
  "Kick flip",
  "Feather Ball"
];

function randomReference() {
  return "OD" + Math.floor(1000 + Math.random() * 9000);
}

function randomTotal() {
  return Math.floor(Math.random() * 400) + 50;
}

function randomItems() {
  return Math.floor(Math.random() * 5) + 1;
}


export function generateItems(posters) {
  return Array.from(
    { length: Math.floor(Math.random() * 3) + 1 },
    (_, index) => {
      const quantity = Math.floor(Math.random() * 5) + 1;
      const unitPrice = Math.floor(Math.random() * 100) + 10;

      const poster =
        posters[Math.floor(Math.random() * posters.length)];

     return {
      
        reference: poster.alt.split(" ").slice(0, 3).join(" "),
        image: poster.src.medium,
        thumbnail: poster.src.small,
        imageLink: poster.url,
        productId: poster.productId,
        width: poster.width,
        height: poster.height,
        quantity,
        total: quantity * unitPrice,
};
    }
  );
}

