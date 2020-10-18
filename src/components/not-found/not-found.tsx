import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { NotFound404 } from './not-found-404';
import { NotFoundGoBackBtn } from './not-found-go-back-btn';

interface Props {
  className?: string;
}

const NotFoundComponent = ({ className }: Props) => {
  const history = useHistory();
  return (
    <section className={className}>
      <div>Page Not Found</div>
      <NotFound404 content="404" />
      <NotFoundGoBackBtn
        onClick={() => {
          history.push("/");
        }}
      >
        GO BACK TO HOME
      </NotFoundGoBackBtn>
    </section>
  );
};

const NotFound = styled(NotFoundComponent)`
  min-height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  color: white;
  font-size: 50px;
  font-weight: 100;
`;

export default NotFound;
