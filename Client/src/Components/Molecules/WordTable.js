import React from "react";
import styled from "styled-components";
import Button from "../Atoms/Button";
import NoLessonAlertBox from "../Molecules/NoLessonAlertBox";
import procentCalculator from "../../helpers/helpers";

const Table = styled.table`
  font-family: arial, sans-serif;
  text-align: center;
  border-collapse: collapse;
  width: 50%;
  @media all and (max-width: 750px) {
    width: 95%;
  }
`;
const ProcentValue = styled.div`
  margin-right: 10px;
`;
const StyledBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  overflow-y: scroll;
  height: 100%;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
  }
`;

const WordTable = ({ data, handleConfirm }) => {
  return (
    <Wrapper>
      {data.length === 0 ? (
        <NoLessonAlertBox />
      ) : (
        data.map((item, index) => {
          return (
            <Table key={index}>
              <tbody>
                <tr>
                  <Th>
                    <StyledBox>
                      {`Temat: ${item.lesson}`}
                      <ProcentValue>
                        {item.words.length > 0
                          ? `${procentCalculator(item.words)}%`
                          : null}
                      </ProcentValue>
                    </StyledBox>
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
                        {`${element.word} - ${element.translation}`}
                        <Button
                          key={element.translation}
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
    </Wrapper>
  );
};

export default WordTable;
