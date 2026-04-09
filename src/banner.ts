function banner(...rows: string[]) {
  const padded = rows.map((row) => ` ${row} `);
  const width = Math.max(...padded.map((row) => row.length));
  const line = "=".repeat(width + 2);

  const body = padded.map((row) => {
    const totalFill = width - row.length;
    const left = "=".repeat(Math.floor(totalFill / 2));
    const right = "=".repeat(totalFill - left.length);
    return `=${left}${row}${right}=`;
  });
  [line, ...body, line].forEach((l) => console.log(l));
}

export default banner;
