interface IeID {
  id: number;
  rowName: string;
}

export default function deleteString(
  eID: IeID,
  url: string,
  list: any[],
  setList: any
) {
  fetch(`${url}/v1/outlay-rows/entity/${eID.id}/row/${list[0].id}/delete`, {
    method: "DELETE",
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
