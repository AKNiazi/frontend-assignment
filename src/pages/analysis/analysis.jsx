import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import echarts from 'echarts';
import 'echarts-gl/dist/echarts-gl';
import { plotableData, plotOptions } from './utils';

class Analysis extends React.PureComponent {
  constructor (props) {
    super(props);
    this.dimensions = [
      'Market Capitalization',
      'Volumn (24h)',
      'Price Change (24h)',
    ];
  }

  componentDidMount() {
    this.scatterChart = echarts.init(this.refs.scatter);
    if (this.props.currencies.length) {
      this.plot(this.props);
    }
  }

  componentWillReceiveProps(np) {
    if (this.props.currencies.length !== np.currencies.length) {
      this.plot(np);
    }
  }

  plot(props) {
    const data = plotableData(props.currencies, this.dimensions);
    const options = plotOptions(data, this.dimensions);
    this.scatterChart.setOption(options, true);
  }
  render() {
    return (
      <div 
        className="mt-20"
        ref='scatter'
        style={{ minWidth: '90%', height: '500px' }}
      >
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currencies: state.currencies ? state.currencies.sort(currency => currency.cmc_rank) : [],
});

export const AnalysisContainer = withRouter(connect(mapStateToProps, null)(Analysis));
