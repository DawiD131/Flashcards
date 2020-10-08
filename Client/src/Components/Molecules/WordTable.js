import React from "react";
import styled from "styled-components";
import Button from "../Atoms/Button";

const Table = styled.table`
  font-family: arial, sans-serif;
  text-align: center;
  border-collapse: collapse;
  width: 35%;
`;
const Td = styled.td`
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 4px;
`;
const Th = styled.th`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 1px solid black;
  padding: 3px;
`;

const WordTable = ({ data, handleConfirm }) => {
  return (
    <>
      {data.length === 0 ? (
        <>
          <h1>Brak lekcji</h1>
          <br />
          <h1>Przejdź do panelu głównego i dodaj lekcję</h1>
        </>
      ) : (
        data.map((item, index) => {
          return (
            <Table key={index}>
              <tbody>
                <tr>
                  <Th>
                    {`Temat: ${item.lesson}`}
                    <Button
                      dangerous
                      txt="Usuń"
                      function={() =>
                        handleConfirm("lesson", item.lesson, null)
                      }
                    />
                  </Th>
                </tr>
                {item.words.map((element, index) => {
                  return (
                    <tr key={index}>
                      <Td key={element.word}>
                        {`${element.word} - ${element.translate}`}{" "}
                        <Button
                          key={element.translate}
                          warning
                          txt="Usuń"
                          function={() =>
                            handleConfirm("word", element.word, item.lesson)
                          }
                        />
                      </Td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          );
        })
      )}
    </>
  );
};

export default WordTable;
