import * as React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Input,
} from 'reactstrap';

import { routes } from '../pages/routes';
import * as actions from '../actions/actions';
import { pageSizes } from '../constants';


const propTypes = {
  actions: PropTypes.object,
  recordsLimit: PropTypes.string,
};

export class Header extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  dropDownChanged = (e) => {
    this.props.actions.getCurrencies(e.target.value);
  }

  render() {
    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand>Coin Market Analysis</NavbarBrand>
        <NavbarToggler onClick={ this.toggle } />
        <Collapse isOpen={ this.state.isOpen } navbar>
          <Nav className="ml-auto" navbar>
            {
              routes.map((route) => (
                <NavItem key={route.title}>
                  <NavLink
                    exact
                    to={ route.path } 
                    className="nav-link" 
                    activeClassName="active"
                  >
                    { route.title }
                  </NavLink>
                </NavItem>
              ))
            }
            <NavItem>
            <Input 
              type="select" 
              onChange={this.dropDownChanged}
              value={this.props.recordsLimit}
              id="dropdown"
            >
              {
                pageSizes.map((pageSize) => (
                  <option value={pageSize} key={pageSize}>{pageSize}</option>
                ))
              }
            </Input>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

Header.propTypes = propTypes;

const mapStateToProps = state => ({
  recordsLimit: state.recordsLimit,
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);