import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';

const propTypes = {
  currencies: PropTypes.array,
};

class Overview extends React.PureComponent {

  render() {
    return (
      <Table
        responsive
        striped
        className='mt-20'
      >
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Price</th>
            <th>Price Change (24h)</th>
            <th>Market Cap</th>
            <th>Volume (24h)</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.currencies.map((currency) => (
              <tr key={currency.id}>
                <td>{ currency.cmc_rank }</td>
                <td>{ currency.name }</td>
                <td>{ currency.quote.USD.price }</td>
                <td>{ currency.quote.USD.percent_change_24h }</td>
                <td>{ currency.quote.USD.market_cap }</td>
                <td>{ currency.quote.USD.volume_24h }</td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    );
  }
}

Overview.propTypes = propTypes;

const mapStateToProps = state => ({
  currencies: state.currencies,
});

export const OverviewContainer = withRouter(connect(mapStateToProps, null)(Overview));
