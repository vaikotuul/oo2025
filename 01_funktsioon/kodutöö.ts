function ringiPindala(r: number): number {
    if (r < 0) throw new Error("Raadius ei saa olla negatiivne.");
    return Math.PI * Math.pow(r, 2);
  }
  
  console.log(ringiPindala(5));