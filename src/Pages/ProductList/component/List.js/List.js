import React from "react";
import styled from "styled-components";
import Card from "./Card";

function List(props) {
  // console.log(props.productSub);

  return (
    <ListContainer>
      <ListDescription>
        <ListTitle>
          <a href="#/">{props.productTitle}</a>
        </ListTitle>
        <ListInfo>
          <h3>{props.productSubTitle},&nbsp;</h3>
          <span>{props.productPrice}</span>
        </ListInfo>
      </ListDescription>
      <CardContainer>
        <StoreApparelList>
          <ViewsField>
            {props.productSub.map(el => (
              <Card
                productColor={el.color}
                productTitle={el.title}
                productUrl={el.url}
              />
            ))}
          </ViewsField>
        </StoreApparelList>
      </CardContainer>
    </ListContainer>
  );
}

export default List;

const ListContainer = styled.main`
  text-transform: uppercase;
  font-weight: bold;
`;

const ListDescription = styled.section`
  margin-top: 50px;
`;

const ListTitle = styled.h2`
  font-size: 40px;
`;

const ListInfo = styled.article`
  display: flex;
  padding: 2px 0 4px;
  font-size: 22px;
  font-weight: bold;
`;

const CardContainer = styled.article`
  width: 100%;
  margin: 0 auto;
  text-transform: uppercase;
  font-weight: bold;
`;

const StoreApparelList = styled.ul`
  margin: 0;
  padding: 0;
`;

const ViewsField = styled.li`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
  margin-right: -4px;
  padding-right: 10px;
`;
