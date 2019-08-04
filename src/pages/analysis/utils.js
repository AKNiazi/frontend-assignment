export const plotableData = function(data, dimensions) {
  return [dimensions, ...data.map(item => [
    item.quote.USD.market_cap,
    item.quote.USD.volume_24h,
    item.quote.USD.percent_change_24h])]
}

export const plotOptions = function(source, dimensions) {
  return {
    grid3D: {},
    tooltip: {},
    xAxis3D: {
      name: 'Market Capitalization',
      type: 'value'
    },
    yAxis3D: {
      name: 'Volumne (24h)',
      type: 'value'
    },
    zAxis3D: {
      name: 'Price Change (24h)',
      type: 'value'
    },
    series: [
      {
        type: 'scatter3D',
        symbolSize: 12,
        dimensions,
        data: source,
        encode: {
          x: 'Market Capitalization',
          y: 'Volumne (24h)',
          z: 'Price Change (24h)',
        }
      }
    ]
  };
};