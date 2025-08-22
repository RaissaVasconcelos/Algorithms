const search = (nums: number[], target: number) => {
  let left = 0;
  let right = nums.length - 1;

  console.log('Array original:', nums);
  console.log('Target:', target);

  while (left <= right) {
    const medium = Math.floor((left + right) / 2);

    console.log('----------------------------------');
    console.log(`Intervalo atual: left = ${left}, right = ${right}`);
    console.log(`Cálculo do meio: medium = ${medium}`);
    console.log(`Valor no meio: nums[${medium}] = ${nums[medium]}`);

    if (nums[medium] === target) {
      console.log(`Target encontrado no índice ${medium}`);
      return medium;
    } else if (nums[medium] < target) {
      console.log(`${nums[medium]} < ${target} → mover left para medium + 1`);
      left = medium + 1;
    } else {
      console.log(`${nums[medium]} > ${target} → mover right para medium - 1`);
      right = medium - 1;
    }
  }

  console.log('Target não encontrado. Retornando -1');
  return -1;
};

// Exemplo de uso
search([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25], 17);

