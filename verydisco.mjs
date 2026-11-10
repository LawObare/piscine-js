const input = process.argv[2];

if (input !== undefined) {
  const result = input
    .split(" ")
    .map((word) => {
      const mid = Math.ceil(word.length / 2);
      return word.slice(mid) + word.slice(0, mid);
    })
    .join(" ");

  console.log(result);
}
