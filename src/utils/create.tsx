interface IeID {
  id: number;
  rowName: string;
}

export default function createStr(
  eID: IeID,
  url: string,
  list: any[],
  setList: any
) {
  fetch(`${url}/v1/outlay-rows/entity/${eID.id}/row/create`, {
    method: "POST",
    body: JSON.stringify({
      equipmentCosts: list[0].equipmentCosts,
      estimatedProfit: list[0].estimatedProfit,
      machineOperatorSalary: list[0].machineOperatorSalary,
      mainCosts: list[0].mainCosts,
      materials: list[0].materials,
      mimExploitation: list[0].mimExploitation,
      overheads: list[0].overheads,
      parentId: null,
      rowName: list[0].rowName,
      salary: list[0].salary,
      supportCosts: list[0].supportCosts,
    }),
    headers: {
      Accept: "*/*",
      "Content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((list) => {
      setList(list);
    })
    .catch((error) => {
      console.log(error.message);
    });
}
