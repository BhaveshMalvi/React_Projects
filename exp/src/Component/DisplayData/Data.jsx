import React from "react";

function Data({data}) {
 
  console.log(data);

  return (
    <>
      <div>
        <div className="bg-black text-center text-white m-1 p-2 rounded-md">
          <div>
            {data.map((e, index) => {
              return (
                <tbody key={index}>
                  <tr>
                    <td>{index}</td>
                    <td>{e.name}</td>
                    <td>{e.email}</td>
                  </tr>
                </tbody>
              );
            })}
          </div>
        </div>
      </div>

      <scrip></scrip>
    </>
  );
}

export default Data;
