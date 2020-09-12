import React, { useState } from 'react';
import styled from 'styled-components';

import Logo from '../logo/logo';
import Modal from '../modal/modal';
import ModalAddEditContent, { AddEditFormData } from '../modal/modal-add-edit-content';
import { HeaderAddBtn } from './header-add-btn';
import { HeaderSearchBlock } from './header-search-block';
import { HeaderSearchBtn } from './header-search-btn';
import { HeaderSearchInput } from './header-search-input';
import { HeaderSearchLine } from './header-search-line';
import { HeaderTitle } from './header-title';
import { HeaderTop } from './header-top';

interface Props {
  className?: string;
}

const HeaderComponent = ({ className }: Props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const modalHandler = (e: Event) => {
    e.preventDefault();
    setIsModalVisible(!isModalVisible);
  };

  const handleFormData = (data: AddEditFormData) => {
    console.log("data", data);
  };

  return (
    <header className={className}>
      <HeaderTop>
        <Logo />
        <HeaderAddBtn onClick={modalHandler}>+ ADD MOVIE</HeaderAddBtn>
      </HeaderTop>

      <HeaderSearchBlock>
        <HeaderTitle>FIND YOUR MOVIE</HeaderTitle>
        <HeaderSearchLine>
          <HeaderSearchInput
            type="text"
            placeholder="What do you want to watch?"
          />
          <HeaderSearchBtn>SEARCH</HeaderSearchBtn>
        </HeaderSearchLine>
      </HeaderSearchBlock>

      <Modal
        showModal={isModalVisible}
        closeModal={modalHandler}
        title={"ADD MOVIE"}
      >
        <ModalAddEditContent
          closeModal={modalHandler}
          onModalClick={(data) => handleFormData(data)}
          editableMode={false}
        />
      </Modal>
    </header>
  );
};

const Header = styled(HeaderComponent)`
  display: flex;
  flex-direction: column;
  background: url("src/assets/images/header-bg-01.png");
  width: 100%;
  height: 400px;
  background-position: center;
  background-size: cover;
`;

export default Header;
