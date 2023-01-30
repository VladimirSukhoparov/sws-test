interface IeID {
  id: number;
  rowName: string;
}

const eID: IeID = {
  'id': 33904,
  'rowName': "ad3cdf45-6410-4736-8bbb-6fb8cdf0cf9e",
};

async function getList() {
  let url = "http://185.244.172.108:8081";
  try {
    const response = await fetch(
      `${url}/v1/outlay-rows/entity/${eID.id}/row/list`,
      {
        method: "GET",
        headers: {
          Accept: "*/*",
        },
      }
    );
    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    if (error instanceof Error) {
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
}
export default getList();
