import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Card = styled.div<{ isDragging: boolean }>`
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 10px 10px;
  background-color: ${(props) =>
        props.isDragging ? "#74b9ff" : props.theme.cardColor};
  box-shadow: ${(props) =>
        props.isDragging ? "0px 2px 5px rgba(15,15,15,0.5)" : "none"};
`;

interface IDragabbleCardProps {
    toDo: string;
    index: number;
}

function DraggabbleCard({ toDo, index }: IDragabbleCardProps) {
    console.log(toDo, "is reRendered");
    return (
        <Draggable key={toDo} draggableId={toDo} index={index}>
            {(magic, snapshot) => (
                <Card
                    isDragging={snapshot.isDragging}
                    ref={magic.innerRef}
                    {...magic.dragHandleProps}
                    {...magic.draggableProps}
                >
                    {toDo}
                </Card>
            )}
        </Draggable>
    );
}

export default React.memo(DraggabbleCard);
