import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import CloseIcon from '@material-ui/icons/Close';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import React, { useState } from 'react';
import styled from 'styled-components';

import { useStyles } from './menu-styles';

const ITEM_HEIGHT = 48;

interface Props {
  menuOptions: string[];
  className: string;
  onMenuClick?: (e: any) => void;
}

const MenuListComponent = ({ menuOptions, className, onMenuClick }: Props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();

  return (
    <div className={className}>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon className={classes.moreVertIcon} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
            position: "relative",
            paddingTop: "25px",
            background: "#232323",
          },
        }}
      >
        <CloseIcon onClick={handleClose} className={classes.closeIconBtn} />
        {menuOptions.map((option) => (
          <MenuItem
            key={option}
            className={classes.menuItem}
            onClick={() => {
              handleClose();
              onMenuClick({ option });
            }}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

const MenuList = styled(MenuListComponent)`
  position: absolute;
  top: 2px;
  right: 4px;
  background: #232323;
  border-radius: 50%;
  display: none;
  
`;

export default MenuList;
