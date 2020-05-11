import React from 'react';
import './MenuBar.css';
import { Toolbar, AppBar, Button, MenuItem, MenuList, ClickAwayListener, Grow, Paper, Popper } from '@material-ui/core';
import Todos from '../Todos/Todos';
import Posts from '../Posts/Posts';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';


export default function MenuBar(props) {

    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    function handleToggle() {
      setOpen(prevOpen => !prevOpen);
    }

    function handleClose(event) {
      if (anchorRef.current && anchorRef.current.contains(event.target)) {
        return;
      }

      setOpen(false);
    }

    function handleSearch(e) {
      e.preventDefault();
      props.handleSearch(e);
    }
        return (
            <Router>
              <div style={ {flexGrow:1} }>
              <AppBar position="static" style={{marginTop:'1rem'}}>
                <Toolbar className="Nav">
              <div>
                <Button
                  ref={anchorRef}
                  aria-controls="Menu-List-Grow"                                                    
                  aria-haspopup="true"
                  onClick={handleToggle}
                  style={{zIndex:1000}}
                >
                  <MenuIcon />
                    &nbsp;<strong>menu</strong>
                </Button>
                <Popper open={open} 
                        anchorEl={anchorRef.current} 
                        keepMounted 
                        transition 
                        disablePortal
                >
                  {({ TransitionProps, placement }) => (
                    <Grow
                      {...TransitionProps}
                      style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                    >
                      <Paper className="Menu-List-Grow">
                        <ClickAwayListener onClickAway={handleClose}>
                          <MenuList>
                              
                            <MenuItem onClick={(e) => props.hideUsers()}>
                              <Link className="Link" to="/todos">Todos</Link>
                            </MenuItem>
                            <MenuItem onClick={(e) => props.hideUsers()}>
                              <Link className="Link" to="/posts">Posts</Link>
                            </MenuItem>
                            <MenuItem onClick={(e) => props.showUsers()}>
                              <Link className="Link" to="/">Users</Link>
                            </MenuItem>
                                
                          </MenuList>
                        </ClickAwayListener>
                      </Paper>
                    </Grow>
                  )}
                </Popper>
              </div>
              <div>
                <input type="text" placeholder="enter keyword" className="TbSearch" onChange={handleSearch} />
              </div>
                </Toolbar>
              </AppBar>
              </div>
              <Switch>
                <Route path="/todos" component={Todos}/>
                <Route path="/posts" component={Posts}/>
              </Switch>
           </Router>
        );
}
    
